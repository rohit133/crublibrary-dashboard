import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateKeyAndDecrementCredits } from '@/lib/api-utils';

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