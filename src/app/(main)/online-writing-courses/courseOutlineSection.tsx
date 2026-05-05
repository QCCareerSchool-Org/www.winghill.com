import Link from 'next/link';
import type { FC } from 'react';

interface Props {
  items: string[];
  coursePath: string; // e.g. creative-writing
  className: string;
}

const CourseOutlineSection: FC<Props> = ({ items, coursePath, className }) => {
  return (
    <>
      <section className={className}>
        <div className="container">
          <h2 className="h1 text-center">Course Outline </h2>
          <p>The following topics are covered through our extensive course package: </p>
          <ol>
            {items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <Link href={`/online-writing-courses/${coursePath}/course-outline`} className="btn btn-primary">Learn More</Link>

        </div>
      </section>
    </>
  );
};
export default CourseOutlineSection;
