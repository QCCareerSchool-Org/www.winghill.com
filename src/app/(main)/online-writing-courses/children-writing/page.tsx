import Image from 'next/image';
import Link from 'next/link';

import CourseBanner from './course-banner-writing-for-children.jpg';
import Guarantee from './guarantee.png';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCodes: CourseCode[] = [ 'ch' ];

const ChildrenWritingPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);

  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode);
  const price = priceResult.success ? priceResult.value : undefined;

  return(
    <>
      <section>
        <div className="container">
          <h1>children Writing Course</h1>
          {price && <h2>{price.currency.symbol}{formatPrice(price.plans.full.total)} or {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}/mo</h2>}
          <Image src={CourseBanner} alt="" style={{ maxWidth: '100%', height: 'auto', marginBottom: '0.5rem' }} />
          <p>If you enjoy tales of magic and adventure, heart-warming coming-of-age stories, and funny sagas about life as a child or teenager, this is the course for you. Children's writing is a rewarding—and highly lucrative—market. Authors who can create stories that capture the interest and imagination of children and teens are in high demand.</p>
          <p>Our Writing For Children course shows you how to develop and write stories that resonate with this sometimes fickle audience. You'll learn how to engage your reader and create plots, characters, and situations that ring true. You'll explore many different types of children's writing to discover the niche that suits you best. Perhaps you're destined to write the next hit series of fantasy books that both children and adults adore? Or maybe you'd prefer to write short, illustrated books that entertain children while also teaching them how to read? No matter how you'd like to pursue your passion for children's writing, we'll give you the skills you need to succeed.</p>
          <p>You probably still remember the books you read as a child that captivated your attention and stole your heart. If you want to give future generations the same cherished memories, our writing for children program is the best choice for you.</p>
        </div>
      </section>
      <TestimonialWallSection testimonialIds={[]} className="bg-light" />
      <section>
        <div className="container">
          <h2 className="h1">Course Outline</h2>
          <p>The following topics are covered through our extensive course package:</p>
          <ol>
            <li>Marketing Your Ideas</li>
            <li>Creating Memorable Characters</li>
            <li>Plot Development</li>
            <li>Making Speech Ring True</li>
            <li>Making Your Reader Laugh</li>
            <li>Educational Writing</li>
            <li>Working with Words and Pictures</li>
            <li>Tales of Horror</li>
            <li>Suspense and Mystery</li>
            <li>Children's Radio and Television</li>
            <li>Selling Your Work</li>
            <li>Handling Ethical Issues</li>
            <li>Interacting with Publishers</li>
            <li>The Editing Process</li>
            <li>Children's Writer's First-Aid Kit</li>
          </ol>
          <Link href="writing-for-children/course-outline" className="btn btn-primary">Learn More</Link>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <h2 className="h1 mb-4 text-center">Children Writing Course Guarantee</h2>
          <div className="row justify-content-center align-items-center g-5">
            <div className="col-3 d-none d-lg-block">
              <Image src={Guarantee} alt="21 Day Money Back Guarantee" className="img-fluid" />
            </div>
            <div className="col-12 col-md-10 col-lg-9">
              <p>You get a full money-back guarantee for all of our writing programs. You can take the time to review the course materials in your home for 21 days. If for any reason you decide the course is not right for you, simply send everything back to the School and we'll issue you a full refund—no questions asked.</p>
              <h3 className="h5">Double Guarantee</h3>
              <p>The Writing For Children course is also covered by our Double Guarantee. In addition to the no-risk 21-day trial, we guarantee your success. If by the time you've completed the program you have not earned the equivalent of your course fees through your published work, we'll issue you a full refund. It's as simple as that. Our course is designed for your success and we back up that promise to you with an iron-clad guarantee that's been in place for over twenty years.</p>
              <a className="btn btn-primary" href="https://enroll.winghill.com/?c=ch">ENROLL NOW</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChildrenWritingPage;
