import type { CourseCode } from './courseCode';

interface CourseData {
  name: string;
  url: string;
  description: string;
  certification: string | undefined;
  subjects: string[] | undefined;
  workload: string | undefined;
}

const baseUrl = process.env.HOST ?? '';

export const dataMap: Readonly<Record<CourseCode, CourseData>> = {
  ws: {
    name: 'Creative Writing',
    url: `${baseUrl}/online-writing-courses/creative-writing`,
    description: '',
    certification: undefined,
    subjects: undefined,
    workload: undefined,
  },
  nv: {
    name: 'Novel Writing',
    url: `${baseUrl}/online-writing-courses/novel-writing`,
    description: '',
    certification: undefined,
    subjects: undefined,
    workload: undefined,
  },
  ch: {
    name: 'Writing for Children',
    url: `${baseUrl}/online-writing-courses/writing-for-children`,
    description: '',
    certification: undefined,
    subjects: undefined,
    workload: undefined,
  },
  rm: {
    name: 'Romance Writing',
    url: `${baseUrl}/online-writing-courses/romance-writing`,
    description: '',
    certification: undefined,
    subjects: undefined,
    workload: undefined,
  },
  fh: {
    name: 'Memoir Writing',
    url: `${baseUrl}/online-writing-courses/memoir-writing`,
    description: '',
    certification: undefined,
    subjects: undefined,
    workload: undefined,
  },
  bc: {
    name: 'Business Communications',
    url: `${baseUrl}/online-writing-courses/creative-writing`,
    description: '',
    certification: undefined,
    subjects: undefined,
    workload: undefined,
  },
  sc: {
    name: 'Screenwriting',
    url: `${baseUrl}/online-writing-courses/screenwriting`,
    description: '',
    certification: undefined,
    subjects: undefined,
    workload: undefined,
  },
};
