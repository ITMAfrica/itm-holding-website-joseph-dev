import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from './i18n-config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { CODE, TALENTPRO_HREF } from './helpers';

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const countryTag = request.cookies.get('country');
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );
  function getHref(lang: string = 'en') {
    const href: string = pathname;
    const CURRENT_CODE = request.cookies.get('country');
    const current = href.split('/')[3];
    if (CURRENT_CODE && CURRENT_CODE.value != CODE && current != undefined) {
      return `/${lang}/${CURRENT_CODE.value}/${current}`;
    } else if (CURRENT_CODE && CURRENT_CODE.value != CODE) {
      return `/${lang}/${CURRENT_CODE.value}`;
    } else {
      return `/${lang}`;
    }
  }

  // Redirect if there is no locale
  if (countryTag && pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(getHref(locale), request.url));
  } else if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|manifest.webmanifest|site.webmanifest).*)'],
};
