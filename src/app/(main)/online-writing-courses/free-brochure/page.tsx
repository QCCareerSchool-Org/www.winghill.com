import { headers } from 'next/headers';
import Image from 'next/image';

import BrochureImage from './free-brochure.png';
import { BrevoForm } from '@/components/brevoForm';
import { getParam } from '@/lib/getParam';
import type { PageComponent } from '@/serverComponent';

const FreeBrochurePage: PageComponent = async props => {

  const brevoListId = 0;
  const brevoEmailTemplateId = 0;

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
    <section>
      <div className="container">
        <h1 className="text-center">Become a Successful Writer</h1>
        <div className="text-center">
          <p>Learn how to become a professional writer online with Winghill Writing School. In the brochure you'll learn about</p>
          <div className="row justify-content-center align-items-start text-center g-5">
            <div className="col-auto">
              <p>Our seven writing courses</p>
              <p>Your personal tutor</p>
            </div>
            <div className="col-auto">
              <p>Flexible payment plans</p>
              <p>And much more!</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-start text-center">
          <div className="col-md-4 col-12 mt-5">
            <h2 className="h3 mb-3">Email Me a Brochure</h2>
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
          <div className="col-md-8 col-12 mt-5 mb-5">
            <Image src={BrochureImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeBrochurePage;
