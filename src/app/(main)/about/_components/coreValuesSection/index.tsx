import Image from 'next/image';
import type { FC } from 'react';

import InnovationIcon from './core-values-icon-innovation.png';
import PersonalRelationshipsIcon from './core-values-icon-personal.png';
import QualityIcon from './core-values-icon-quality.png';
import ServiceIcon from './core-values-icon-service.png';
import SupportIcon from './core-values-icon-support.png';

export const CoreValuesSection: FC = () => (
  <section id="values">
    <div className="container text-center">
      <h2 className="h1 text-center mb-3">Our Core Values</h2>
      <p className="mb-5">Our mission is to provide you with a rich and personalized learning experience, all from the comfort of your home.</p>
      <div className="row justify-content-center g-5">
        {coreValues.map(c => (
          <div key={c.title} className="col-10 col-sm-8 col-md-6 col-lg-4">
            <Image src={c.icon} alt="" className="img-fluid mb-3" style={{ width: 160 }} />
            <h5>{c.title}</h5>
            {c.text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const coreValues = [
  {
    title: 'Quality',
    text: <p>We aim to offer our students superior quality distance education courses, and the best student support possible.</p>,
    icon: QualityIcon,
  },
  {
    title: 'Innovation',
    text: <p>Our team, including highly knowledgeable industry professionals, will provide you with up-to-date information on the ever-changing industry. We are constantly working to improve your learning experience.</p>,
    icon: InnovationIcon,
  },
  {
    title: 'Support',
    text: <p>Our excellent team of student support specialists offers our students unrivalled support and advice.</p>,
    icon: SupportIcon,
  },
  {
    title: 'Personal Relationships',
    text: <p>Our goal is to connect on a personal level with each and every one of our students, and to remain connected even after you've graduated.</p>,
    icon: PersonalRelationshipsIcon,
  },
  {
    title: 'Service Excellence',
    text: <p>From the moment you first contact us, to the moment you graduate, we want your experience with QC to be first-class and unforgettable.</p>,
    icon: ServiceIcon,
  },
];
