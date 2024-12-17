import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';

import { BottomSection } from '../bottomSection';
import { AboutSection } from '../free-catalog//aboutSection';
import { CertificationSection } from '../free-catalog//certificationSection';
import { IndustrySection } from '../free-catalog//industrySection';
import { JoinQCSection } from '../free-catalog//joinQCSection';
import { Header } from '../header';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { BrevoForm } from '@/components/brevoForm';
import DownloadIcon from '@/components/download.svg';
import { HomeHeroImage } from '@/components/homeHeroImage';
import { PromoSection } from '@/components/promoSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Free Event & Wedding Planning Course Catalog',
  alternates: {
    canonical: '/free-event-and-wedding-planning-course-catalog',
  },
};

const brevoListId = 2;
const brevoEmailTemplateId = 32;

const FreeEventAndWeddingPlanningCatalogPage: PageComponent = ({ searchParams }) => {
  const { countryCode } = getData();
  const date = new Date().getTime();
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const headerList = headers();
  const referrer = headerList.get('referer');

  return (
    <div className={`${styles.freeCatalog}`}>
      <Header logoLink buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} showBanner />
      <section className="text-white">
        <HomeHeroImage />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first">
              <div className={`card bg-light ${styles.card}`}>
                <div className="card-body">
                  <h1 className="h3 mb-3 text-navy">Get a Free Event &amp; Wedding Planning Course Catalog</h1>
                  <div className={styles.formWrapper}>
                    <BrevoForm
                      successLocation={`${process.env.HOST ?? 'https://www.qceventplanning.com'}/thank-you-course-catalog`}
                      listId={brevoListId}
                      emailTemplateId={brevoEmailTemplateId}
                      gclid={gclid}
                      msclkid={msclkid}
                      utmSource={utmSource}
                      utmMedium={utmMedium}
                      utmCampaign={utmCampaign}
                      utmContent={utmContent}
                      utmTerm={utmTerm}
                      placeholders
                      referrer={referrer}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PromoSection date={date} countryCode={countryCode} />
      <IndustrySection />
      <JoinQCSection />
      <TestimonialSection id="TE-0006" />
      <CertificationSection />
      <AboutSection />
      <BottomSection>
        <h2 className="mb-5">Get Started with a Free Course Catalog</h2>
        <Link href="#" className="btn btn-primary btn-lg">Get Your Free Catalog</Link>
      </BottomSection>
    </div>
  );
};

export default FreeEventAndWeddingPlanningCatalogPage;
