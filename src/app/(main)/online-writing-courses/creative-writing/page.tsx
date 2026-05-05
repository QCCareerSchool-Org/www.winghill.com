import Image from 'next/image';

import Banner from './course-banner-creative-writing.jpg';
import { CourseOutlineSection } from '../_components/courseOutlineSection';
import GuaranteeSection from '../_components/guaranteeSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCodes: CourseCode[] = [ 'ws' ];

const CreativeWritingPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode);
  const price = priceResult.success ? priceResult.value : undefined;

  return (
    <>
      <section>
        <div className="container">
          <h1>Creative Writing</h1>
          {price && <h2>{price.currency.symbol}{formatPrice(price.plans.full.total)} or {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}/mo</h2>}
          <Image src={Banner} alt="" />
          <p>If you have always wanted to use your talent and passion for writing to earn extra income, our Creative Writing course is the ideal choice for you. Our course caters to people just like you who want to become a published writer but don't know how to get started. Your lessons will expose you to a variety of different genres and together with your tutor you'll identify the types of writing you like best. We'll customize your assignments to suit your particular interests and help you succeed as a published writer.</p>
          <p>The creative writing program shows you how to write articles and short stories for a variety of audiences. You''ll even learn how to tackle opportunities for radio, television, and screenplays. Each lesson of the course covers a new and exciting topic. You might discover a previously untapped passion for romance writing, or a rewarding new career as a children's author. If you've never been published before and you're not sure what area of writing you'd like to focus on, the creative writing program is the best choice for you.</p>
        </div>
      </section>
      <TestimonialWallSection className="bg-light" testimonialIds={[ 'TW-0001', 'TW-0002', 'TW-0003' ]} />
      <CourseOutlineSection items={outlineItems} />
      <GuaranteeSection title="Creative Writing" doubleGuarantee={true} courseCodes={courseCodes} additionalText={false} className="bg-light" />
    </>
  );
};

export default CreativeWritingPage;

const outlineItems = [
  'Identifying Your Market Niche',
  'From Thought to Paper',
  'The Short Story',
  'Developing Unique Characters',
  'Writing For Children',
  'Writing Romance',
  'Technical Writing',
  'Specialty Writing',
  'Writing Humor',
  'Novels',
  'Biographies and Poetry',
  'Writing For Television',
  'Writing For Radio',
  'Writing For Theatre',
  'Writer\'s First Aid Kit',
];
