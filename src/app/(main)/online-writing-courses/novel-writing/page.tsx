import type { Metadata } from 'next';
import Image from 'next/image';

import Banner from './course-banner-novel-writing.jpg';
import { CourseOutlineSection } from '../_components/courseOutlineSection';
import { CoursePrice } from '../_components/coursePrice';
import { GuaranteeSection } from '../_components/guaranteeSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCode: CourseCode = 'nv';

export const metadata: Metadata = {
  title: getCourseName(courseCode),
  description: getCourseDescription(courseCode),
};

const NovelWritingPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const priceResult = await fetchPrice([ courseCode ], countryCode, provinceCode);
  const price = priceResult.success ? priceResult.value : undefined;

  return (
    <>
      <CourseJsonLd courseCode={courseCode} />
      <section>
        <div className="container">
          <h1 className="h2">Novel Writing Course</h1>
          {price && <CoursePrice price={price} />}
          <Image src={Banner} alt="" priority className="img-fluid mb-4" />
          <p>You might be overwhelmed by the idea of writing an entire novel on your own. We'll let you in on a little secret—it's easier than you think! By writing only a few pages a week, you'll quickly finish your first book. We'll show you how.</p>
          <p>Our course guides break down the process of writing a novel into a few simple steps. The first step involves careful planning and organization. You'll discover that once you've laid out the structure of the book and its characters, writing the novel is actually the easy part! We'll teach you how to create plots, bring in conflict, and craft an effective ending. You'll also learn how to build major and minor characters that are full of life, emotion, and energy. Each lesson of the course is dedicated to helping you harness your creative ideas and mould them into a publishable manuscript.</p>
          <p className="mb-0">If you've ever read a book and thought &ldquo;I could do better than that!&rdquo; or you've always dreamed of writing a novel, our program will guide you towards success.</p>
        </div>
      </section>
      <TestimonialWallSection testimonialIds={[ 'TW-0001', 'TW-0007', 'TW-0008' ]} className="bg-light" />
      <CourseOutlineSection items={outlineItems} />
      <GuaranteeSection title="Novel Writing" doubleGuarantee={false} courseCodes={[ courseCode ]} className="bg-light" />
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
