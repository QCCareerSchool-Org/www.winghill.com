import Link from 'next/link';
import type { FC } from 'react';

import styles from './footer.module.scss';
export const FooterColumn2: FC = () => (
  <>
    <li><Link href="/online-writing-courses" className={styles.footerLink}>Courses</Link></li>
    <li><Link href="/faq" className={styles.footerLink}>Frequently Asked Questions</Link></li>
    <li><Link href="/about/#guarantee" className={styles.footerLink}>Our Guarantee</Link></li>
  </>
);
