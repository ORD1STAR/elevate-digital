import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fr', 'ar'],
  defaultLocale: 'en'
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files (_next, vercel, etc.)
  // - Files with extensions (e.g. favicon.ico, logo.jpg)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
