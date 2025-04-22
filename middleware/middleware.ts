import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateKeyAndDecrementCredits } from '@/lib/api-utils';

/**
 * @description Next.js middleware to intercept requests to /api/items/*.
 * Validates the API key provided in the 'Authorization' or 'X-API-Key' header.
 * If the key is valid and the user has credits, it decrements the credits and adds the internal 'X-User-ID' header to the request before passing it on.
 * If validation fails or an error occurs, it returns an appropriate JSON error response.
 * If the request path doesn't match /api/items/*, it passes the request through without modification.
 * @param {NextRequest} request - The incoming Next.js request object.
 * @returns {Promise<NextResponse>} A promise that resolves to a Next.js response object (either the modified request passed on, or an error response).
 */
export async function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/api/items')) {
    return NextResponse.next();
  }
  const apiKeyHeader = request.headers.get('Authorization')?.split('Bearer ')[1] || request.headers.get('X-API-Key');

  if (!apiKeyHeader) {
    return NextResponse.json(
      { success: false, message: 'API Key header missing' }, 
      { status: 401 }
    );
  }

  try {
    const validationResult = await validateKeyAndDecrementCredits(apiKeyHeader);
    if (validationResult.error) {
      return NextResponse.json(
        { success: false, message: validationResult.error.message },
        { status: validationResult.error.status }
      );
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('X-User-ID', validationResult.user?.id || '');

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export const config = {
  matcher: '/api/items/:path*',
}; 