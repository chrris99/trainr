import { NextRequest, NextResponse } from "next/server";
import { createSupabaseMiddlewareClient } from "./lib/supabase/middleware";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  const supabase = createSupabaseMiddlewareClient({ req, res });

  await supabase.auth.getUser();

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
