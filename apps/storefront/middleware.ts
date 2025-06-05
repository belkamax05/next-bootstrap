import customHeaders from '@/utils/constants/app/customHeaders';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set(customHeaders.currentPath, request.nextUrl.pathname);

  return NextResponse.next({ headers });
}

export const config = {
  matcher: ['/((?!api|_next/.*|favicon.ico).*)'],
};
