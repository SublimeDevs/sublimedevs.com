import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AUTH_ROUTES = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];
const ONBOARDING_ROLE_PATH = "/onboarding/role";

type SessionUser = {
  id?: string;
  onboardingCompleted?: boolean | null;
  [key: string]: unknown;
};

type SessionData = {
  user?: SessionUser;
  session?: unknown;
  [key: string]: unknown;
};

async function getSession(request: NextRequest): Promise<SessionData | null> {
  const url = new URL("/api/auth/get-session", request.url);
  const cookie = request.headers.get("cookie") ?? "";
  try {
    const res = await fetch(url.toString(), {
      headers: { cookie },
      cache: "no-store",
    });
    const data = (await res.json()) as {
      data?: SessionData;
      user?: SessionUser;
    } & SessionData;
    const session =
      data?.data ??
      (data?.user ? { user: data.user, session: data.session } : data);
    return session?.user ? (session as SessionData) : null;
  } catch {
    return null;
  }
}

function isPublicPath(pathname: string): boolean {
  if (pathname === "/") return true;
  if (AUTH_ROUTES.some((r) => pathname === r || pathname.startsWith(r + "/")))
    return true;
  if (
    pathname === ONBOARDING_ROLE_PATH ||
    pathname.startsWith(ONBOARDING_ROLE_PATH + "/")
  )
    return true;
  return false;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session = await getSession(request);
  const user = session?.user;

  if (AUTH_ROUTES.some((r) => pathname === r)) {
    if (user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (
    pathname === ONBOARDING_ROLE_PATH ||
    pathname.startsWith(ONBOARDING_ROLE_PATH + "/")
  ) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (user.onboardingCompleted === true) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (user && user.onboardingCompleted !== true) {
    return NextResponse.redirect(new URL(ONBOARDING_ROLE_PATH, request.url));
  }

  if (!user && !isPublicPath(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
