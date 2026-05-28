import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import bcIcon from './_images/courses-business-communications.png';
import wsIcon from './_images/courses-creative-writing.png';
import fhIcon from './_images/courses-memoir-writing.png';
import nvIcon from './_images/courses-novel-writing.png';
import rmIcon from './_images/courses-romance-writing.png';
import scIcon from './_images/courses-screenwriting.png';
import chIcon from './_images/courses-writing-for-children.png';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseName, getCourseUrl } from '@/domain/courseCode';
import type { PageComponent } from '@/serverComponent';

const CourseOverviewPage: PageComponent = () => (
  <>
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h1 className="mb-3">Online Writing Courses</h1>
            <p className="mb-0">Do you want to stand out and get noticed by publishers and readers alike? Do you have a passion for a single writing style or would you like to diversify your knowledge and learn about multiple genres? At Winghill, we offer seven distinct writing courses to help you reach your goals. With guidance from your personal tutor, you'll work on customized assignments that will help you tune your craft and allow you to reach your goal of becoming a published professional writer!</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center g-5">
          {courses.map(c => (
            <div key={c.code} className="col-sm-10 col-md-6 col-lg-4 mb-5 text-center d-flex flex-column">
              <Link href={getCourseUrl(c.code)}>
                <Image src={c.icon} alt="" className="img-fluid mb-4" style={{ width: 200 }} />
              </Link>
              <h2 className="h4 mb-3">{getCourseName(c.code)}</h2>
              {c.description}
              <Link href={getCourseUrl(c.code)} className="btn btn-primary btn-lg mt-auto align-self-center">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default CourseOverviewPage;

interface CourseData {
  code: CourseCode;
  description: ReactNode;
  icon: StaticImageData;
}

const courses: CourseData[] = [
  {
    code: 'ws',
    description: <p>Our most popular and comprehensive course. Try out a myriad of writing styles, from novel writing to romance. If you're not quite sure which genre you'd like to pursue, this is the ideal course for you.</p>,
    icon: wsIcon,
  },
  {
    code: 'nv',
    description: <p>Do you have a story to tell but are having difficulty organizing your ideas? Your tutor will help you craft your plot and expand your characters.</p>,
    icon: nvIcon,
  },
  {
    code: 'rm',
    description: <p>Dive into this wonderfully lucrative and creative style of writing. Learn how to structure a story that is sure to get noticed by publishers.</p>,
    icon: rmIcon,
  },
  {
    code: 'ch',
    description: <p>Whether you want to write a children's novel that also appeals to adults, or want to write/illustrate story books, we'll help you get there!</p>,
    icon: chIcon,
  },
  {
    code: 'bc',
    description: <p>Learn how to write clearly and concisely, from email to presentations, we will help you succeed in the workplace.</p>,
    icon: bcIcon,
  },
  {
    code: 'fh',
    description: <p>Do you want to share your own story or that of your ancestors? Work with your tutor to write a treasured legacy for future generations.</p>,
    icon: fhIcon,
  },
  {
    code: 'sc',
    description: <p>Learn how to turn your story into a big screen masterpiece. Develop believable characters and write dialogue that rings true.</p>,
    icon: scIcon,
  },
];
