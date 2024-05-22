import { authMiddleware } from "@clerk/nextjs";

// Specify the routes that should be considered public
const publicRoutes = ["/","/course","/course/(.*)","/admin",'/admin/(.*)',"/cart","/profile"]


export default authMiddleware({
  publicRoutes,
});

export const config = {
  // Define the matcher for the routes
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
