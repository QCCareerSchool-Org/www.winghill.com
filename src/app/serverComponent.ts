/* eslint-disable @typescript-eslint/ban-types */
import type { FC, ReactNode } from 'react';

interface PageProps {
  params: {};
  searchParams: Record<string, string | string[] | undefined>;
}

interface LayoutProps {
  children: ReactNode;
}

export type PageComponent = FC<PageProps>;

export type LayoutComponent = FC<LayoutProps>;
