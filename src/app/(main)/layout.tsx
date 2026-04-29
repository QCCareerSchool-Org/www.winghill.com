import { Suspense } from 'react';

import { LayoutClient } from '../layoutClient';
import { LiveChat } from '@/scripts/liveChat';
import type { LayoutComponent } from '@/serverComponent';

import '../bootstrap.scss';

const MainLayout: LayoutComponent = ({ children }) => {
  return (
    <>
      <main className="flex-shrink-0">{children}</main>
      <LiveChat license={1056788} group={1} />
      <Suspense><LayoutClient /></Suspense>
    </>
  );
};

export default MainLayout;
