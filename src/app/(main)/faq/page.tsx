import type { Metadata } from 'next';
import Link from 'next/link';

import styles from './page.module.scss';
import { QuestionAndAnswer } from './questionAndAnswer';
import { GetStartedSection } from '@/components/getStartedSection';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: "Explore FAQs and discover how QC Design School's accredited online design courses equip you with the skills to become a certified design professional!",
  alternates: { canonical: '/faq' },
};

const FAQPage: PageComponent = async () => {
  const { countryCode } = await getServerData();

  return (
    <div itemScope itemType="https://schema.org/FAQPage">
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <h1 className="mb-2 text-center">Frequently Asked Questions</h1>
              <div className={styles.faqGroup} id="beforeEnroll">
                <QuestionAndAnswer heading="Does the course fee cover all the costs?">
                  <p>Yes. The course fee covers everything you need. It includes your texts, reference books, software, DVDs, as well as the instruction, feedback, and advice of your personal tutor.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="How long is the course?">
                  <p>Each of our writing courses is completed entirely at the individual student’s own pace. As a self-study program, there are no deadlines or harsh time constraints to follow. You can work through your assignments as quickly or as slowly as you like. An average time of course completion is anywhere between six to twelve months. If you need more time, there’s no need to worry—you’re enrolled in the course for two full years.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="What if I want to take more than one course?">
                  <p>If you want to expand your skills after you’ve graduated, you are eligible to enroll for one of our other courses at a reduced price.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="What if I decide the course is not right for me?">
                  <p>Once you receive your course materials, you have 21 days to decide if you want to continue. If you are not satisfied, simply return the shipment in mint condition, and you’ll receive a full refund. Please note that the Movie Magic Screenwriter software program (value $170 US) can not be refunded. Read more about our double guarantee.</p>
                </QuestionAndAnswer>
                {countryCode === 'CA' && (
                  <QuestionAndAnswer heading="Can I claim my course tuition on my taxes?">
                    <p>Yes, and you could qualify to have over 50% of your course fees covered! QC is a Certified Education Institution with Employment and Social Development Canada. <Link href="/canadian-tax-credits">Learn more about the Canadian tax credits here.</Link></p>
                  </QuestionAndAnswer>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection
        title="Have Another Question?"
        text="Feel free to contact the school anytime to learn more about payment plans, career options for home designers, and studying online!"
        buttonText="Contact Us"
        buttonHref="/contact-us"
      />
    </div>
  );
};

export default FAQPage;
