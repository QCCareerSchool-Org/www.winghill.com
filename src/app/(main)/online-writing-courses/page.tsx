import Image from 'next/image';

import bcIcon from './courses-business-communications.png';
import wsIcon from './courses-creative-writing.png';
import fhIcon from './courses-memoir-writing.png';
import nvIcon from './courses-novel-writing.png';
import rmIcon from './courses-romance-writing.png';
import scIcon from './courses-screenwriting.png';
import chIcon from './courses-writing-for-children.png';
import type { PageComponent } from '@/serverComponent';

const CourseOverviewPage: PageComponent = () => {
  return(
    <>
      <section>
        <div className="container">
          <h1 className="text-center">Online Writing Courses</h1>
          <p>Do you want to stand out and get noticed by publishers and readers alike? Do you have a passion for a single writing style or would you like to diversify your knowledge and learn about multiple genres? At Winghill, we offer seven distinct writing courses to help you reach your goals. With guidance from your personal tutor, you’ll work on customized assignments that will help you tune your craft and allow you to reach your goal of becoming a published professional writer!</p>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center g-5">
            <div className="col-md-12 col-lg-4 text-center d-flex flex-column">
              <Image src={wsIcon} alt="" className="mb-3 w-75 h-auto mx-auto" />
              <h2 className="h3">Creative Writing</h2>
              <p>Our most popular and comprehensive course. Try out a myriad of writing styles, from novel writing to romance. If you’re not quite sure which genre you’d like to pursue, this is the ideal course for you.</p>
              <a href={`https://www.winghill.com/online-writing-courses/creative-writing/`} className="btn btn-primary btn-lg mt-auto align-self-center">Learn More</a>
            </div>
            <div className="col-md-12 col-lg-4 text-center d-flex flex-column">
              <Image src={nvIcon} alt="" className="mb-3 w-75 h-auto mx-auto" />
              <h2 className="h3">Novel Writing</h2>
              <p>Do you have a story to tell but are having difficulty organizing your ideas? Your tutor will help you craft your plot and expand your characters.</p>
              <a href={`https://www.winghill.com/online-writing-courses/novel-writing/`} className="btn btn-primary btn-lg mt-auto align-self-center">Learn More</a>
            </div>
            <div className="col-md-12 col-lg-4 text-center d-flex flex-column">
              <Image src={rmIcon} alt="" className="mb-3 w-75 h-auto mx-auto" />
              <h2 className="h3">Romance Writing</h2>
              <p>Dive into this wonderfully lucrative and creative style of writing. Learn how to structure a story that is sure to get noticed by publishers.</p>
              <a href={`https://www.winghill.com/online-writing-courses/romance-writing/`} className="btn btn-primary btn-lg mt-auto align-self-center">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseOverviewPage;
