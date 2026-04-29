export const courseCodes = [ 'ws', 'nv', 'ch', 'rm', 'fh', 'bc', 'sc' ] as const;

export type CourseCode = typeof courseCodes[number];

const courseCodeSet = new Set<CourseCode>(courseCodes);

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && courseCodeSet.has(obj as CourseCode);
};

export const getCourseName = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'ws':
      return 'Creative Writing';
    case 'nv':
      return 'Novel Writing';
    case 'ch':
      return 'Writing for Children';
    case 'rm':
      return 'Romance Writing';
    case 'fh':
      return 'Memoir Writing';
    case 'bc':
      return 'Business Communications';
    case 'sc':
      return 'Screenwriting';
  }
};
