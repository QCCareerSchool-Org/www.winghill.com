'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

export const OutlineLink: FC = () => {
  const pathname = usePathname();

  return <Link href={`${pathname}/course-outline`} className="btn btn-primary">Learn More</Link>;
};
