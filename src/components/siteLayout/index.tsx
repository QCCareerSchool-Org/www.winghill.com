import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { TaxCreditsModal } from '@/components/taxCreditsModal';
import { getServerData } from '@/lib/getServerData';
import { BrevoConversations } from '@/scripts/brevoConversations';

interface Props {
  date: number;
}

export const SiteLayout: FC<PropsWithChildren<Props>> = async ({ date, children }) => {
  const { countryCode, provinceCode } = await getServerData();

  return (
    <>
      <Header date={date} countryCode={countryCode} provinceCode={provinceCode} />
      {date}
      <main className="flex-shrink-0">{children}</main>
      <Footer />
      {process.env.BREVO_CONVERSATIONS_ID && process.env.BREVO_GROUP_ID && <BrevoConversations conversationsId={process.env.BREVO_CONVERSATIONS_ID} groupId={process.env.BREVO_GROUP_ID} />}
      <TaxCreditsModal />
    </>
  );
};
