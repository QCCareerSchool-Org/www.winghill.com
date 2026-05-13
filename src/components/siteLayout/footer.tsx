import Link from 'next/link';
import type { FC } from 'react';

import styles from './footer.module.scss';
import { FooterColumn1 } from './footerColumn1';
import { FooterColumn2 } from './footerColumn2';
import { FooterColumn3 } from './footerColumn3';
export const Footer: FC = () => (
  <footer className={`mt-auto pt-5 bg-dark-grey ${styles.footer}`}>
    <div className="container text-white">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mb-0-lg">
          <h3 className="h5 text-white mb-4">Social Media</h3>
          <ul className="list-unstyled d-flex flex-column gap-4">
            <FooterColumn1 />
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-8 col-lg-6">
          <h3 className="h5 text-white mb-4">Quick Links</h3>
          <ul className="list-unstyled d-flex flex-column gap-4">
            <FooterColumn2 />
          </ul>
        </div>

        <div className="col-12 col-md-12 col-lg-3">
          <h3 className="h5 text-white mb-4">Contact Us</h3>
          <ul className={`list-unstyled ${styles.customGrey}`}>
            <FooterColumn3 />
          </ul>
        </div>

      </div>
      <hr />
      <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-center align-items-center gap-3 text-center">
        <div className={`me-md-3 mb-1 mb-md-0 ${styles.customGrey}`}>&copy; {new Date().getFullYear()} Winghill Writing School</div>
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
          <div><Link href="/terms" className={`me-sm-3 ${styles.footerLink}`}>Privacy Policy</Link></div>
          <div><Link href="/blog" className={`me-sm-3 ${styles.footerLink}`}>Blog</Link></div>
          <a href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175" className={`me-sm-3 ${styles.footerLink}`}>BBC Accredited A+</a>
          <a href="https://www.qccareerschool.com" target="_blank" rel="noreferrer" className={`me-sm-3 ${styles.footerLink}`}>QC Career School</a>
        </div>
        <div className="d-flex gap-3">
          <div><a href="https://www.facebook.com/Winghill" target="_blank" rel="noreferrer" aria-label="Facebook" /></div>
          <div><a href="https://www.linkedin.com/showcase/winghill-writing-school/" target="_blank" rel="noreferrer" aria-label="LinkedIn" /></div>
          <div><a href="https://www.pinterest.com/qccareerschool" target="_blank" rel="noreferrer" aria-label="Pinterest" /></div>
        </div>
      </div>
    </div>
  </footer>
);
