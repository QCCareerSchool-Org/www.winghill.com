import Link from 'next/link';
import type { FC } from 'react';

export const FooterColumn2: FC = () => (
  <>
    <li><Link href="/online-writing-courses">Courses</Link></li>
    <li><Link href="/faq">Frequently Asked Questions</Link></li>
    <li><Link href="/about/#guarantee">Our Guarantee</Link></li>
  </>
);
