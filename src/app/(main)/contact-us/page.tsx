import Image from 'next/image';

import ChatIcon from './icon-chat.png';
import EmailIcon from './icon-email.png';
import MailIcon from './icon-envelope.png';
import PhoneIcon from './icon-phone.png';
import { ChatLink } from '@/components/chatLink';
import { EmailLink } from '@/components/emailLink';
import { TelephoneLink } from '@/components/telephoneLink';
import { getAddress } from '@/lib/address';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const ContactUsPage: PageComponent = async props => {
  const { countryCode } = await getServerData(props.searchParams);
  const address = getAddress(countryCode);

  return (
    <section>
      <div className="container">
        <h1 className="text-center mb-5">Contact Us</h1>
        <div className="row justify-content-center align-items-start text-center g-5">
          <div className="col-12 col-lg-3 mb-5 mb-lg-0">
            <Image src={PhoneIcon} alt="" className="mb-2" />
            <h3>Phone</h3>
            <p>If you have any questions about our courses, you can call us at <b><TelephoneLink countryCode={countryCode} /></b>. One of our friendly student support specialists would be happy to help you.</p>
          </div>
          <div className="col-12 col-lg-3 mb-5 mb-lg-0">
            <Image src={ChatIcon} alt="" className="mb-2" />
            <h3>LiveChat</h3>
            <p>Have a quick question? Get in touch with one of our friendly student support specialists right away.</p>
            <b><ChatLink>Chat Now</ChatLink></b>
          </div>
          <div className="col-12 col-lg-3 mb-5 mb-lg-0">
            <Image src={EmailIcon} alt="" className="mb-2" />
            <h3>Email</h3>
            <p>You can also inquire by email. Write to us at <b><EmailLink /></b>! We'll reply quickly with advice and information on how you can get your writing off the ground.</p>
          </div>
          <div className="col-12 col-lg-3 mb-5 mb-lg-0 text-center">
            <Image src={MailIcon} alt="" className="mb-2" />
            <h3>Mail</h3>
            <p className="mb-0"><b>Winghill Writing School</b><br /></p>
            {address.map((line, index) => (
              <p key={index} className="mb-0">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
