import Image from 'next/image';

import Guarantee from './guarantee.png';
interface Props {
  title: string;
  doubleGuarantee: boolean;
  courseCode: string;
  additionalText: boolean;
  additionalTextBody?: string;
}

const ReusableGuarantee = ({ title, doubleGuarantee, courseCode, additionalText, additionalTextBody }: Props) => {
  return (
    <div className="container">
      <h2 className="h1 mb-4 text-center">{title} Course Guarantee</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-4 d-none d-lg-block">
          <Image src={Guarantee} alt="21-day money back guarantee" className="img-fluid" />
        </div>
        <div className="col-12 col-md-10 col-lg-8">
          <p>You get a full money-back guarantee for all of our writing programs. You can take the time to review the course materials in your home for 21 days. If for any reason you decide the course is not right for you, simply send everything back to the School and we'll issue you a full refund—no questions asked.</p>
          {doubleGuarantee &&
            <>
              <h3 className="h5">Double Guarantee</h3>
              <p> The {title} course is also covered by our Double Guarantee. In addition to the no-risk 21-day trial, we guarantee your success. If by the time you've completed the program you have not earned the equivalent of your course fees through your published work, we'll issue you a full refund. It's as simple as that. Our course is designed for your success and we back up that promise to you with an iron-clad guarantee that's been in place for over twenty years.</p>
              <a href={`https://enroll.winghill.com?c=${courseCode}`} className="btn btn-primary">Enroll Now</a>
            </>
          }
          {additionalText &&
            <p>{additionalTextBody}</p>
          }
        </div>
      </div>
    </div>

  );
};

export default ReusableGuarantee;
