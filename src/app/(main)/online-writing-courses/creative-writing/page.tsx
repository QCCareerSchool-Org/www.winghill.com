import Image from 'next/image';
import Link from 'next/link';

import Banner from './course-banner-creative-writing.jpg';
import Guarantee from './guarantee.png';
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
          <p>If you have always wanted to use your talent and passion for writing to earn extra income, our Creative Writing course is the ideal choice for you. Our course caters to people just like you who want to become a published writer but don't know how to get started. Your lessons will expose you to a variety of different genres and together with your tutor you'll identify the types of writing you like best. We'll customize your assignments to suit your particular interests and help you succeed as a published writer. </p>
          <p>The creative writing program shows you how to write articles and short stories for a variety of audiences. You''ll even learn how to tackle opportunities for radio, television, and screenplays. Each lesson of the course covers a new and exciting topic. You might discover a previously untapped passion for romance writing, or a rewarding new career as a children’s author. If you’ve never been published before and you're not sure what area of writing you’d like to focus on, the creative writing program is the best choice for you. </p>
        </div>
      </section>

      <TestimonialWallSection className="bg-light" testimonialIds={[ 'TW-0001', 'TW-0002', 'TW-0003' ]} />

      <section>
        <div className="container">
          <h2 className="h1">Course Outline </h2>
          <p>The following topics are covered through our extensive course package: </p>
          <ol>
            <li>Identifying Your Market Niche</li>
            <li>The Short Story</li>
            <li>From Thought to Paper</li>
            <li>Developing Unique Characters</li>
            <li>Writing For Children</li>
            <li>Writing Romance</li>
            <li>Technical Writing</li>
            <li>Specialty Writing</li>
            <li>Writing Humor</li>
            <li>Novels</li>
            <li>Biographies and Poetry</li>
            <li>Writing For Television</li>
            <li>Writing For Radio</li>
            <li>Writing For Theatre</li>
            <li>Writer's First-Aid Kit</li>
          </ol>
          <Link href="/online-writing-courses/creative-writing/course-outline" className="btn btn-primary">Learn More</Link>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <h2 className="h1 mb-4 text-center">Creative Writing Course Guarantee</h2>
          <div className="row justify-content-center align-items-center">
            <div className="col-4 d-none d-lg-block">
              <Image src={Guarantee} alt="21-day money back guarantee" className="img-fluid" />
            </div>
            <div className="col-12 col-md-10 col-lg-8">
              <p>You get a full money-back guarantee for all of our writing programs. You can take the time to review the course materials in your home for 21 days. If for any reason you decide the course is not right for you, simply send everything back to the School and we'll issue you a full refund—no questions asked.</p>
              <h3 className="h5">Double Guarantee</h3>
              <p>The Creative Writing course is also covered by our Double Guarantee. In addition to the no-risk 21-day trial, we guarantee your success. If by the time you've completed the program you have not earned the equivalent of your course fees through your published work, we'll issue you a full refund. It's as simple as that. Our course is designed for your success and we back up that promise to you with an iron-clad guarantee that's been in place for over twenty years.</p>
              <a href="https://enroll.winghill.com?c=ws" className="btn btn-primary">Enroll Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};

export default CreativeWritingPage;
