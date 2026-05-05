import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';

import type { PageComponent } from '../serverComponent';
import styles from './not-found.module.scss';
import { SiteLayout } from '@/components/siteLayout';
import { getRequiredInteger } from '@/lib/getRequiredHeader';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

const NotFoundPage: PageComponent = async () => {
  const headersList = await headers();
  const date = getRequiredInteger(headersList, 'x-current-date');

  return (
    <SiteLayout date={date}>
      <div className={styles.wrapper}>
        <h1>Page Not Found</h1>
        <p>Sorry, we could not find the requested page</p>
        <div className="d-flex justify-content-center">
          <Link href="/" className="btn btn-primary me-3">Home Page</Link>
          <Link href="/online-writing-courses" className="btn btn-outline-dark">Course List</Link>
        </div>
      </div>
    </SiteLayout>
  );
};

export default NotFoundPage;
