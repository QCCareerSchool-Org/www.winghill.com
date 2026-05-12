import Link from 'next/link';
import type { FC } from 'react';

import { Address } from './address';
import { FooterColumn1 } from './footerColumn1';
import { FooterColumn2 } from './footerColumn2';
import { FooterColumn3 } from './footerColumn3';

export const Footer: FC = () => (
  <footer className="mt-auto">
    <div className="container">
      <div className="row">
        {/* <div className={styles.column0}>
          <div className="d-flex h-100 flex-column justify-content-between">
            <div className="mb-5">
              <div className="mb-4"><Logo height={22} /></div>
              <h2 className="h6 mb-4">Get Started with a Free Course Catalog</h2>
              <Link href="/free-course-catalog" className="btn btn-outline-secondary">Get the Catalog</Link>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column align-items-center text-center" style={{ width: 75, marginRight: '1.25rem' }}>
                <div className="mb-2"><a href="http://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-quality-of-course-in-ottawa-on-4175" target="_blank" rel="noreferrer"><BBBIcon /></a></div>
                <a href="http://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-quality-of-course-in-ottawa-on-4175" target="_blank" rel="noreferrer" className="small" style={{ color: 'inherit', lineHeight: '1rem' }}>A+ Rated by the BBB</a>
              </div>
              <div className="d-flex flex-column align-items-center text-center" style={{ width: 100 }}>
                <div className="mb-2"><FortyYearsIcon height="68" /></div>
                <span className="small" style={{ lineHeight: '1rem' }}>40+ Years of Innovation</span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row align-items-start">
          <h2 className="h6">Social Media</h2>
          <ul>
            <FooterColumn1 />
          </ul>
        </div>
        <div>
          <h2 className="h6">Quick Links</h2>
          <ul>
            <FooterColumn2 />
          </ul>
        </div>
        <div>
          <h2 className="h6">Contact Us</h2>
          <ul>
            <FooterColumn3 />
          </ul>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column flex-lg-row">
        <div>
          <div className="d-flex flex-column flex-md-row mb-1">
            <div className="me-md-3 mb-1 mb-md-0">&copy; {new Date().getFullYear()} Winghill Writing School</div>
            <div className="d-flex flex-column flex-sm-row w-100 justify-content-center align-items-center">
              <div className="me-sm-3"><Link href="/terms">Privacy Policy</Link></div>
              <div className="me-sm-3"><Link href="/blog">Blog</Link></div>
              <a href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175" className="me-sm-3">BBC Accredited A+</a>
              <a href="https://www.qccareerschool.com" target="_blank" rel="noreferrer">QC Career School</a>
            </div>
          </div>
          <div className="mb-2 mb-lg-0">
            <Address />
          </div>
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
