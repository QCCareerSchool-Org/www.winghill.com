'use client';

import { useIntersectionObserver } from '@davewelsh79/use-intersection-observer';
import type { FC } from 'react';
import { memo } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import { GoogleReview } from './googleReview';
import { reviewData } from './reviewData';
import { getCompareFunction } from './sortReviewData';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  mobile: boolean;
  courseCode?: CourseCode;
}

const responsive: ResponsiveType = {
  all: {
    breakpoint: { max: 9999, min: 0 },
    items: 1,
  },
};

const autoPlaySpeed = 8000; // 8 seconds

export const GoogleCarousel: FC<Props> = memo(({ mobile, courseCode }) => {
  const sortedReviewData = reviewData.sort(getCompareFunction(courseCode));

  const [ intersected, carouselRef ] = useIntersectionObserver();

  return (
    <div ref={carouselRef}>
      <Carousel ssr responsive={responsive} itemClass="d-flex" infinite arrows={!mobile} showDots={mobile} autoPlay={intersected} autoPlaySpeed={autoPlaySpeed}>
        {sortedReviewData.map((data, key) => <GoogleReview {...data} key={key} />)}
      </Carousel>
    </div>
  );
});

GoogleCarousel.displayName = 'GoogleCarousel';
