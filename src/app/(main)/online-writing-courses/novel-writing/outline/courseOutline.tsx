import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, PropsWithChildren } from 'react';

interface Props {
  unit: number;
  title: string;
  src: StaticImageData;
}

export const CourseOutline: FC<PropsWithChildren<Props>> = ({ unit, title, src, children }) => {
  const isOdd = unit % 2 !== 0;

  return (
    <section className={isOdd ? 'bg-light py-5' : 'py-5'}>
      <div className="container">
        <h2 className="h1 text-center">Unit {unit}</h2>
        <div className="row justify-content-center align-items-center">
          <div className={`col-4 d-none d-lg-block ${isOdd ? 'order-1' : 'order-2'}`}>
            <Image src={src} alt="" className="img-fluid" />
          </div>
          <div className={`col-9 col-md-7 col-lg-6 ${isOdd ? 'order-2' : 'order-1'}`}>
            <h2>{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
