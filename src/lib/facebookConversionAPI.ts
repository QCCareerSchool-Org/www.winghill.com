'server only';

import { createHash } from 'crypto';

import type { Enrollment } from '@/domain/enrollment';

const apiVersion = 'v20.0';
const datasetId = '520626392908502';
const accessToken = 'EAAMUT7XQ1g0BO5wBaKj6vPYKLZBz0GZBsyGoFaGe6DMK9noiEvjUWfxNy0PKwloAqn7Lpuvi2ZCPwZAENgb2Ie5bwW7Y9ctPhP0MyY7S6ZBlvSuJ6bWHor6DPG7gbZB0FHPeWE7uHLu3WgxYPATgv9aT2H54sPmYMISUyynQxhxRBWvAHmekQyy7tVvOb7QPhvrwZDZD';

export const fbPostPurchase = async (
  enrollment: Enrollment,
  eventSourceUrl: string,
  clientIPAddress: string | null,
  clientUserAgent: string | null,
  fbc?: string,
  fbp?: string,
): Promise<unknown> => {
  const url = `https://graph.facebook.com/${apiVersion}/${datasetId}/events?access_token=${accessToken}`;

  const eventTime = enrollment.transactionTime ?? new Date();

  const body: { data: PurchaseConversion[] } = {
    data: [
      {
        event_name: 'Purchase', // eslint-disable-line camelcase
        event_time: Math.floor(eventTime.getTime() / 1000), // eslint-disable-line camelcase
        action_source: 'website', // eslint-disable-line camelcase
        user_data: { // eslint-disable-line camelcase
          em: hash(normalizeEmailAddress(enrollment.emailAddress)),
          ph: hash(normalizeTelephoneNumber(enrollment.telephoneNumber)), // NOTE: we don't have the telephone country code
          fn: hash(normalizeName(enrollment.firstName)),
          ln: hash(normalizeName(enrollment.lastName)),
          ge: hash(enrollment.title === 'Mr.' ? 'm' : 'f'),
          ct: hash(normalizeCity(enrollment.city)),
          st: enrollment.provinceCode ? hash(normalizeState(enrollment.provinceCode)) : undefined,
          zp: enrollment.postalCode ? hash(normalizeZipCode(enrollment.postalCode, enrollment.countryCode)) : undefined,
          country: hash(enrollment.countryCode.toLowerCase()),
          client_ip_address: clientIPAddress ?? undefined, // eslint-disable-line camelcase
          client_user_agent: clientUserAgent ?? undefined, // eslint-disable-line camelcase
          fbc,
          fbp,
        },
        custom_data: { // eslint-disable-line camelcase
          currency: enrollment.currencyCode,
          value: enrollment.cost,
        },
        event_source_url: eventSourceUrl, // eslint-disable-line camelcase
        event_id: enrollment.id.toString(), // eslint-disable-line camelcase
      },
    ],
  };

  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'content-type': 'application/json' },
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw Error(JSON.stringify(await response.json()));
  }

  return response.json();
};

export const fbPostLead = async (
  eventId: string,
  eventTime: Date,
  emailAddress: string,
  firstName: string | undefined,
  lastName: string | undefined,
  countryCode: string | undefined,
  eventSourceUrl: string | undefined,
  clientIPAddress: string | undefined,
  clientUserAgent: string | undefined,
  fbc?: string,
  fbp?: string,
): Promise<unknown> => {
  const url = `https://graph.facebook.com/${apiVersion}/${datasetId}/events?access_token=${accessToken}`;

  const body: { data: LeadConversion[] } = {
    data: [
      {
        event_name: 'Lead', // eslint-disable-line camelcase
        event_time: Math.floor(eventTime.getTime() / 1000), // eslint-disable-line camelcase
        action_source: 'website', // eslint-disable-line camelcase
        user_data: { // eslint-disable-line camelcase
          em: hash(normalizeEmailAddress(emailAddress)),
          fn: typeof firstName === 'undefined' ? undefined : hash(normalizeName(firstName)),
          ln: typeof lastName === 'undefined' ? undefined : hash(normalizeName(lastName)),
          country: typeof countryCode === 'undefined' ? undefined : hash(countryCode.toLowerCase()),
          client_ip_address: clientIPAddress, // eslint-disable-line camelcase
          client_user_agent: clientUserAgent, // eslint-disable-line camelcase
          fbc,
          fbp,
        },
        event_source_url: eventSourceUrl, // eslint-disable-line camelcase
        event_id: eventId, // eslint-disable-line camelcase
      },
    ],
  };

  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'content-type': 'application/json' },
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw Error(JSON.stringify(await response.json()));
  }

  return response.json();
};

const hash = (input: string): string => {
  return createHash('sha256').update(input).digest('hex');
};

const removePunctuation = (input: string): string => input.replace(/[^\p{L}\s]/ug, '').replace(/\s+/ug, ' ');

const normalizeEmailAddress = (emailAddress: string): string => {
  return emailAddress.toLowerCase().trim();
};

const normalizeTelephoneNumber = (telephoneNumber: string): string => {
  return telephoneNumber.trim().replace(/[^0-9]/ug, '').replace(/^0+/ug, ''); // remove anything that's not a number, and leading zeros
};

const normalizeName = (name: string): string => {
  return removePunctuation(name.trim().toLowerCase());
};

const normalizeCity = (city: string): string => {
  return removePunctuation(city.trim().toLowerCase().replace(/\s+/ug, ''));
};

const normalizeState = (state: string): string => {
  return state.toLowerCase().replace(/[^a-z]/ug, '');
};

const normalizeZipCode = (zipCode: string, countryCode: string): string => {
  if (countryCode === 'US') {
    return zipCode.trim().substring(0, 4);
  }
  return zipCode.trim().toLowerCase().replace(/\s+/ug, '');
};

type ActionSource = 'email' | 'website' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'business_messaging' | 'other';

type UserData = {
  /** email address (hashing required) */
  em: string | string[];
  /** telephone number (hashing required) */
  ph?: string | string[];
  /** first name (hashing required) */
  fn?: string;
  /** last name (hashing required) */
  ln?: string;
  /** date of birth (hashing required) */
  db?: string;
  /** gender (hashing required) */
  ge?: string;
  /** city (hashing required) */
  ct?: string;
  /** state (hashing required) */
  st?: string;
  /** zip code (hashing required) */
  zp?: string;
  /** iso 3166-1 alpha-2 country code (hashing required) */
  country?: string;
  /** external id (hashing recommended) */
  external_id?: string;
  /** client IP address (do not hash) */
  client_ip_address?: string;
  /** client user agent (do not hash) */
  client_user_agent?: string;
  /** Facebook click id (do not hash) */
  fbc?: string;
  /** Facebook browser id (do not hash) */
  fbp?: string;
};

type LeadConversion = {
  event_name: 'Lead';
  event_time: number;
  action_source: ActionSource;
  user_data: UserData;
  event_source_url?: string;
  event_id: string;
};

type CustomData = {
  value: number;
  currency: 'CAD' | 'USD' | 'GBP' | 'AUD' | 'NZD';
};

type PurchaseConversion = {
  event_name: 'Purchase';
  event_time: number;
  action_source: ActionSource;
  user_data: UserData;
  custom_data: CustomData;
  event_source_url?: string;
  event_id: string;
};
