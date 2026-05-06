'use client';

import type { FC } from 'react';

import { GoogleCarousel } from './googleCarousel';
import GoogleLogo from './googleLogo.svg';
import type { CourseCode } from '@/domain/courseCode';
import { useScreenSizeContext } from '@/hooks/useScreenSizeContext';

interface Props {
  courseCode?: CourseCode;
  className?: string;
}

export const GoogleReviewSection: FC<Props> = ({ courseCode, className }) => {
  const { lt } = useScreenSizeContext();

  return (
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <GoogleLogo width="50" height="50" className="mb-3" />
            <GoogleCarousel courseCode={courseCode} mobile={lt('lg')} />
          </div>
        </div>
      </div>
    </section>
  );
};
