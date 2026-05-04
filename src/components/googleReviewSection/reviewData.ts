import type { StaticImageData } from 'next/image';
import type { CSSProperties } from 'react';

import type { CourseCode } from '@/domain/courseCode';

export enum Priority {
  HIGH = 3,
  NORMAL = 2,
  LOW = 1,
}

export interface ReviewData {
  name: string;
  reviewText: string;
  initial: string;
  imageSrc?: StaticImageData;
  backgroundColor: CSSProperties['backgroundColor'];
  /** font size in rem */
  size?: number;
  rating: 1 | 2 | 3 | 4 | 5;
  courseCodes?: CourseCode[];
  priority?: Priority;
}

export const reviewData: ReviewData[] = [
];
