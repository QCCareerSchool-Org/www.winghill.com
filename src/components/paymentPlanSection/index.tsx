import type { FC } from 'react';

import { Full } from './full';
import { PaymentSectionGuarantee } from './guarantee';
import { Part } from './part';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';

interface Props {
  courseCodes: CourseCode[];
  countryCode: string;
  provinceCode: string | null;
  className?: string;
}

export const PaymentPlanSection: FC<Props> = async ({ courseCodes, countryCode, provinceCode, className }) => {
  const price = await fetchPrice(courseCodes, countryCode, provinceCode);
  if (!price.success) {
    return null;
  }

  const href = 'https://enroll.winghill.com/?' + courseCodes.map(c => `c=${encodeURIComponent(c)}`).join('&');

  return (
    <section className={className ?? 'bg-light'} id="paymentPlans">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2 className="mb-4">Tuition &amp; Payment Plans</h2>
            <p className="lead mb-0">Select the payment plan that best suits your budget. Prices are listed in {price.value.currency.name}.</p>
          </div>
        </div>
        <div className="row justify-content-center mb-5 g-4 g-lg-5">
          <div className="col-12 col-sm-10 col-md-6 col-lg-6 col-xl-5 col-xxl-4 text-center">
            <Full price={price.value} href={href} />
          </div>
          <div className="col-12 col-sm-10 col-md-6 col-lg-6 col-xl-5 col-xxl-4 mb-5 mb-lg-0 text-center">
            <Part price={price.value} href={href} />
          </div>
        </div>
        <PaymentSectionGuarantee />
      </div>
    </section>
  );
};
