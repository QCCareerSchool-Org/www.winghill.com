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
  'TW-0004': {
    name: 'Reine Berns',
    courses: [ 'ws' ],
    provinceCode: undefined,
    short: [ 'The encouragement was outstanding and you were right. After only fourteen months into my course my first article was published and I got $600 for it. A few small articles and I had my fee back.' ],
    long: [ 'The encouragement was outstanding and you were right. After only fourteen months into my course my first article was published and I got $600 for it. A few small articles and I had my fee back.' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0005': {
    name: 'Terry Schultz',
    courses: [ 'ws' ],
    provinceCode: undefined,
    short: [ '' ],
    long: [ 'Backhome has sent the cheques and copies. Our World has published and paid for two articles and will accept more if I ever get them written, Tirade is still threatening to use at least six articles, and I have a short story at Zoetrop: ‘All Story’ under consideration. When I get something written, it seems to find a home. Thanks again for your excellent course and helpful and positive comments. I will get some more lessons in soon.' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0006': {
    name: 'Kathleen Y. Rattigan',
    courses: [ 'ws' ],
    provinceCode: undefined,
    short: [ '' ],
    long: [ 'I knew that I possessed raw writing talent but I lacked the knowledge to present my work in a professional manner and I needed guidance and instruction. In the space of a few months I have gone from unpublished to the proud author of three articles that an editor requested of me. Mr. Mirolla has proved to be an excellent instructor. He is encouraging yet truthful with his guidance. I am well satisfied.' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0007': {
    name: 'Marianne Middleveen',
    courses: [ 'nv' ],
    provinceCode: undefined,
    short: [ 'I started as a complete novice to writing, yet I already have one novel published and am half-way through a second. My excellent tutor puts in a great deal of time reading and critiquing my manuscripts. His encouragement and enthusiasm spurred me to write things that still surprise me. My heartfelt thanks for bringing me so far so quickly.' ],
    long: [ 'I started as a complete novice to writing, yet I already have one novel published and am half-way through a second. My excellent tutor puts in a great deal of time reading and critiquing my manuscripts. His encouragement and enthusiasm spurred me to write things that still surprise me. My heartfelt thanks for bringing me so far so quickly.' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0008': {
    name: 'R. Scott Mackey',
    courses: [ 'nv' ],
    provinceCode: undefined,
    short: [ 'I produced Blood Runs Deep as my project in the novel writing course. I’d written novels before, but nothing that was publishable. With the one-on-one guidance of my tutor (Michael Crawley) and the excellent course materials, I was able to break through and become a published novelist. I would encourage any would-be novelist to consider the course. It really helped me.' ],
    long: [ 'I produced Blood Runs Deep as my project in the novel writing course. I’d written novels before, but nothing that was publishable. With the one-on-one guidance of my tutor (Michael Crawley) and the excellent course materials, I was able to break through and become a published novelist. I would encourage any would-be novelist to consider the course. It really helped me.' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0009': {
    name: 'Rebecca Williams',
    courses: [ 'nv' ],
    provinceCode: undefined,
    short: [ '' ],
    long: [ 'I want to write and tell you how much I have loved this journey with your school! It has been of more value to me than I could have ever imagined! When I started the course I was scared. Now that I am nearing the finish line, I am scared to see it end. I absolutely love my tutor, Francie Thompson and the Novel course.' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0010': {
    name: 'Coralie Darsey-Malloy',
    courses: [ 'rm' ],
    provinceCode: undefined,
    short: [ 'In a short time you have helped me enhance my writing skills and develop the confidence to market my work. Thanks to the School, I no longer feel isolated in my writing goals. With my tutor’s direction and encouragement I now believe I am capable of becoming a successful, well-paid writer. The course material and personal interest have surpassed my wildest expectations. It was worth every cent and so much more. Thank you.' ],
    long: [ 'In a short time you have helped me enhance my writing skills and develop the confidence to market my work. Thanks to the School, I no longer feel isolated in my writing goals. With my tutor’s direction and encouragement I now believe I am capable of becoming a successful, well-paid writer. The course material and personal interest have surpassed my wildest expectations. It was worth every cent and so much more. Thank you.' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0011': {
    name: 'Lorraine Thompson',
    courses: [ 'ch' ],
    provinceCode: undefined,
    short: [ 'I am delighted with the School! All the people are supportive, course materials are superb, and my tutor is a published writer who responds to each of my assignments with professional insight and advice. I have just sold a feature article. The money was great and the personal gratification tremendous. The School has turned my dream into reality.' ],
    long: [ 'I am delighted with the School! All the people are supportive, course materials are superb, and my tutor is a published writer who responds to each of my assignments with professional insight and advice. I have just sold a feature article. The money was great and the personal gratification tremendous. The School has turned my dream into reality.' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0012': {
    name: 'Lance O’Hearn',
    courses: [ 'bc' ],
    provinceCode: undefined,
    short: [ 'I’m enclosing a copy of my first published article in MBS, for which I am pleased to say, I have already received their first payment. As I’m sure you can appreciate, it was quite a thrill to see my rambling thoughts typeset in a national trade magazine. MBS has asked me to turn it into a four-part series, which they intend to run this fall and winter. In addition, they accepted my suggestion for an article on gas fireplaces and I am presently developing it. So far, they’ve offered me between $1500 and $2000 for all these pieces. Overall, when I calculate the time it takes me to pump out these articles, I’m earning about $100 per hour!' ],
    long: [ 'I’m enclosing a copy of my first published article in MBS, for which I am pleased to say, I have already received their first payment. As I’m sure you can appreciate, it was quite a thrill to see my rambling thoughts typeset in a national trade magazine. MBS has asked me to turn it into a four-part series, which they intend to run this fall and winter. In addition, they accepted my suggestion for an article on gas fireplaces and I am presently developing it. So far, they’ve offered me between $1500 and $2000 for all these pieces. Overall, when I calculate the time it takes me to pump out these articles, I’m earning about $100 per hour!' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0013': {
    name: 'Ruth-Ann Campbell',
    courses: [ 'fh' ],
    provinceCode: undefined,
    short: [ 'The course offered exactly what I needed after a lifetime of setting aside my desire to write. To have published within a few months of commencing the course was a dream come true and it only happened because of the guidance from the lessons and the excellent help from my tutor.' ],
    long: [ 'The course offered exactly what I needed after a lifetime of setting aside my desire to write. To have published within a few months of commencing the course was a dream come true and it only happened because of the guidance from the lessons and the excellent help from my tutor.' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
  'TW-0014': {
    name: 'Helena Cowan',
    courses: [ 'fh' ],
    provinceCode: undefined,
    short: [ 'Thank you for my diploma of Family History. At age seventy-two and an immigrant, I proudly hang it on my wall. I enjoyed my course and the school handled it very professionally. My special thanks go to Mr. Michael Mirolla, an exceptional tutor and human being, who had had the patience to read and correct my manuscript. He professionally pointed out my writing faults and praised me for my merits. He is an excellent tutor and deserves recognition.' ],
    long: [ 'Thank you for my diploma of Family History. At age seventy-two and an immigrant, I proudly hang it on my wall. I enjoyed my course and the school handled it very professionally. My special thanks go to Mr. Michael Mirolla, an exceptional tutor and human being, who had had the patience to read and correct my manuscript. He professionally pointed out my writing faults and praised me for my merits. He is an excellent tutor and deserves recognition.' ],
    image: undefined,
    stars: 5,
    imagePositionX: undefined,
    imagePositionY: undefined,
  },
} as const satisfies Record<ID, Testimonial | undefined>;

export type TestimonialId = keyof typeof testimonials;
