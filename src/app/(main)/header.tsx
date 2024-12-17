import type { FC } from 'react';

import { MainNav } from './mainNav';
import { CountDownTimer } from '@/components/countDownTimer';
import { getData } from '@/lib/getData';

export const Header: FC = () => {

  const date = new Date().getTime();
  const { countryCode } = getData();

  return (
    <header className={`flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      <CountDownTimer date={date} countryCode={countryCode} />
      <MainNav />
    </header>
  );
};
