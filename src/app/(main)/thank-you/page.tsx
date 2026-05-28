import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import FAQ from './thank-you-page-frequently-asked-questions.png';
import HowItWorks from './thank-you-page-how-it-works.png';
import StudentResources from './thank-you-page-student-resources.png';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Thank You',
  alternates: { canonical: '/thank-you' },
  robots: { index: false },
};

const ThankYouPage: PageComponent = () => (
  <>
    <section>
      <div className="container text-center">
        <h1>Thank You For Your Interest</h1>
        <p className="px-5">Please check your <strong>email inbox</strong> for the electronic brochure that was sent along with your price breakdown. If can't find the email in your inbox, please check your <strong>spam folder</strong>. If you have any questions, please do not hesitate to give us a call.</p>
        <p>If you prefer, you can also <Link href="https://www.winghill.com/downloadbrochure.php">download the brochure</Link> in PDF format.</p>
      </div>
      <div className="row justify-content-center align-items-start text-center g-5">
        <div className="col-auto">
          <p className="mb-1">North America</p>
          <p className="mb-1">Australia</p>
          <p className="mb-1">New Zealand</p>
          <p className="mb-1">International</p>
        </div>
        <div className="col-auto">
          <p className="mb-1">1-800-267-1829</p>
          <p className="mb-1">1800 358 931</p>
          <p className="mb-1">0800 451 979</p>
          <p className="mb-1">+1 613 749 8248</p>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-4 col-12 d-flex flex-column align-items-center">
            <Image src={HowItWorks} alt="" />
            <h2 className="h3 mt-3">How It Works</h2>
            <Link href="/online-writing-courses" className="btn btn-primary btn-lg mt-auto align-self-center">Learn More</Link>
          </div>
          <div className="col-lg-4 col-12 d-flex flex-column align-items-center">
            <Image src={FAQ} alt="" />
            <h2 className="h3 mt-3">Frequently Asked Questions</h2>
            <Link href="/faq" className="btn btn-primary btn-lg mt-auto align-self-center">Learn More</Link>
          </div>
          <div className="col-lg-4 col-12 d-flex flex-column align-items-center">
            <Image src={StudentResources} alt="" />
            <h2 className="h3 mt-3">Student Resources</h2>
            <Link href="/student-resources" className="btn btn-primary btn-lg mt-auto align-self-center">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ThankYouPage;
