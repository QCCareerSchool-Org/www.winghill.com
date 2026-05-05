import Image from 'next/image';

import Banner from './course-banner-romance-writing.jpg';
import { CourseOutlineSection } from '../_components/courseOutlineSection';
import { GuaranteeSection } from '../_components/guaranteeSection';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCodes: CourseCode[] = [ 'rm' ];

const RomanceWritingPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode);
  const price = priceResult.success ? priceResult.value : undefined;
  return (

    <>
      <section>
        <div className="container">
          <h1>Romance Writing Course</h1>
          {price && <h2>{price.currency.symbol}{formatPrice(price.plans.full.total)} or {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}/mo</h2>}
          <Image src={Banner} alt="" />
          <p>If you have always wanted to use your talent and passion for writing to earn extra income, our Creative Writing course is the ideal choice for you. Our course caters to people just like you who want to become a published writer but don't know how to get started. Your lessons will expose you to a variety of different genres and together with your tutor you'll identify the types of writing you like best. We'll customize your assignments to suit your particular interests and help you succeed as a published writer. </p>
          <p>The creative writing program shows you how to write articles and short stories for a variety of audiences. You''ll even learn how to tackle opportunities for radio, television, and screenplays. Each lesson of the course covers a new and exciting topic. You might discover a previously untapped passion for romance writing, or a rewarding new career as a children's author. If you've never been published before and you're not sure what area of writing you'd like to focus on, the creative writing program is the best choice for you. </p>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <h2 className="h1">Student Testimonial</h2>
          <p>&quot;In a short time you have helped me enhance my writing skills and develop the confidence to market my work. Thanks to the School, I no longer feel isolated in my writing goals. With my tutor's direction and encouragement I now believe I am capable of becoming a successful, well-paid writer. The course material and personal interest have surpassed my wildest expectations. It was worth every cent and so much more. Thank you.&quot;</p>
          <p className="text-end">Coralie Darsey-Malloy</p>
          <p className="text-end">Romance Writing</p>
        </div>
      </section>

      <CourseOutlineSection items={courseOutlineArr} className="" />
      <GuaranteeSection title="Romance Writing" doubleGuarantee={true} courseCodes={courseCodes} className="bg-light" />

    </>
  );

};
const courseOutlineArr = [ 'Choosing the Right Words', 'Character Development', 'Getting Inspired', 'Marketing Your Ideas', 'Creating a Plot Outline', 'Developing Your Plot', 'Using the Right Tools', 'Grabbing Attention', 'Writing Your First Chapter', 'Maintaining Tension', 'The Editing Process', 'Choosing Names and Titles', 'Dealing with Copyright', 'Sensual Words', 'Revealing Thoughts on Paper', 'The Process of Rewriting', 'The Role of Research', 'Selling Your Outline', 'Working with Editors', 'Presenting Your Manuscript' ];
export default RomanceWritingPage;
