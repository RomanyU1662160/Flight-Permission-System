import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('cookies from middleware:::>>>', request.cookies);

  return NextResponse.next();
}

export const config = {
  matcher: '/(api|news.*)',
};
