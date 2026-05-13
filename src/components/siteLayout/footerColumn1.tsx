import type { FC } from 'react';

import styles from './footer.module.scss';

export const FooterColumn1: FC = () => (
  <>
    <li><a href="https://www.facebook.com/Winghill" className={styles.footerLink}>Like Us on Facebook</a></li>
    <li><a href="https://x.com/WinghillWS/" className={styles.footerLink}>Follow Us on Twitter</a></li>
    <li><a href="https://www.youtube.com/winghillschool" className={styles.footerLink}>Subscribe on YouTube</a></li>
  </>
);
