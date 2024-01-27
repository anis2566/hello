import { authMiddleware, auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/(api|trpc)(.*)", "/api/webhooks(.*)"],
  afterAuth: (auth, req, evt) => {
    const role = auth.sessionClaims?.role;
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
    if (role !== "ADMIN" && isAdminRoute) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
