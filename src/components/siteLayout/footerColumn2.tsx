import Link from 'next/link';
import type { FC } from 'react';

export const FooterColumn2: FC = () => (
  <>
    <li><Link href="/online-writing-courses" className="footerLink">Courses</Link></li>
    <li><Link href="/faq" className="footerLink">Frequently Asked Questions</Link></li>
    <li><Link href="/about/#guarantee" className="footerLink">Our Guarantee</Link></li>
  </>
);
