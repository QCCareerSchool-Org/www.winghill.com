import type { Metadata } from 'next';
import Link from 'next/link';

import { Blurb } from './blurb';
import type { PageComponent } from '@/app/serverComponent';
import { ILEASection } from '@/components/ileaSection';
import { TestimonialSection } from '@/components/testimonialSection';
import AlyssaPernaImage from '@/components/tutorImages/images/alyssa-perna.jpg';
import AngelaHodelImage from '@/components/tutorImages/images/angela-hodal.jpg';
import AnitaDiPaoloImage from '@/components/tutorImages/images/anita-dipaolo.jpg';
import AshleyFriesenImage from '@/components/tutorImages/images/ashley-friesen.jpg';
import HeatherHawesImage from '@/components/tutorImages/images/heather-hawes.jpg';
import KimberlyJerkinsImage from '@/components/tutorImages/images/kimberly-jerkins.jpg';
import SarahWebbImage from '@/components/tutorImages/images/sarah-webb.jpg';

export const metadata: Metadata = {
  title: 'Tutors',
  alternates: {
    canonical: '/tutors',
  },
};

const TutorsPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-xl-10 col-xxl-8 text-xl-center">
            <h1 className="mb-3">QC Event School Tutors</h1>
            <p className="lead mb-0">Once you enroll with QC Event School, you'll be matched with a personal tutor who will review your work and provide you with in-depth feedback and advice. Our accomplished tutors have years of experience in the event industry and are eager to share their professional insights with you.</p>
          </div>
          {tutors.map((t, i) => (
            <div key={i} className="col-12">
              <Blurb name={t.name} subHeading={t.subHeading} text={t.text} src={t.src} priority={i <= 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <ILEASection />
    <TestimonialSection id="TE-0013" />
    <section className="bg-navy text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10 col-xxl-8 text-center">
            <h2 className="mb-3">Unlock Your Event Planning Potential with Expert Insights!</h2>
            <p className="lead mb-3">Dive into learning with individualized guidance from experts in event and wedding planning</p>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-primary me-3" href="https://enroll.qceventplanning.com">Enroll Now</Link>
              <Link className="btn btn-outline-light" href="/online-event-courses">View Courses</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default TutorsPage;

const tutors = [
  {
    name: 'Alyssa Perna',
    subHeading: 'Principal and Managing Director of Experience Marketing and Events',
    text: 'Alyssa has over a decade of event operations experience ranging from leading multinational business-to-business conferences, festivals and tradeshows, press conferences, large-scale fundraisers, complex social events and more.',
    src: AlyssaPernaImage,
  },
  {
    name: 'Angela Hodel',
    subHeading: 'Owner and Manager of Imagine Events, Wedding and Event Planning',
    text: 'Angela became certified as an event and wedding planner in 2009, and graduated from QC Event School as an International Wedding Planning Professional. Now, Angela has over 10 successful years in business leading her own company and has worked for multiple non-profit organizations, bringing knowledge and experience to her role as an event planner.',
    src: AngelaHodelImage,
  },
  {
    name: 'Heather Hawes',
    text: 'An event & wedding planner with over 20 years in event management, Heather has produced a vast array of events in her diverse career, including hosting First Lady Michelle Obama at Spelman\'s Commencement.',
    src: HeatherHawesImage,
  },
  {
    name: 'Anita DiPaolo',
    subHeading: 'Owner of Grazie Gifts With over 9 years of experience',
    text: 'Anita thrives on the challenge of creating proposals within budget, and coordinating entire themed events starting from the simplest spark of inspiration.',
    src: AnitaDiPaoloImage,
  },
  {
    name: 'Ashley Friesen',
    subHeading: 'Owner and lead planner for Ashley Brooke Weddings',
    text: 'With 10 years of experience in the wedding industry, she specializes in wedding planning, design and coordination and loves being able to create weddings that are unique to each of her couples.',
    src: AshleyFriesenImage,
  },
  {
    name: 'Sarah Webb',
    subHeading: 'Owner and Creative Director at Timeless Inspirations',
    text: 'Sarah Webb is the Owner and Creative Director of Timeless Inspirations, a well-known Hertford-based planning boutique. Sarah\'s creative seed for planning weddings didn\'t come about until she planned her own wedding in 2005.',
    src: SarahWebbImage,
  },
  {
    name: 'Kimberly Jerkins',
    text: 'Kimberly brings over 20 years of expertise in managing events and trade shows across corporate, retail, and non-profit sectors. As a co-owner and lead planner at Perfectly You Events, she partners with her daughter Hallye to deliver exceptional experiences. Kimberly is also a proud graduate of QC Career School, where she earned her certification as an International Event Planner.',
    src: KimberlyJerkinsImage,
  },
];
