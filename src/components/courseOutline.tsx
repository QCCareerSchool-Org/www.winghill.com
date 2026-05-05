import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, PropsWithChildren } from 'react';

interface Props {
  unit: number;
  title: string;
  src?: StaticImageData;
  className?: string;
  alternate?: boolean;
}

export const CourseOutline: FC<PropsWithChildren<Props>> = ({ unit, title, src, className, alternate, children }) => (
  <section className={className}>
    <div className="container">
      <h2 className="h1 text-center">Unit {unit}</h2>
      <div className="row justify-content-center align-items-center">
        <div className={`col-4 d-none d-lg-block ${alternate ? 'order-1' : 'order-2'}`}>
          <Image src={src} alt="" className="img-fluid" />
        </div>
        <div className={`col-9 col-md-7 col-lg-6 ${alternate ? 'order-2' : 'order-1'}`}>
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  </section>
);
