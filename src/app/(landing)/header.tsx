import Link from 'next/link';
import type { FC, JSX } from 'react';

import { ButtonWrapper } from './buttonWrapper';
import styles from './header.module.scss';
import { Logo } from '@/components/logo';

interface Props {
  logoLink?: boolean;
  buttonHref?: string;
  buttonContent?: JSX.Element | string;
  buttonAlwaysVisible?: boolean;
  showBanner?: boolean;
}

export const Header: FC<Props> = ({ logoLink, buttonHref = '#', buttonContent, buttonAlwaysVisible }) => (
  <div className={styles.headerComponent}>
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            {logoLink
              ? <Link href="/" aria-label="Home page"><Logo height={96} /></Link>
              : <Logo height={96} />
            }
          </div>
          {buttonContent && (
            <ButtonWrapper alwaysVisible={!!buttonAlwaysVisible}>
              <Link href={buttonHref} className={`btn btn-navy ${styles.button}`}>{buttonContent}</Link>
            </ButtonWrapper>
          )}
        </div>
      </div>
    </header>
  </div>
);
