import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface Props {
  unit: number;
  title: string;
  description: string;
  src: StaticImageData;
  bgLight?: boolean;
}

export const CourseOutlineLeft = ({ unit, title, description, src, bgLight }: Props) => (
  <section className={bgLight ? 'bg-light py-5' : 'py-5'}>
    <div className="container">
      <h2 className="h1 text-center">Unit {unit}</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-4 d-none d-lg-block">
          <Image src={src} alt="" className="img-fluid" />
        </div>
        <div className="col-9 col-md-7 col-lg-6">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </section>
);

export const CourseOutlineRight = ({ unit, title, description, src, bgLight }: Props) => (
  <section className={bgLight ? 'bg-light py-5' : 'py-5'}>
    <div className="container">
      <h2 className="h1 text-center">Unit {unit}</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-9 col-md-7 col-lg-6">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="col-4 d-none d-lg-block">
          <Image src={src} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
);
