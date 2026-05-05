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
      <h2 className="h1 text-center">Course Outline</h2>
      <p>The following topics are covered through our extensive course package:</p>
      <ol>
        {items.map(item => <li key={item}>{item}</li>)}
      </ol>
      { !noButton && (
        <OutlineLink />
      )}
    </div>
  </section>
);
