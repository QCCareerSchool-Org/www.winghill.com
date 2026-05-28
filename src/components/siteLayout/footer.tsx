import Link from 'next/link';
import type { FC } from 'react';
import { Fragment } from 'react';
import { FaFacebook, FaLinkedin, FaPinterest } from 'react-icons/fa6';

import { TelephoneLink } from '../telephoneLink';
import { getAddress } from '@/lib/address';

interface Props {
  countryCode: string;
}

const bbbUrl = 'https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175';

export const Footer: FC<Props> = ({ countryCode }) => {
  const address = getAddress(countryCode);

  return (
    <footer className="mt-auto py-5 bg-dark-grey">
      <div className="container text-white text-center text-sm-start text-md-center">

        <div className="row g-2 g-sm-4 mb-sm-4">
          <div className="col-12 col-sm-6 col-md-4">
            <h3 className="h5 text-white mb-1 mb-md-2">Social Media</h3>
            <ul className="list-unstyled d-flex flex-column gap-md-2">
              <li><a href="https://www.facebook.com/Winghill" className="footerLink">Like Us on Facebook</a></li>
              <li><a href="https://x.com/WinghillWS/" className="footerLink">Follow Us on Twitter</a></li>
              <li><a href="https://www.youtube.com/winghillschool" className="footerLink">Subscribe on YouTube</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <h3 className="h5 text-white mb-1 mb-md-2">Quick Links</h3>
            <ul className="list-unstyled d-flex flex-column gap-md-2">
              <li><Link href="/online-writing-courses" className="footerLink">Courses</Link></li>
              <li><Link href="/faq" className="footerLink">FAQ</Link></li>
              <li><Link href="/about/#guarantee" className="footerLink">Our Guarantee</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <h3 className="h5 text-white mb-1 mb-md-2">Contact Us</h3>
            <ul className="list-unstyled customGrey">
              {address.map(line => <Fragment key={line}>{line}<br /></Fragment>)}
              <TelephoneLink countryCode={countryCode} className="footerLink" />
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center gap-2 text-center">
          <hr className="mt-0 mb-4 align-self-stretch" />
          <div className="customGrey">&copy; {new Date().getFullYear()} Winghill Writing School</div>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-sm-3">
            <Link href="/terms" className="footerLink">Privacy Policy</Link>
            <Link href={bbbUrl} target="_blank" rel="noreferrer" className="footerLink">BBC Accredited A+</Link>
            <Link href="https://www.qccareerschool.com" target="_blank" rel="noreferrer" className="footerLink">QC Career School</Link>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <div><a href="https://www.facebook.com/Winghill" target="_blank" rel="noreferrer" aria-label="Facebook" className="footerLink"><FaFacebook /></a></div>
            <div><a href="https://www.linkedin.com/showcase/winghill-writing-school/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footerLink"><FaLinkedin /></a></div>
            <div><a href="https://www.pinterest.com/qccareerschool" target="_blank" rel="noreferrer" aria-label="Pinterest" className="footerLink"><FaPinterest /></a></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
