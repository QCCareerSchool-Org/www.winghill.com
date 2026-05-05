import { headers } from 'next/headers';

import { SiteLayout } from '@/components/siteLayout';
import type { LayoutComponent } from '@/serverComponent';

const MainLayout: LayoutComponent = async ({ children }) => {
  const headerList = await headers();
  const date = Number(headerList.get('x-current-date'));

  return <SiteLayout date={date}>{children}</SiteLayout>;
};

export default MainLayout;
