import { headers } from 'next/headers';
import Image from 'next/image';

import BrochureImage from './free-brochure.png';
import { Header } from '../header';
import { BrevoForm } from '@/components/brevoForm';
import { getParam } from '@/lib/getParam';
import type { PageComponent } from '@/serverComponent';

const brevoListId = 0;
const brevoEmailTemplateId = 0;

const FreeBrochurePage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);

  const headerList = await headers();
  const referrer = headerList.get('referer');

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-xl-10">
              <h1 className="h2 mb-3">Become a Successful Writer</h1>
              <p>Learn how to become a professional writer online with Winghill Writing School. In the brochure you'll learn about</p>
              <ul>
                <li>Our seven writing courses</li>
                <li>Your personal tutor</li>
                <li>Flexible payment plans</li>
                <li>And much more!</li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center g-5 align-items-center">
            <div className="col-12 col-md-9 col-lg-6 col-xl-5">
              <div className="card bg-light shadow">
                <div className="card-body">
                  <h2 className="h4 mb-3">Email Me a Brochure</h2>
                  <BrevoForm
                    successLocation={`${process.env.NEXT_PUBLIC_HOST ?? 'https://www.winghill.com'}/thank-you`}
                    listId={brevoListId}
                    emailTemplateId={brevoEmailTemplateId}
                    gclid={gclid}
                    msclkid={msclkid}
                    utmSource={utmSource}
                    utmMedium={utmMedium}
                    utmCampaign={utmCampaign}
                    utmContent={utmContent}
                    utmTerm={utmTerm}
                    referrer={referrer}
                    placeholders
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9 col-lg-6 col-xl-5">
              <Image src={BrochureImage} alt="" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeBrochurePage;
