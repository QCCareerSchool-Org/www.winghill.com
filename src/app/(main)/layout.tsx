import { headers } from 'next/headers';

import { SiteLayout } from '@/components/siteLayout';
import { getRequiredIntegerHeader } from '@/lib/getRequiredHeader';
import type { LayoutComponent } from '@/serverComponent';

const MainLayout: LayoutComponent = async ({ children }) => {
  const headersList = await headers();
  const date = getRequiredIntegerHeader(headersList, 'x-current-date');

  return <SiteLayout date={date}>{children}</SiteLayout>;
};

export default MainLayout;
