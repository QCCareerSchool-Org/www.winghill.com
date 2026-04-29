'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import type { CourseCode } from '@/domain/courseCode';
import { useScreenWidth } from '@/hooks/useScreenWidth';

interface Props {
  courseCode: CourseCode;
}

export const CourseCardCertifcation: FC<Props> = ({ courseCode }) => {
  const screenWidth = useScreenWidth();
  if (screenWidth === 0) {
    return;
  }

  const certification = getCertification(courseCode);
  if (certification) {
    return <Image src={certification} alt="" height={screenWidth > 1200 ? 120 : screenWidth > 992 ? 110 : screenWidth > 768 ? 100 : 90} />;
  }
};

export const getCertification = (courseCode: CourseCode): StaticImageData | null => {
  switch (courseCode) {
    default:
      return null;
  }
};
