import Image from 'next/image';

import Banner from './course-banner-screenwriting.jpg';
import Screenwriting from './movie-magic-screenwriter-box.jpg';
import { CourseOutlineSection } from '../_components/courseOutlineSection';
import { GuaranteeSection } from '../_components/guaranteeSection';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCodes: CourseCode[] = [ 'sc' ];

const ScreenwritingPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode);
  const price = priceResult.success ? priceResult.value : undefined;

  return (
    <>
      <section>
        <div className="container">
          <h1>Screenwriting</h1>
          {price && <h2>{price.currency.symbol}{formatPrice(price.plans.full.total)} or {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}/mo</h2>}
          <Image src={Banner} alt="" />
          <p>Have you dreamed of seeing your creative work on the big screen? Would you love to see your name on movie credits or on TV? Find out how to write money-making scripts with our distance education course in Screenwriting.</p>
          <p>You'll learn what's in demand and you'll learn how to make your script or screenplay the one producers notice. You'll understand how to develop your plot, how to write dialogue that rings true, and how to make your characters the ones that audiences care about. What's more we'll show you how to make good money from your ideas—even if your work is NOT produced!</p>
          <p>Our script and screenwriting course is designed for creative individuals with a passion for cinema and television, people just like you! You'll work closely with a professional screenwriter who will carefully review your work. You'll learn what's good and what can be improved. Your tutor will give you industry tips, valuable information and guidance that you'll need to succeed. You'll learn exactly how to create content for movies, television, new media, and much more.</p>
        </div>
      </section>
      <CourseOutlineSection items={outlineItems} className="bg-light" />
      <section>
        <div className="container">
          <h2 className="h1 text-center"> Movie Magic Screenwriter Software</h2>
          <div className="row justify-content-center align-items-center">
            <div className="col-4 d-none d-lg-block">
              <Image src={Screenwriting} alt="" />
            </div>
            <div className="col-12 col-md-10 col-lg-8">
              <p>Movie Magic has been the leading industry scriptwriting software for over 28 years, and is the only program of its kind to win the Academy Technical Achievement Award!</p>
              <p>Here are a few of the key features of the Movie Magic Screenwriter software:</p>
              <ul>
                <li>Text-to-speech audio options allow you to play-back your character's lines through your computer speakers.</li>
                <li>Updated thesaurus and dictionaries let you edit and improve your written works in a variety of languages, including French, Spanish and German.</li>
                <li>Import features transfer all of your word processing files into Movie Magic format documents at the touch of a button.</li>
                <li>Export features allow you to share your scripts conveniently with agents, actors, directors and producers in various file formats such as PDF.</li>
              </ul>
              <p>With over 100 templates for writing your story or script, Movie Magic Screenwriter teaches you how to produce works for all sorts of genres and media. And, it's easy to navigate—all you need to learn how to do is hit the tab and enter buttons on your keyboard. It really is that simple, and the results are nothing short of amazing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <h2 className="h1 text-center">Your Assignments</h2>
          <p>We have mastered the art of distance education, and our step by step training will teach you everything you need to succeed in the Screenwriting industry! If you're eager to know what you'll learn, take a look at our learning system breakdown:</p>
          <h5>How It Works</h5>
          <p>Your course gives you a full 21 assignments. Each of the assignments is closely reviewed and critiqued by your tutor who will come back to you with suggestions and advice every step of the way. By the end of the course, your script will be completed, or very substantially underway.</p>
          <h5>Designing the &quot;Right&quot; Assignments For Your Needs</h5>
          <p>You and your tutor work together to design individual assignments that reflect your own interests and needs. At the beginning of the course, these may take a very structured form. Your tutor will help you to determine exactly the kind of script that you want to write.</p>
          <h5>Analyzing the Market</h5>
          <p>Together, you analyze the market and determine what the potential for success is. You'll learn to understand the demands of the specific sector that you would like to write in. You'll know exactly what you need to do to ensure that your script is one of the tiny percentage that fulfills all the needs of that sector. Most scripts never even get considered. Yours will.</p>
          <p>In your assignments, you'll cover all the necessary fundamentals—right from the start. Unlike most scripts, your work will be professionally presented. It will contain all the necessary elements. Its structure will be just right. Your characters will be fleshed out to the right degree. Your plot crises will come at the right moments. Your script length will be just right. Your plot will be credible.</p>
          <h5>Developing the Script</h5>
          <p>Once you and your tutor have developed the plot and plans for your script, and decided exactly how it will fit into the right niche, you'll work together on the more creative elements. In each assignment, you'll work on your script and send it for careful review by your tutor who will suggest what can be improved, and how and why.</p>
          <h5>The Process Continues</h5>
          <p>Your tutors learned their skills through a long process of trial and error. They will call on all their skills and longstanding experience to guide you in the best way possible as you submit your work. From the start, you are able to work in a really constructive and productive manner that produces real results. Your assignments result in a professional level script that you can feel really proud of.</p>
        </div>
      </section>

      <GuaranteeSection title="Screenwriting" doubleGuarantee={false} courseCodes={courseCodes} additionalText={additionalText} />
    </>
  );
};

export default ScreenwritingPage;

const outlineItems = [
  'Introduction to Screenwriting', 'Script Formatting 101', 'Understanding the Different Parts of a Script', 'Confidence Is Key: Diminishing Self-Doubt', 'The Art of Dialogue: Creating a Voice For Your Character', 'Meet the Cast: Key Members in the Industry', 'Notes From the Life of a Screenwriter', 'How to Build Suspense: Learning From the Masters', 'Mastering Your Plot\'s All-Important “Conflict”', 'The Rewrite: A Vital Step in Polishing Your Script', 'Defining Your Characters', '“Know More Than You Show”', 'The Finance of Screenwriting', 'Determining Ratings', 'Adapting: Script to Novel', 'Adapting: Novel to Script', 'Agents, Talking Heads and Other Key Professionals', 'Creating a Movie Budget: Nuts and Bolts, to High Finance', 'Readers, Endings, and Finalizing Character Development', 'Read, Analyze and Review a Sample Script: Crossword by Michael Crawley & Laurie Clayton', 'The Professional Associations, and Other Closing Thoughts',
];
const additionalText = 'Please note that the Movie Magic Screenwriter software program (value $170 US) can not be refunded.';
