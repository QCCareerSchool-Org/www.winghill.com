import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { CoreValuesSection } from './_components/coreValuesSection';
import BBB from './bbb.png';
import Guarantee from './money-back-guarantee.png';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'About',
  alternates: { canonical: '/about' },
};

const AboutPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h1 className="text-center mb-3">About Winghill</h1>
            <p>Winghill Writing School is a faculty of <Link href="https://www.qccareerschool.com/">QC Career School</Link>. Since 1984, QC Career School has been committed to offering the highest quality distance education experience available. Our writing courses are as old as our school, and we've enjoyed watching over two decades of writing students grow and succeed. We've expanded to offer courses in many creative pursuits such as event and wedding planning, interior decorating, makeup artistry, and fashion styling.</p>
            <p>Winghill Writing School offers a completely integrated learning experience, and the best part is that by learning online you'll be able to pursue your dreams from anywhere, anytime. With Winghill, you'll develop your craft step by step through careful research, planning, writing, and editing. Your <Link href="/your-tutors">tutor</Link> is a published author, and will offer their expert advice to help you reach your writing goals.</p>
            <p>Just as we believe in offering high quality course materials, we're also committed to offering our students the student support experience they need and deserve. That's why you'll not only submit your assignments to a professional writer, but you'll also have unlimited access to our team of highly trained student support specialists by phone, email, live chat, and social media. You'll study from home but you'll never be alone. We're here, and available, to help you whenever you need it.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light" id="bbb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <h2 className="h1 text-center mb-3">BBB Accreditation</h2>
            <div className="d-flex flex-column flex-md-row gap-4 align-items-center">
              <div className="flex-shrink-0">
                <Image src={BBB} alt="BBB Start With Trust badge" className="img-fluid" />
              </div>
              <p className="mb-0">We know that some people might think twice before enrolling in a distance education course. However, you don't need to worry with QC Career School. We have the highest rating of consumer satisfaction possible with the <Link href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175#sealclick">Better Business Bureau (A+)</Link>. In addition, thousands of satisfied students have taken our courses. Many of them are now the proud owners of their own successful business. We sincerely hope that you'll be our next student to follow in their footsteps!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CoreValuesSection />
    <section className="bg-light" id="guarantee">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-12 col-lg-3 text-center">
            <Image src={Guarantee} alt="money back 100% guarantee" className="img-fluid" style={{ width: 200 }} />
          </div>
          <div className="col-12 col-lg-9">
            <h2 className="h1 text-center text-lg-start mb-3">Our Guarantee</h2>
            <p>We have absolute faith in our courses. As a result, we offer our students a full money-back guarantee. From the moment you receive your first package, you have 14 days to go over your course materials and assignments. If for any reason you decide that a career in writing is not for you, all you need to do is return your course materials in their original condition for an immediate refund. All we ask of you is to call the School to receive instructions on how to ship the package to us.</p>
            <p>Please note that the Movie Magic Screenwriter software program (value $170 US) can not be refunded.</p>
            <h3>Double Guarantee</h3>
            <p>If you enroll in our <Link href="/online-writing-courses/creative-writing">Creative Writing</Link>, <Link href="/online-writing-courses/romance-writing">Romance Writing</Link>, or <Link href="/online-writing-courses/writing-for-children">Writing For Children</Link> courses, you also qualify for our Double Guarantee policy.</p>
            <p>How does this work? It's simple. If, during your course, you do not earn the equivalent of your course fees from your writing, we will refund your course fees. There are only two conditions to this guarantee:</p>
            <ol>
              <li>You must have been actively seeking publication opportunities during your course; and</li>
              <li>You must have completed all assignments and graduated from the course within the allotted three-year timeframe.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
