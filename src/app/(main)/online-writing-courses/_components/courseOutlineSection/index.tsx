import type { FC } from 'react';

import { OutlineLink } from './outlineLink';

interface Props {
  items: string[];
  className?: string;
  noButton?: boolean;
}

export const CourseOutlineSection: FC<Props> = ({ items, className, noButton }) => (
  <section className={className}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead">The following topics are covered through our extensive course package:</p>
          <ol>
            {items.map(item => <li key={item}>{item}</li>)}
          </ol>
          {!noButton && <OutlineLink />}
        </div>
      </div>
    </div>
  </section>
);
