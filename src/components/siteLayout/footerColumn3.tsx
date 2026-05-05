import type { FC } from 'react';
import { BiChat, BiEnvelope, BiPhone } from 'react-icons/bi';

import { ChatLink } from '@/components/chatLink';
import { EmailLink } from '@/components/emailLink';
import { TelephoneLink } from '@/components/telephoneLink';
import { getServerData } from '@/lib/getServerData';

export const FooterColumn3: FC = async () => {
  const { countryCode } = await getServerData();

  return (
    <>
      <li><BiChat className="me-2" /><ChatLink>Live Chat</ChatLink></li>
      <li><BiEnvelope className="me-2" /><EmailLink /></li>
      <li><BiPhone className="me-2" /><TelephoneLink countryCode={countryCode} /></li>
    </>
  );
};
