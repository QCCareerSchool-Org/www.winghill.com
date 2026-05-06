import Image from 'next/image';

import BBB from './bbb.png';
import InnovationIcon from './core-values-icon-innovation.png';
import PersonalRelationshipsIcon from './core-values-icon-personal.png';
import QualityIcon from './core-values-icon-quality.png';
import ServiceIcon from './core-values-icon-service.png';
import SupportIcon from './core-values-icon-support.png';
import Guarantee from './money-back-guarantee.png';
import type { PageComponent } from '@/serverComponent';

const AboutPage: PageComponent = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="text-center">About Winghill</h1>
          <p>Winghill Writing School is a faculty of <a href="https://www.qccareerschool.com/">QC Career School</a>. Since 1984, QC Career School has been committed to offering the highest quality distance education experience available. Our writing courses are as old as our school, and we’ve enjoyed watching over two decades of writing students grow and succeed. We’ve expanded to offer courses in many creative pursuits such as event and wedding planning, interior decorating, makeup artistry, and fashion styling.</p>
          <p>Winghill Writing School offers a completely integrated learning experience, and the best part is that by learning online you’ll be able to pursue your dreams from anywhere, anytime. With Winghill, you’ll develop your craft step by step through careful research, planning, writing, and editing. Your <a href="/your-tutors">tutor</a> is a published author, and will offer their expert advice to help you reach your writing goals.</p>
          <p>Just as we believe in offering high quality course materials, we’re also committed to offering our students the student support experience they need and deserve. That’s why you’ll not only submit your assignments to a professional writer, but you’ll also have unlimited access to our team of highly trained student support specialists by phone, email, live chat, and social media. You’ll study from home but you’ll never be alone. We’re here, and available, to help you whenever you need it.</p>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <h2 className="h1 text-center">BBB Accreditation</h2>
          <div className="row justify-content-center align-items-center">
            <div className="col-5 text-start">
              <p>We know that some people might think twice before enrolling in a distance education course. However, you don’t need to worry with QC Career School. We have the highest rating of consumer satisfaction possible with the <a href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175#sealclick">Better Business Bureau (A+)</a>. In addition, thousands of satisfied students have taken our courses. Many of them are now the proud owners of their own successful business. We sincerely hope that you’ll be our next student to follow in their footsteps!</p>
            </div>
            <div className="col-2">
              <Image src={BBB} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <h2 className="h1 text-center">Our Core Values</h2>
          <p>Our mission is to provide you with a rich and personalized learning experience, all from the comfort of your home.</p>
          <div className="row justify-content-center align-items-start">
            <div className="col">
              <Image src={QualityIcon} alt="" className="img-fluid" />
              <h5>Quality</h5>
              <p>We aim to offer our students superior quality distance education courses, and the best student support possible.</p>
            </div>
            <div className="col">
              <Image src={InnovationIcon} alt="" className="img-fluid" />
              <h5>Innovation</h5>
              <p>Our team, including highly knowledgeable industry professionals, will provide you with up-to-date information on the ever-changing industry. We are constantly working to improve your learning experience.</p>
            </div>
            <div className="col">
              <Image src={SupportIcon} alt="" className="img-fluid" />
              <h5>Support</h5>
              <p>Our excellent team of student support specialists offers our students unrivalled support and advice.</p>
            </div>
          </div>
          <div className="row justify-content-center align-items-start">
            <div className="col">
              <Image src={PersonalRelationshipsIcon} alt="" className="img-fluid" />
              <h5>Personal Relationships</h5>
              <p>Our goal is to connect on a personal level with each and every one of our students, and to remain connected even after you’ve graduated.</p>
            </div>
            <div className="col">
              <Image src={ServiceIcon} alt="" className="img-fluid" />
              <h5>Service Excellence</h5>
              <p>From the moment you first contact us, to the moment you graduate, we want your experience with QC to be first-class and unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <h2 className="h1 text-center">Our Guarantee</h2>
          <div className="row justify-content-center align-items-center">
            <div className="col-4">
              <Image src={Guarantee} alt="" className="img-fluid" />
            </div>
            <div className="col-8">
              <p>We have absolute faith in our courses. As a result, we offer our students a full money-back guarantee. From the moment you receive your first package, you have 21 days to go over your course materials and assignments. If for any reason you decide that a career in writing is not for you, all you need to do is return your course materials in their original condition for an immediate refund. All we ask of you is to call the School to receive instructions on how to ship the package to us.</p>
              <p>Please note that the Movie Magic Screenwriter software program (value $170 US) can not be refunded.</p>
              <h5>Double Guarantee</h5>
              <p>If you enroll in our <a href="/online-writing-courses/creative-writing">Creative Writing</a>, <a href="/online-writing-courses/romance-writing">Romance Writing</a>, or <a href="/online-writing-courses/writing-for-children">Writing For Children</a> courses, you also qualify for our Double Guarantee policy.</p>
              <p>How does this work? It’s simple. If, during your course, you do not earn the equivalent of your course fees from your writing, we will refund your course fees. There are only two conditions to this guarantee:</p>
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
};

export default AboutPage;
