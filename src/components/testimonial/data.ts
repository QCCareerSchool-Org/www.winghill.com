import type { StaticImageData } from 'next/image';

import * as Images from './images';
import type { CourseCode } from '@/domain/courseCode';

type ID = `TW-${number}`;

export interface Testimonial {
  name: string;
  title?: string;
  intro?: string;
  nickname?: string;
  courses: CourseCode[];
  provinceCode: string | undefined;
  short: string[];
  long: string[];
  image: StaticImageData | undefined;
  imagePositionX: number | undefined;
  imagePositionY: number | undefined;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
}

export const testimonials = {
  'TW-0001': {
    name: 'Lisa Collicutt',
    courses: [ 'nv' ],
    provinceCode: undefined,
    short: [ 'I never imagined I could or would write an entire novel one day. My first published novel is a standalone paranormal romance, The Gathering Darkness, which I wrote while taking the Winghill Novel Writing course.' ],
    long: [ 'I never imagined I could or would write an entire novel one day. My first published novel is a standalone paranormal romance, The Gathering Darkness, which I wrote while taking the Winghill Novel Writing course. Since then, I\'ve written and published The Devil\'s Flower and the first and second books in the Serendipitous Curse series.' ],
    image: Images.LisaCollicut,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0002': {
    name: 'Jeanette Winsor',
    courses: [ 'ws' ],
    provinceCode: undefined,
    short: [ 'I wanted a course that allowed me to decide how much time I could spend on it and the areas of writing I wanted to focus on. I can\'t believe how much progress I have made. I am taking some time off from my full-time job just to fulfill my obligations to two magazines.' ],
    long: [ 'I wanted a course that allowed me to decide how much time I could spend on it, what was important for me to learn, and the areas of writing I wanted to focus on. With Quality of Course, I am very satisfied with the way things are going. I can\'t believe how much progress I have made. I am introduced to different genres of writing—which is important—but I am not required to write anything that does not interest me. I have numerous pieces in print, and I am constantly writing. I am taking some time off from my full-time job just to fulfill my obligations to two magazines, Homemaker\'s and The Navigator. Financially, it will be well worth it!' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0003': {
    name: 'Janice Ruppenthal',
    courses: [ 'ws' ],
    provinceCode: undefined,
    short: [ 'I am enclosing a copy of my story, which was published in the magazine True Love. I wanted you to know how much I appreciate the support given by my tutor and by your office staff who have been exceptional.' ],
    long: [ 'I am enclosing a copy of my story, which was published in the magazine True Love. I have received payment of $145. Also, find enclosed a copy of Falling Feet First which True Love will be publishing in January. I wanted you to know how much I appreciate the support given by my tutor, Joan, and by your office staff who have been exceptional in their responsiveness to any concerns I\'ve expressed.' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
} as const satisfies Record<ID, Testimonial | undefined>;

export type TestimonialId = keyof typeof testimonials;
