import type { Metadata } from 'next';
import { AccountsEmailAddress } from '../accountsEmailAddress';
import { InfoEmailAddress } from '../infoEmailAddress';
import styles from '../terms.module.scss';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Enrollment Agreement',
  alternates: {
    canonical: '/enrollment-agreement',
  },
};

const EnrollmentAgreementPage: PageComponent = () => (
  <div className={styles.terms}>
    <h1>Enrollment Agreement</h1>
    <h2>1. Shipping Policy</h2>
    <p>QC Career School's course lessons are fully online.</p>
    <p>Some courses include supplementary physical items. All applicable items will be shipped within two business days of the date of enrollment. Items will be shipped via courier, and are expected to be delivered within 10 business days.</p>
    <h2>2. 21-Day Money-Back Guarantee</h2>
    <p>You have 21 days from the date of enrollment to examine the course. If you are not entirely satisfied or choose not to complete the course, please notify the School by emailing <AccountsEmailAddress /> within 21 days of your date of enrollment. Within two business days the School will review your account and provide you with your options.</p>
    <p>A full refund cannot be granted if you have already submitted course work to your tutor for grading. A partial refund may be offered instead.</p>
    <p>If your course includes supplementary physical items, you must return them to receive a refund:</p>
    <ul>
      <li>QC will provide you with shipping instructions and ask you to return the physical course materials, postage paid and with a tracking number. QC is not responsible for lost return shipments that do not have a valid tracking number.</li>
      <li>Your course fees will be refunded in full once QC has received your returned materials. Note that return shipping fees will not be covered or refunded by QC.</li>
      <li>Returned course materials must be unused and in their original condition. A full refund cannot be issued if any materials have been used or are not in their original condition.</li>
    </ul>
    <h2>3. Tuition Payments &amp; Installment Plans</h2>
    <p>If you choose to pay your course fees in monthly installments, you are obligated and agree to continue to make your scheduled payments until the entire tuition amount has been paid.</p>
    <h3>Missed Payments</h3>
    <p>Tuition installment payments are processed according to a fixed monthly schedule. It is your responsibility to ensure the credit card provided has sufficient funds to cover your monthly tuition payment.</p>
    <ul>
      <li>If you know in advance that you will miss a tuition payment, contact the School as quickly as possible and a student advisor will work with you to change your scheduled payment date(s).</li>
      <li>You are allowed a maximum of three months of tuition deferrals within your payment schedule. A missed monthly payment is considered a tuition deferral.</li>
      <li>Should you miss a scheduled tuition payment, you are required to communicate with the School and arrange a replacement payment as quickly as possible. Your student center account will be placed &ldquo;on hold&rdquo; until your payments are up-to-date.</li>
    </ul>
    <h2>4. Course Deadlines</h2>
    <p>You have two years from the date of enrollment to complete your courses. However, QC is happy to offer an extension to students who need more time. Simply contact the School to arrange an extension, before your two-year deadline. A nominal administration fee will be charged to your account.</p>
    <h2>5. Assignment Deadlines &amp; Grading</h2>
    <p>There are no deadlines for submitting any assignment or course unit to QC.</p>
    <p>Once a full unit has been submitted for grading, you will receive a grade and audio feedback from your tutor within 10 business days. Should your tutor take longer than 10 business days, contact the School for assistance.</p>
    <p>Units are awarded a letter grade ranging from A+ (exceptional) to F (fail). A grade of C- or above is required to pass each unit.</p>
    <p>Failing a unit (grade below C-) will require you to re-submit that unit. An administrative fee will be charged to your account when re-submitting a unit for grading.</p>
    <p>At any point if you are unsatisfied with a unit grade, you can request to redo your assignments and re-submit that unit. Contact to school to make these arrangements. An administrative fee will apply.</p>
    <h3>Communication with Your Tutor</h3>
    <p>Student advisors will be your first point of contact for all communications with the School, including questions about your course and assignments or questions specifically for your tutor. Your student advisor may answer your questions directly, or may forward your request to your tutor and relay the answer back to you.</p>
    <h2>6. Withdrawal Policy</h2>
    <p>Withdrawals after the 21-day guarantee period are evaluated on a case-by-case basis. If you wish to withdraw from your course(s) after the 21-day guarantee period, please notify the School by emailing <AccountsEmailAddress />. Within two business days the School will review your account and provide you with your options.</p>
    <ul>
      <li>Automated tuition payments will continue to be processed, and you are responsible for meeting your tuition payment obligations until you have reached a withdrawal agreement with the School.</li>
      <li>Withdrawal fees are dependent on tuition fees paid to date, the course materials sent to you, and the amount of tutorial used. If you have completed more than half of your course, you may not be eligible to withdraw.</li>
      <li>QC reserves the right to refuse any withdrawal request after the 21-day guarantee period. Refunds (if applicable) will only be processed within six months of your date of enrollment.</li>
    </ul>
    <h2>7. Code of Conduct</h2>
    <p>QC's tutors and support staff are dedicated to providing a top-quality experience to all students. When you communicate with the QC Team, you will be greeted in a courteous, friendly and respectful manner.</p>
    <p>Students who exhibit abusive, threatening or offensive behavior when communicating with any member of the QC team may be placed on academic probation or expelled from the School without a tuition refund.</p>
    <p>QC considers cyber-bullying to be a serious and dangerous situation for all. Any individual who is identifiable as a QC student who is found to exhibit threatening, harassing, abusive or offensive behavior online may be placed on academic probation or expelled from the School without a tuition refund.</p>
    <h3>Cheating &amp; Plagiarism</h3>
    <p>As a student of QC, you are expected to put in your best effort to complete your course work and assignments. Cheating, plagiarism, tampering, or falsification of your work in any way is not permitted.</p>
    <p>If your tutor suspects your work to be the result of any form of cheating, your account may be immediately placed under academic probation while a review of your work is conducted. If your work is determined to be the result of cheating, you will receive a failing grade for that unit and will be required to pay a re-submission fee to submit the unit. Additional instances of cheating will result in immediate expulsion from the School without a tuition refund.</p>
    <h2>8. Governing Law and Jurisdiction</h2>
    <p>This Agreement is governed by and is to be construed in accordance with the laws of the Province of Ontario and the laws of Canada applicable therein and treated in all respects as an Ontario contract. The parties to this Agreement hereby irrevocably and unconditionally attorn to the exclusive jurisdiction of the courts of the Province of Ontario and all courts competent to hear appeals therefrom.</p>
    <h2>9. Age of Majority</h2>
    <p>If you are under 18 or under the age of majority in your state/province, you will need a parental consent form in order to enroll with Winghill. Please contact the School for further details.</p>
    <h2>10. Contact Information</h2>
    <p>QC Quality of Course Inc.<br />Corporation Number: 208502-0<br />Business Number (BN): 105927339RC0001</p>
    <p>Email: <InfoEmailAddress /><br />Phone: 1-613-749-8248</p>
    <table>
      <tbody>
        <tr>
          <td style={{ paddingRight: '2rem', verticalAlign: 'top' }}>
            <p><em>Shipping</em></p>
            <p>38 McArthur Ave<br />Ottawa ON&nbsp; K1L 6R2<br />Canada</p>
          </td>
          <td>
            <p><em>Registered Office</em></p>
            <p>2026 Delmar Crt<br />Ottawa ON&nbsp; K1H 5R6<br />Canada</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default EnrollmentAgreementPage;
