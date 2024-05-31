import { NextRequest, NextResponse } from "next/server";
import { createSupabaseMiddlewareClient } from "./supabase/middleware";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next({
    request: {
      headers: req.headers
    }
  });

  const supabase = createSupabaseMiddlewareClient({ req, res });

  const {
    data: { user }
  } = await supabase.auth.getUser();

  // If the user is authenticated, continue as normal
  if (user) {
    if (!req.nextUrl.pathname.startsWith("/home"))
      return NextResponse.redirect(new URL("/home", req.url));

    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/auth/signin", req.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|auth).*)"]
};
