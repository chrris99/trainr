import { NextRequest, NextResponse } from "next/server";
import { createSupabaseMiddlewareClient } from "./supabase/middleware";
import { redirect } from "next/navigation";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  const supabase = createSupabaseMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user && req.nextUrl.pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!user && req.nextUrl.pathname !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
