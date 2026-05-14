import Image from 'next/image';
import Link from 'next/link';

import StudentForum from './student-resources-forum.png';
import OnlineStudentCenter from './student-resources-online-student-center.png';
import { ChatLink } from '@/components/chatLink';
import { EmailLink } from '@/components/emailLink';
import ChatIcon from '@/components/icons/icon-chat.png';
import EmailIcon from '@/components/icons/icon-email.png';
import PhoneIcon from '@/components/icons/icon-phone.png';
import { TelephoneLink } from '@/components/telephoneLink';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const StudentResourcesPage: PageComponent = async props => {
  const { countryCode } = await getServerData(props.searchParams);

  return (
    <>
      <section className="text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="mb-3">Student Resources</h1>
              <p className="mb-0">As a student with Winghill Writing School, you'll have access to a number of specially designed resource tools. These valuable resource tools will allow you to complete your studies with ease.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-6">
              <Image src={OnlineStudentCenter} alt="" className="img-fluid" style={{ width: '100%' }} />
            </div>
            <div className="col-md-12 col-lg-6">
              <h2 className="mb-3">Online Student Center</h2>
              <p>Our Online Student Center provides you with one more way to connect with Winghill Writing School and your peers. As soon as you register for one of our courses, you'll have access to the center and all its benefits.</p>
              <p className="mb-0">At the interactive student center, you can upload all of your assignments and access your tutor's feedback. You can also download electronic copies of your course guides, discuss your progress, pose questions, and share stories with your fellow students and graduates on our student forum.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center">
          <h2 className="mb-3">Student Support System</h2>
          <p>Our friendly student support specialists are there for you every step of the way—even after you graduate. You can contact them by phone, email, or LiveChat with your questions and concerns. They will walk you, step by step, through any difficulties you have. It's natural to feel uncertain or apprehensive at certain points throughout the course. That's why we make it our goal to provide you with a strong system of support and guidance whenever these moments arise.</p>
          <p className="mb-5">We also love to hear what our graduates are up to. Please keep in touch! Maybe we'll see your story in our <Link href="/graduate-hall-of-fame">Graduate Hall of Fame.</Link></p>
          <div className="row justify-content-center align-items-start text-center g-5">
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
              <Image src={PhoneIcon} alt="" className="mb-2" />
              <h3 className="h4">Phone</h3>
              <p className="mb-0">If you have any questions about our courses, you can call us at <TelephoneLink countryCode={countryCode} />. One of our friendly student support specialists would be happy to help you.</p>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
              <Image src={ChatIcon} alt="" className="mb-2" />
              <h3 className="h4">LiveChat</h3>
              <p>Have a quick question? Get in touch with one of our friendly student support specialists right away.</p>
              <p className="mb-0"><ChatLink>Chat Now</ChatLink></p>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
              <Image src={EmailIcon} alt="" className="mb-2" />
              <h3 className="h4">Email</h3>
              <p className="mb-0">You can also inquire by email. Write to us at <EmailLink />! We'll reply quickly with advice and information on how you can get your writing off the ground.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container px-5 text-center">
          <div className="row g-5 text-center align-items-center">
            <div className="col-lg-8 col-12">
              <h2 className="mb-3">Student Forum</h2>
              <p>Even though you aren't actually in a classroom, you'll receive the personal attention and assistance you need to succeed. We try to replicate a classroom-like setting to ensure you graduate with the advanced skill set and experiences you need, just as though you were attending onsite courses. Along with the support you receive from our student support specialists—by phone, email, and LiveChat—you'll also be able to discuss your material with your peers in our student forum.</p>
              <p className="mb-0">Within the Student Forum, you'll be able to chat with other like-minded individuals who share a passion for writing. Discuss assignments and projects. At Winghill Writing School, you're never alone!</p>
            </div>
            <div className="col-lg-4 col-12">
              <Image src={StudentForum} alt="" className="text-center" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentResourcesPage;
