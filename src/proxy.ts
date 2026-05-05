import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const proxy = (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);

  const now = Date.now();
  requestHeaders.set('x-current-date', now.toString());

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};
