import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, PropsWithChildren } from 'react';

interface Props {
  heading: string;
  src: StaticImageData;
  className?: string;
}

export const LearningOnlineSection: FC<PropsWithChildren<Props>> = ({ heading, src, className, children }) => (
  <section className={className}>
    <div className="container text-center">
      <Image src={src} alt="" className="img-fluid" />
      <h1 className="h2 mb-4">{heading}</h1>
      {children}
    </div>
  </section>

);
