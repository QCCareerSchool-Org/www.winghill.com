import Image from 'next/image';

import Banner from './course-banner-business-communications.jpg';
import { CourseOutlineSection } from '../_components/courseOutlineSection';
import { CoursePrice } from '../_components/coursePrice';
import { GuaranteeSection } from '../_components/guaranteeSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCodes: CourseCode[] = [ 'bc' ];

const BusinessCommunicationsPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode);
  const price = priceResult.success ? priceResult.value : undefined;

  return (
    <>
      {courseCodes.map(c => <CourseJsonLd key={c} courseCode={c} />)}
      <section>
        <div className="container">
          <h1>Business Communications Course</h1>
          {price && <CoursePrice price={price} />}
          <Image src={Banner} alt="" />
          <p>If you are running your own business or working in a business environment, you know that effective communication is a vital skill. When interacting with colleagues, clients, and business partners, it's crucial that you be able to communicate your position clearly and concisely. When thousands or even millions of dollars are at stake, or something even more priceless—your reputation, effective communication can mean the difference between success and failure.</p>
          <p className="mb-0">In this course you'll learn how to create and structure all types of written business communications, from memos and letters to reports and marketing text. You'll learn how to give your readers the information they need to understand and accept your point of view. To round out your educational experience, our instructional movies on DVD give you tips and valuable advice from business professionals on everything from business presentations to dressing for success. If you're motivated and you want to enhance your professional image and skills, our Business Communications course is the best choice for you.</p>
        </div>
      </section>
      <TestimonialWallSection className="bg-light" testimonialIds={[ 'TW-0001', 'TW-0002', 'TW-0003' ]} />
      <CourseOutlineSection items={outlineItems} noButton={true} />
      <GuaranteeSection title="Business Communications Course" doubleGuarantee={false} courseCodes={courseCodes} className="bg-light" />
    </>
  );
};

export default BusinessCommunicationsPage;

const outlineItems = [
  'Writing Effectively',
  'Language Structure',
  'Revision',
  'The Memo',
  'The Business Letter',
  'The Report',
  'The Newsletter',
  'Presentations',
  'Meetings',
  'Advertising Copy',
  'Proposals',
  'Technical Writing',
  'Effective Communication',
  'Essential Elements',
  'Forms and Templates',
];
