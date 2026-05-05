import Image from 'next/image';
import Link from 'next/link';

import CourseBanner from './course-banner-novel-writing.jpg';
import Guarantee from './guarantee.png';
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
      <section>
        <div className="container">
          <h2 className="h1">Course Outline</h2>
          <p>The following topics are covered through our extensive course package:</p>
          <ol>
            <li>Choosing a Genre</li>
            <li>Plot Ideas</li>
            <li>Developing Your Plot Further</li>
            <li>Building Subplots</li>
            <li>Keeping Your Novel Balanced</li>
            <li>Creating Characters</li>
            <li>Choosing Names</li>
            <li>Writing What You Know</li>
            <li>Sentence Structure</li>
            <li>Outlines and Dialogue</li>
            <li>Capturing Your Reader</li>
            <li>Choosing Your Tense</li>
            <li>Checklist For Success</li>
            <li>Polishing Your Dialogue</li>
            <li>Dissecting Your Characters</li>
            <li>Choosing the Right Words</li>
            <li>Science Fiction and Horror</li>
            <li>Comedy, Mystery, and Romance</li>
            <li>Choosing a Title</li>
            <li>Finding a Publisher</li>
          </ol>
          <Link href="course-outline" className="btn btn-primary">Learn More</Link>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <h2 className="h1 mb-4 text-center">Novel Writing Course Guarantee</h2>
          <div className="row justify-content-center align-items-center g-5">
            <div className="col-3 d-none d-lg-block">
              <Image src={Guarantee} alt="21 Day Money Back Guarantee" className="img-fluid" />
            </div>
            <div className="col-12 col-md-10 col-lg-9">
              <p>You get a full money-back guarantee for all of our writing programs. You can take the time to review the course materials in your home for 21 days. If for any reason you decide the course is not right for you, simply send everything back to the School and we'll issue you a full refund—no questions asked.</p>
              <a className="btn btn-primary" href="https://enroll.winghill.com/?c=nv">ENROLL NOW</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NovelWritingPage;
