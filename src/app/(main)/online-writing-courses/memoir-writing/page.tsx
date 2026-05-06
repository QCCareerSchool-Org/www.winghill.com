import Image from 'next/image';

import CourseBanner from './course-banner-memoir-writing.jpg';
import { CourseOutlineSection } from '../_components/courseOutlineSection';
import { CoursePrice } from '../_components/coursePrice';
import { GuaranteeSection } from '../_components/guaranteeSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCodes: CourseCode[] = [ 'fh' ];

const MemoirWritingPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode);
  const price = priceResult.success ? priceResult.value : undefined;

  return(
    <>
      {courseCodes.map(c => <CourseJsonLd key={c} courseCode={c} />)}
      <section>
        <div className="container">
          <h1>Memoir Writing Course</h1>
          {price && <CoursePrice price={price} />}
          <Image src={CourseBanner} alt="" style={{ maxWidth: '100%', height: 'auto', marginBottom: '0.5rem' }} />
          <p>Can you trace your family tree back hundreds of years, with a delightful array of colorful or even infamous characters perched on every branch? Do you want to preserve the lives and loves of your ancestors so their stories can be passed down to future generations and shared with the world? Or perhaps you have your own story to tell and you wish to engage in the therapeutic and liberating task of penning your memoirs? If this is your goal, our memoir and family history course is perfectly suited to you.</p>
          <p className="mb-0">Our easy-to-follow course makes it a pleasure to re-discover your personal history or your family's past. You'll write a treasured legacy for yourself, your children, and future generations of your family. We'll show you how to effectively research and organize information. We'll help you to decide what's important and what can be left out. And, most importantly, you'll learn how to structure an engaging and captivating story that will fascinate both your loved ones and general readers.</p>
        </div>
      </section>
      <TestimonialWallSection className="bg-light" testimonialIds={[ 'TW-0001', 'TW-0002', 'TW-0003' ]} />
      <CourseOutlineSection items={outlineItems} />
      <GuaranteeSection title="Memoir Writing" doubleGuarantee={false} courseCodes={courseCodes} className="bg-light" />
    </>
  );
};

export default MemoirWritingPage;

const outlineItems = [
  'Family History',
  'Beginning the Writing Process',
  'Developing Working Parameters',
  'Locating Essential Information',
  'Working From an Outline',
  'Creating Lively Narrative',
  'Writing From the Heart',
  'Flexing Your Storytelling Muscles',
  'The Responsibility of the Writer',
  'Variety, the Spice of Life',
  'Focusing on the Writer',
  'Editing Like a Pro',
  'Your Book',
  'Reproducing Your Memoir',
  'The Business of Writing',
];
