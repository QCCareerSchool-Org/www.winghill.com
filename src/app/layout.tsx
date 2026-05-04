import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

import { inter } from '@/fonts';
import { Provider } from '@/providers';
import { Bing } from '@/scripts/bing';
import { Brevo } from '@/scripts/brevo';
import { Facebook } from '@/scripts/facebook';
import { GoogleAnalytics } from '@/scripts/googleAnalytics';
import { OptInMonster } from '@/scripts/optInMonster';
import { Tiktok } from '@/scripts/tiktok';
import type { LayoutComponent } from '@/serverComponent';
import { getServerData } from '@/lib/getServerData';
import { cookies } from 'next/headers';
import { decodeJwt } from '@/lib/jwt';
import { isUserValues } from '@/domain/userValues';
import { LayoutClient } from './layoutClient';
import { Suspense } from 'react';
import styles from './layout.module.scss';

import './bootstrap.scss';
import './global.scss';

export const metadata: Metadata = {
  title: { default: 'Winghill Writing School', template: '%s - Winghill Writing School' },
  metadataBase: new URL('https://www.winghill.com'),
};

const RootLayout: LayoutComponent = async ({ children }) => {
  const { clientIp } = await getServerData();
  const jwt = (await cookies()).get('user')?.value;
  const result = jwt ? await decodeJwt(jwt) : undefined;
  const raw = result?.success ? result.value : undefined;
  const userValues = raw && isUserValues(raw) ? raw : undefined;

  return (
    <html lang="en" className={`${inter.variable} h-100`}>
      <head>
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} userValues={userValues} />}
        {process.env.BREVO_CLIENT_KEY && <Brevo clientKey={process.env.BREVO_CLIENT_KEY} userValues={userValues} />}
        {process.env.NEXT_PUBLIC_FACEBOOK_ID && <Facebook id={process.env.NEXT_PUBLIC_FACEBOOK_ID} userValues={userValues} />}
        {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
        {process.env.BING_ID && <Bing id={process.env.BING_ID} userValues={userValues} />}
      </head>
      <body className="d-flex flex-column">
        <Provider userValues={userValues} clientIp={clientIp}>
          {children}
        </Provider>
        <OptInMonster />
        <Suspense><LayoutClient /></Suspense>
        <ToastContainer pauseOnFocusLoss pauseOnHover position="top-center" className={styles.toastContainer} />
      </body>
    </html>
  );
};

export default RootLayout;
