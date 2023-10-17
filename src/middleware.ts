import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/coming-soon', request.url))
}

export const config = {
  matcher: '/'
}