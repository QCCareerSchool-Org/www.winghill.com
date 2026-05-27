import type { Metadata } from 'next';
import Link from 'next/link';

import { AccordionFAQ } from '@/components/accordionFAQ';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: "Explore FAQs and discover how QC Design School's accredited online design courses equip you with the skills to become a certified design professional!",
  alternates: { canonical: '/faq' },
};

const FAQPage: PageComponent = () => (
  <div itemScope itemType="https://schema.org/FAQPage">
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 d-flex flex-column gap-3">
            <h1 className="mb-4 text-center">Frequently Asked Questions</h1>
            <AccordionFAQ heading="Does the course fee cover all the costs?">
              <p className="mb-0">Yes. The course fee covers everything you need. It includes your texts, reference books, software, DVDs, as well as the instruction, feedback, and advice of your personal tutor.</p>
            </AccordionFAQ>
            <AccordionFAQ heading="How long is the course?">
              <p className="mb-0">Each of our writing courses is completed entirely at the individual student's own pace. As a self-study program, there are no deadlines or harsh time constraints to follow. You can work through your assignments as quickly or as slowly as you like. An average time of course completion is anywhere between six to twelve months. If you need more time, there's no need to worry—you're enrolled in the course for two full years.</p>
            </AccordionFAQ>
            <AccordionFAQ heading="What if I want to take more than one course?">
              <p className="mb-0">If you want to expand your skills after you've graduated, you are eligible to enroll for one of our other courses at a reduced price.</p>
            </AccordionFAQ>
            <AccordionFAQ heading="What if I decide the course is not right for me?">
              <p className="mb-0">Once you receive your course materials, you have 21 days to decide if you want to continue. If you are not satisfied, simply return the shipment in mint condition, and you'll receive a full refund. Please note that the Movie Magic Screenwriter software program (value $170 US) can not be refunded. <Link href="/about/#guarantee">Read more about our double guarantee.</Link></p>
            </AccordionFAQ>
            <AccordionFAQ heading="Is the school a member of the Better Business Bureau?">
              <p className="mb-0">Yes. As a member of the BBB's stringent Online Reliability Program, Winghill Writing School is authorized to display the BBB seal. In business since 1984, we have a superb track record.</p>
            </AccordionFAQ>
            <AccordionFAQ heading="What if I'm not able to publish my work?">
              <p className="mb-0">If you decide to take the creative writing, romance writing, or writing for children courses, you are backed by our double guarantee. If, by the time you have completed the assignments for one of these courses, you have not been able to sell enough of your writing to cover the course fees, we will refund all the money you paid.</p>
            </AccordionFAQ>
            <AccordionFAQ heading="Will my ideas be treated in confidence?">
              <p className="mb-0">Our school has been training writers for over 20 years. You can rest assured we handle your work with the high standards of confidentiality we have maintained over that time.</p>
            </AccordionFAQ>
            <AccordionFAQ heading="When I publish work, will I have to pay royalties to the school?">
              <p className="mb-0">Absolutely not—it's your work and your money. All we ask is that you let us know about your success. We want to feel proud of your achievements with you!</p>
            </AccordionFAQ>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default FAQPage;
