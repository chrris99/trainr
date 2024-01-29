import { Database } from "@/database.types";
import { CookieOptions, createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

export const createSupabaseMiddlewareClient = ({
  req,
  res
}: {
  req: NextRequest;
  res: NextResponse;
}) =>
  createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          req.cookies.set({
            name,
            value,
            ...options
          });
          res = NextResponse.next({
            request: {
              headers: req.headers
            }
          });
          res.cookies.set({
            name,
            value,
            ...options
          });
        },
        remove(name: string, options: CookieOptions) {
          req.cookies.set({
            name,
            value: "",
            ...options
          });
          res = NextResponse.next({
            request: {
              headers: req.headers
            }
          });
          res.cookies.set({
            name,
            value: "",
            ...options
          });
        }
      }
    }
  );
