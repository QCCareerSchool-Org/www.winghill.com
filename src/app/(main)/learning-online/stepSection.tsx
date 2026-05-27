import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { CSSProperties, FC, PropsWithChildren } from 'react';

interface Props {
  heading: string;
  src: StaticImageData;
  width?: CSSProperties['width'];
  className?: string;
}

export const StepSection: FC<PropsWithChildren<Props>> = ({ heading, src, width = 200, className, children }) => (
  <section className={className}>
    <div className="container text-center">
      <Image src={src} alt="" className="img-fluid mb-4" style={{ width }} />
      <h1 className="h2 mb-4">{heading}</h1>
      {children}
    </div>
  </section>

);
