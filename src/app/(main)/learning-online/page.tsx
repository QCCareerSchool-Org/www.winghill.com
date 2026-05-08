import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import AssignmentIcon from './learning-online-assignments.png';
import CertificatesIcon from './learning-online-certificates.png';
import CustomizeIcon from './learning-online-customize-and-refine.png';
import RefiningYourTechniqueIcon from './learning-online-refining-your-technique.jpg';
import YourCourseBeginsIcon from './learning-online-your-course-begins.png';
import { StepSection } from '@/app/(main)/learning-online/stepSection';
import type { PageComponent } from '@/serverComponent';
const LearningOnlinePage: PageComponent = () => (
  <>
    <section>
      <div className="container mb-4">
        <h1 className="text-center">Learning Online</h1>
        <p>The days of sitting in a classroom are far behind us. With the Internet so very present in everything we do, it's no wonder online learning has exploded in popularity over the past years.</p>
        <p>Winghill Writing School isn't just any run-of-the-mill online school. We've been around since 1984 and our track record speaks for itself. Starting out as a correspondence school, we've expanded and evolved and now offer students all over the world a fully interactive online learning experience. We offer seven distinct online writing courses, taught by three wonderful tutors—all professional writers and authors who guide you every step of the way.</p>
      </div>
    </section>

    {steps.map((d, i) => (
      <StepSection key={d.title} heading={d.title} src={d.icon} className={i % 2 === 0 ? 'bg-light' : undefined}>
        {d.content}
      </StepSection>
    ))}

  </>
);
export default LearningOnlinePage;

interface Step {
  title: string;
  icon: StaticImageData;
  content: ReactNode;
}

const steps: Step[] = [
  {
    title: 'Your Course Begins',
    icon: YourCourseBeginsIcon,
    content:
  <>
    <p>When you enroll in one of our courses, we'll quickly courier your course materials to you. This package includes your first set of lessons and assignments, as well as valuable reference books, software, CDs, and movies on DVDs.</p>
    <p>When you start, your first task is simple: tell us more about yourself. For your first written assignment, you are asked to complete a personal profile. Take this opportunity to give us a detailed portrait of who you are: your background, experiences, goals, what you hope to gain from the course, and any other insights you wish to share.</p>
    <p>Based on this information, we match you with the personal tutor who is best suited to your personality and goals. We send you your tutor's name and a detailed letter outlining his or her career expertise and background. Your tutor serves as your mentor throughout the course, providing you with the individual help and guidance you need to excel.</p>,
  </>,
  },
  {
    title: 'Work Through Your Assignments',
    icon: AssignmentIcon,
    content:
  <>
    <p>In the comfort of your own home and at your own pace, you work through your assignments one unit at a time. You submit your assignments by uploading your work to our user-friendly online student center. Your tutor reviews each piece and sends back expert analysis and marketing advice.</p>
    <p>You consider your tutor's advice and make any necessary changes. Even at this early stage you may be submitting pieces for publication. Lots of students achieve success with their first assignment.</p>
  </>,
  },
  {
    title: 'Customize & Refine your Course',
    icon: CustomizeIcon,
    content: <p>By this time we are beginning to understand you quite well. Your tutor adapts the course to meet your unique needs. Together, you discover your hidden talents and full potential.</p>,
  },
  {
    title: 'Refining Your Technique',
    icon: RefiningYourTechniqueIcon,
    content: <p>Your personal tutor reviews and analyzes each idea, story or article you submit. He or she will help you sharpen both your writing and marketing skills. You build confidence in your abilities as they improve with every unit you complete. By the end of the course, you should have an impressive portfolio of publishable work.</p>,
  },
  {
    title: 'Graduate & Receive Your Certification',
    icon: CertificatesIcon,
    content: <p>Once you've completed all your assignments, we send your certificate to you by courier. You now have the skills and confidence to achieve your writing goals!</p>,
  },

];
