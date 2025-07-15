import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protéger tout sauf ces routes (publicRoutes)
    /*
      Le matcher va appliquer le middleware sur toutes les routes
      sauf celles listées ici (accès public)
    */
    '/((?!_next|static|favicon.ico|sign-in|sign-up|contact|about|services|portfolio|shop).*)',
  ],
};
