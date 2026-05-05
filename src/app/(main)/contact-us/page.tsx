import Image from 'next/image';

import ChatIcon from './icon-chat.png';
import EmailIcon from './icon-email.png';
import MailIcon from './icon-envelope.png';
import PhoneIcon from './icon-phone.png';
import { ChatLink } from '@/components/chatLink';
import { EmailLink } from '@/components/emailLink';
import { getServerData } from '@/lib/getServerData';
import { getTelephoneNumber } from '@/lib/telephone';
import type { PageComponent } from '@/serverComponent';

const ContactUsPage: PageComponent = async props => {
  const { countryCode } = await getServerData(props.searchParams);
  const telephoneNumber = getTelephoneNumber(countryCode);

  return (
    <>
      <section>
        <div className="container">
          <h1 className="text-center mb-5">Contact Us</h1>
          <div className="row justify-content-center align-items-start text-center g-5">
            <div className="col-3 mb-5 mb-lg-0">
              <Image src={PhoneIcon} alt="" className="mb-2" />
              <h3>Phone</h3>
              <p>If you have any questions about our courses, you can call us at <b><a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a></b>. One of our friendly student support specialists would be happy to help you.</p>
            </div>
            <div className="col-3 mb-5 mb-lg-0">
              <Image src={ChatIcon} alt="" className="mb-2" />
              <h3>LiveChat</h3>
              <p>Have a quick question? Get in touch with one of our friendly student support specialists right away.</p>
              <b><ChatLink>Chat Now</ChatLink></b>
            </div>
            <div className="col-3 mb-5 mb-lg-0">
              <Image src={EmailIcon} alt="" className="mb-2" />
              <h3>Email</h3>
              <p>You can also inquire by email. Write to us at <b><EmailLink /></b>! We'll reply quickly with advice and information on how you can get your writing off the ground.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center align-items-start g-0">
            <div className="col-12 col-md-10 col-lg-8">
              <h3>Send a Message</h3>
            </div>
            <div className="col-4 d-none d-lg-block text-center">
              <Image src={MailIcon} alt="" />
              <h3 className="mb-3 mt-3">Mail</h3>
              <p><b>Winghill Writing Skill</b><br />
                1011 Robin Rd<br />
                Silver Spring MD  20901<br />
                USA
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
