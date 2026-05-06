import Image from 'next/image';

import Banner from './course-banner-romance-writing.jpg';
import { CourseOutlineSection } from '../_components/courseOutlineSection';
import { GuaranteeSection } from '../_components/guaranteeSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
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
      {courseCodes.map(c => <CourseJsonLd key={c} courseCode={c} />)}
      <section>
        <div className="container">
          <h1>Romance Writing Course</h1>
          {price && <h2>{price.currency.symbol}{formatPrice(price.plans.full.total)} or {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}/mo</h2>}
          <Image src={Banner} alt="" />
          <p>Do you enjoy being swept away in tales of love and romance? Does your heart skip a beat when two star-crossed lovers overcome all obstacles and seal their union with a passionate embrace? If you want to use your talents to write heart-stopping accounts of love found, lost, and won, this is the course for you.</p>
          <p>With elements of love, conflict, and a touch of adventure, romance writing is always exciting. Our course shows you how to take your creative ideas and mould them into the fairly strict formats most publishers want to see. Editors are constantly clamoring for new, quality material so there is a huge market of opportunity for someone who has a talent for writing romance—someone just like you.</p>
          <p className="mb-0">Our Romance Writing course shows you, step by step, how to take an idea and turn it into a publishable manuscript. You'll learn how to create dynamic characters, how to build dramatic tension, and how to use sensual words and phrases to draw readers into your story. Once you understand how to write romance that sells, you'll have a satisfying and lucrative career ahead of you.</p>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <h2 className="h1">Student Testimonial</h2>
          <p><i>&quot;In a short time you have helped me enhance my writing skills and develop the confidence to market my work. Thanks to the School, I no longer feel isolated in my writing goals. With my tutor's direction and encouragement I now believe I am capable of becoming a successful, well-paid writer. The course material and personal interest have surpassed my wildest expectations. It was worth every cent and so much more. Thank you.&quot;</i></p>
          <p className="text-end">Coralie Darsey-Malloy</p>
          <p className="text-end">Romance Writing</p>
        </div>
      </section>
      <CourseOutlineSection items={outlineItems} className="" />
      <GuaranteeSection title="Romance Writing" doubleGuarantee={true} courseCodes={courseCodes} className="bg-light" />
    </>
  );
};

export default RomanceWritingPage;

const outlineItems = [
  'Choosing the Right Words',
  'Character Development',
  'Getting Inspired',
  'Marketing Your Ideas',
  'Creating a Plot Outline',
  'Developing Your Plot',
  'Using the Right Tools',
  'Grabbing Attention',
  'Writing Your First Chapter',
  'Maintaining Tension',
  'The Editing Process',
  'Choosing Names and Titles',
  'Dealing with Copyright',
  'Sensual Words',
  'Revealing Thoughts on Paper',
  'The Process of Rewriting',
  'The Role of Research',
  'Selling Your Outline',
  'Working with Editors',
  'Presenting Your Manuscript',
];
