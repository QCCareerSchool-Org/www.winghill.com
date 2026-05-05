import Link from 'next/link';

interface Props {
  items: string[];
  coursePath: string; // e.g. creative-writing
}

const CourseOutlineComponent = ({ items, coursePath }: Props) => {
  return (
    <>
      <div className="container">
        <h2 className="h1">Course Outline </h2>
        <p>The following topics are covered through our extensive course package: </p>
        <ol>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <Link href={`/online-writing-courses/${coursePath}/course-outline`} className="btn btn-primary">Learn More</Link>

      </div>
    </>
  );
};
export default CourseOutlineComponent;
