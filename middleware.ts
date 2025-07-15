// middleware.ts
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Don't redirect the coming-soon page itself to avoid an infinite loop
  if (url.pathname === "/coming-soon" || url.pathname === "/landingPage") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: "/((?!_next|favicon.ico|coming-soon).*)", // Match everything except coming-soon, _next and favicon
};
