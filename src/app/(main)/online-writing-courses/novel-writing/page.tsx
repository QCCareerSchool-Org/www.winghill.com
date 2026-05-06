import Image from 'next/image';

import CourseBanner from './course-banner-novel-writing.jpg';
import { CourseOutlineSection } from '../_components/courseOutlineSection';
import { GuaranteeSection } from '../_components/guaranteeSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCodes: CourseCode[] = [ 'nv' ];

const NovelWritingPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode);
  const price = priceResult.success ? priceResult.value : undefined;

  return(
    <>
      {courseCodes.map(c => <CourseJsonLd key={c} courseCode={c} />)}
      <section>
        <div className="container">
          <h1>Novel Writing Course</h1>
          {price && <h2>{price.currency.symbol}{formatPrice(price.plans.full.total)} or {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}/mo</h2>}
          <Image src={CourseBanner} alt="" style={{ maxWidth: '100%', height: 'auto', marginBottom: '0.5rem' }} />
          <p>You might be overwhelmed by the idea of writing an entire novel on your own. We'll let you in on a little secret—it's easier than you think! By writing only a few pages a week, you'll quickly finish your first book. We'll show you how.</p>
          <p>Our course guides break down the process of writing a novel into a few simple steps. The first step involves careful planning and organization. You'll discover that once you've laid out the structure of the book and its characters, writing the novel is actually the easy part! We'll teach you how to create plots, bring in conflict, and craft an effective ending. You'll also learn how to build major and minor characters that are full of life, emotion, and energy. Each lesson of the course is dedicated to helping you harness your creative ideas and mould them into a publishable manuscript.</p>
          <p>If you've ever read a book and thought &ldquo;I could do better than that!&rdquo; or you've always dreamed of writing a novel, our program will guide you towards success.</p>
        </div>
      </section>
      <TestimonialWallSection testimonialIds={[]} className="bg-light" />
      <CourseOutlineSection items={outlineItems} />
      <GuaranteeSection title="Memoir Writing" doubleGuarantee={false} courseCodes={courseCodes} className="bg-light" />
    </>
  );
};

export default NovelWritingPage;

const outlineItems = [
  'Choosing a Genre',
  'Plot Ideas',
  'Developing Your Plot Further',
  'Building Subplots',
  'Keeping Your Novel Balanced',
  'Creating Characters',
  'Choosing Names',
  'Writing What You Know',
  'Sentence Structure',
  'Outlines and Dialogue',
  'Capturing Your Reader',
  'Choosing Your Tense',
  'Checklist For Success',
  'Polishing Your Dialogue',
  'Dissecting Your Characters',
  'Choosing the Right Words',
  'Science Fiction and Horror',
  'Comedy, Mystery, and Romance',
  'Choosing a Title',
  'Finding a Publisher',
];
