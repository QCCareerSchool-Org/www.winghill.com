import Image from 'next/image';

import Laurie from './laurie-clayton.png';
import YourTutors from './your-tutors.jpg';
import type { PageComponent } from '@/serverComponent';

const TutorsPage: PageComponent = () => {
  return(
    <>
      <section>
        <div className="container">
          <h1 className="text-center mb-4">Your Tutors</h1>
          <div className="row justify-content-center align-items-start">
            <div className="col-md-12 col-lg-6">
              <p>Over the years, Winghill Writing School has had the privilege of working with many students who have gone on to pursue successful writing careers. Almost all of them attribute much of their success from the support, guidance and encouragement they received from their personal tutors. All of the School's tutors are talented professional writers who know the trade and what it takes to have worked published. Our aim is to understand your goals and then to match you with the tutor best equipped to help you.</p>
              <h2 className="h3 mt-4 mb-3">Here's How It Works</h2>
              <p className="mb-0">When you enroll, the first assignment you'll be asked to complete is a personal profile. This is your chance to introduce yourself to the School and to your tutor. At the School office, we'll carefully study your profile and assign you to the tutor whose skills and interests best match your own. You'll quickly form a close working relationship. Your tutor will tailor personal assignments for you and will give you guidance and feedback as you progress through the course. Step by step, your skills will improve and you will learn to write to professional standards.</p>
            </div>
            <div className="col-md-12 col-lg-6 text-center">
              <Image src={YourTutors} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center align-items-start g-5">
            <div className="col-md-12 col-lg-6">
              <h2 className="text-center text-lg-start mb-5">Laurie Clayton</h2>
              <h3 className="h4">What are the biggest highlights of your career?</h3>
              <p>I enjoyed writing a couple of episodes of Skyland, a children's television series that used motion-capture animation. Recently I collaborated on a crime novel called <i>The Women's Club</i>. The day I became a tutor at Winghill was a happy day for me!</p>
              <h3 className="h4">What inspired you to pursue your career in writing?</h3>
              <p>Believe it or not, my Grade 6 teacher, encouraged me to become a writer. I did not have the benefit of professional help and so I found writing to be solitary and difficult. I must say that if I'd had the benefit of close support from a personal tutor my career path would have been a lot easier. In the end things worked out for me but my goal as a tutor is to help students achieve success and to avoid the painful process of trial and error that so many writers go through.</p>
              <h3 className="h4">What is your favorite part of being a tutor for QC?</h3>
              <p>The first time one of my students sold a short story was a red letter day for me. But every time I see a student improving, using the skills I've drummed into his or her head, I'm as proud as a new parent.</p>
              <h3 className="h4">What is your best advice for new students pursuing a career in writing?</h3>
              <p>I would advise new students to soak up as much information as they can about as many things as possible. Be curious! Read. Stay at the keyboard until something has appeared on the blank screen.</p>
              <p>Oh yes—read!</p>
              <p><i>Laurie has recently written a new romantic comedy script, Caught in the Act, which has been optioned.</i></p>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="text-center"><Image src={Laurie} alt="" /></div>
              <h3 className="h4 mb-3">Laurie's Credentials</h3>
              <h4 className="h5">Education</h4>
              <p>University of Alberta, Major in English Literature, Minor in Dramatic Arts<br />Banff School of Fine Arts Creative Writing Summer Program</p>
              <h4 className="h5">Grants and Scholarships</h4>
              <p>Banff School of Fine Arts<br />Alberta Culture Grant</p>
              <h4 className="h5">Awards & Recognition</h4>
              <p>Storyteller of the Year at a 2011 annual London, England awards ceremony</p>
              <h4 className="h5">Memberships & Associations</h4>
              <p>Juror, Mississauga Arts Council Annual Literary Awards (2007-present)</p>
              <h4 className="h5">Relevant Work</h4>
              <p>Production assistant and story producer for CBC radio<br />Co-creator, Winghill Writing School Screenwriting Course</p>
              <h4 className="h5">Selected Screenplays</h4>
              <p>&ldquo;The Island of the Child King&rdquo; and &ldquo;Life in Puerto Angel,&rdquo; Skyland, Nine Story, Method Films<br />Conspiracy of Silence, 1981 National Film Board of Canada
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="mb-5">Maggie Wheeler</h2>
          <p>Known as the &ldquo;Seaway Valley's Queen of Crime,&rdquo; Maggie Wheeler is a highly accomplished author, educator, and historian with over 25 years of professional experience in the literary world. As the author of the best-selling <i>Farran Mackenzie Lost Villages</i> mystery series, Maggie has mastered the craft of long-form narrative, meticulous historical research, and suspenseful plotting. Her work has earned prestigious recognition, including nominations for the Ontario Premier's Awards for the Arts and multiple &ldquo;Literary Artist of the Year&rdquo; awards.</p>
          <p>Beyond her fiction, Maggie is a contributor to <i>The Canadian Encyclopedia for Historica Canada</i>, demonstrating her proficiency in professional non-fiction and archival research.</p>
          <p>Maggie's expertise as a writing tutor is grounded in a deep academic foundation, holding both a <b>Master's degree in English</b> and a <b>Bachelor of Education (English and History)</b>. Maggie offers students a comprehensive understanding of story structure, historical world-building, and the professional discipline required to succeed in the publishing industry.</p>
        </div>
      </section>
    </>
  );
};

export default TutorsPage;
