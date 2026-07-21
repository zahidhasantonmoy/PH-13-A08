import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request) {
  const sessionCookie = getSessionCookie(request);
  const pathname = request.nextUrl.pathname;

  const protectedRoutes = ["/my-profile", "/tile"];
  let isProtected = false;

  for (let i = 0; i < protectedRoutes.length; i++) {
    if (pathname.startsWith(protectedRoutes[i])) {
      isProtected = true;
    }
  }

  if (isProtected && !sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-profile/:path*", "/tile/:path*"],
};
