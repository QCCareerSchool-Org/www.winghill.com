import Image from 'next/image';
import Link from 'next/link';

import CourseBanner from './course-banner-memoir-writing.jpg';
import Guarantee from './guarantee.png';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCodes: CourseCode[] = [ 'rm' ];

const MemoirWritingPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);

  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode);
  const price = priceResult.success ? priceResult.value : undefined;

  return(
    <>
      <section>
        <div className="container">
          <h1>Memoir Writing Course</h1>
          {price && <h2>{price.currency.symbol}{formatPrice(price.plans.full.total)} or {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}/mo</h2>}
          <Image src={CourseBanner} alt="" style={{ maxWidth: '100%', height: 'auto', marginBottom: '0.5rem' }} />
          <p>Can you trace your family tree back hundreds of years, with a delightful array of colorful or even infamous characters perched on every branch? Do you want to preserve the lives and loves of your ancestors so their stories can be passed down to future generations and shared with the world? Or perhaps you have your own story to tell and you wish to engage in the therapeutic and liberating task of penning your memoirs? If this is your goal, our memoir and family history course is perfectly suited to you.</p>
          <p>Our easy-to-follow course makes it a pleasure to re-discover your personal history or your family's past. You'll write a treasured legacy for yourself, your children, and future generations of your family. We'll show you how to effectively research and organize information. We'll help you to decide what's important and what can be left out. And, most importantly, you'll learn how to structure an engaging and captivating story that will fascinate both your loved ones and general readers.</p>
        </div>
      </section>
      <TestimonialWallSection testimonialIds={[]} className="bg-light" />
      <section>
        <div className="container">
          <h2 className="h1">Course Outline</h2>
          <p>The following topics are covered through our extensive course package:</p>
          <ol>
            <li>Family History</li>
            <li>Beginning the Writing Process</li>
            <li>Developing Working Parameters</li>
            <li>Locating Essential Information</li>
            <li>Working From an Outline</li>
            <li>Creating Lively Narrative</li>
            <li>Writing From the Heart</li>
            <li>Flexing Your Storytelling Muscles</li>
            <li>The Responsibility of the Writer</li>
            <li>Variety, the Spice of Life</li>
            <li>Focusing on the Writer</li>
            <li>Editing Like a Pro</li>
            <li>Your Book</li>
            <li>Reproducing Your Memoir</li>
            <li>The Business of Writing</li>
          </ol>
          <Link href="memoir-writing/course-outline" className="btn btn-primary">Learn More</Link>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <h2 className="h1 mb-4 text-center">Memoir Writing Course Guarantee</h2>
          <div className="row justify-content-center align-items-center g-5">
            <div className="col-3 d-none d-lg-block">
              <Image src={Guarantee} alt="21 Day Money Back Guarantee" className="img-fluid" />
            </div>
            <div className="col-12 col-md-10 col-lg-9">
              <p>You get a full money-back guarantee for all of our writing programs. You can take the time to review the course materials in your home for 21 days. If for any reason you decide the course is not right for you, simply send everything back to the School and we'll issue you a full refund—no questions asked.</p>
              <a className="btn btn-primary" href="https://enroll.winghill.com/?c=rm">ENROLL NOW</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemoirWritingPage;
