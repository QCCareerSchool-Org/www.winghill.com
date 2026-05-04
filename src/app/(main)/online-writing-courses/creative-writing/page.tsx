import type { PageComponent } from '@/app/serverComponent';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';
import Banner from './course-banner-creative-writing.jpg'
import Guarantee from './guarantee.png'
import Image from 'next/image';
const courseCodes: CourseCode[] = ['ws'];

const CreativeWritingPage: PageComponent = async ( {searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode);
  const price = priceResult.success? priceResult.value : undefined; 
  return (

    <>
      <section>
        <div className="container">
          <h1>Creative Writing</h1>
          {price && <h2>{price.currency.symbol}{formatPrice(price.plans.full.total)} or {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}/mo</h2>}
          <Image 
            src={Banner}
            alt="banner"/>
          <p>If you have always wanted to use your talent and passion for writing to earn extra income, our Creative Writing course is the ideal choice for you. Our course caters to people just like you who want to become a published writer but don’t know how to get started. Your lessons will expose you to a variety of different genres and together with your tutor you’ll identify the types of writing you like best. We’ll customize your assignments to suit your particular interests and help you succeed as a published writer. </p>
          <p>The creative writing program shows you how to write articles and short stories for a variety of audiences. You’ll even learn how to tackle opportunities for radio, television, and screenplays. Each lesson of the course covers a new and exciting topic. You might discover a previously untapped passion for romance writing, or a rewarding new career as a children’s author. If you’ve never been published before and you’re not sure what area of writing you’d like to focus on, the creative writing program is the best choice for you. </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h1>Course Outline </h1>
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
            <li>Writer’s First-Aid Kit</li>
          </ol>
          <button>Learn More</button>
        </div>
      </section>

      <section>
        <div className="container">
          <h1>Creative Writing Course Guarantee</h1>
          <p>You get a full money-back guarantee for all of our writing programs. You can take the time to review the course materials in your home for 21 days. If for any reason you decide the course is not right for you, simply send everything back to the School and we’ll issue you a full refund—no questions asked.</p>
          <h2>Double Guarantee</h2>
          <p>The Creative Writing course is also covered by our Double Guarantee. In addition to the no-risk 21-day trial, we guarantee your success. If by the time you’ve completed the program you have not earned the equivalent of your course fees through your published work, we’ll issue you a full refund. It’s as simple as that. Our course is designed for your success and we back up that promise to you with an iron-clad guarantee that’s been in place for over twenty years.</p>
          <button>Enroll Now</button>
          <Image
            src={Guarantee}
            alt="guarantee"/>
        </div>
      </section>
    </>
  );

};

export default CreativeWritingPage;
