import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'fr'];
const defaultLocale = 'en';

function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage && acceptLanguage.includes('fr')) {
        return 'fr';
    }
    return 'en';
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|pdf|.*\\..*).*)',
    ],
};
