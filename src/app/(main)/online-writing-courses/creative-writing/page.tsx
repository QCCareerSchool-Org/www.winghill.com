import type { PageComponent } from '@/app/serverComponent';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';

const courseCode: CourseCode = 'WS';

const CreativeWritingPage: PageComponent = async () => {
  const { countryCode } = await getserver;
  const priceResult = await fetchPrice(courseCode, countryCode, provinceCode);
  return (

    <>
      <section>
        <div className="container">
          <h1>Creative Writing</h1>
          <h2>$848 or $88/mo </h2>
          <p>If you have always wanted to use your talent and passion for writing to earn extra income, our Creative Writing course is the ideal choice for you. Our course caters to people just like you who want to become a published writer but don’t know how to get started. Your lessons will expose you to a variety of different genres and together with your tutor you’ll identify the types of writing you like best. We’ll customize your assignments to suit your particular interests and help you succeed as a published writer. </p>
          <p>The creative writing program shows you how to write articles and short stories for a variety of audiences. You’ll even learn how to tackle opportunities for radio, television, and screenplays. Each lesson of the course covers a new and exciting topic. You might discover a previously untapped passion for romance writing, or a rewarding new career as a children’s author. If you’ve never been published before and you’re not sure what area of writing you’d like to focus on, the creative writing program is the best choice for you. </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h1>Course Outline </h1>
          <p>The following topics are covered through our extensive course package: </p>

        </div>
      </section>

    </>
  );

};

export default CreativeWritingPage;
