import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/api/items')) {
    return NextResponse.next();
  }
  const apiKeyHeader = request.headers.get('Authorization') || request.headers.get('X-API-Key');
  if (!apiKeyHeader) {
    return NextResponse.json({ message: 'API Key header missing' }, { status: 401 });
  }
  return NextResponse.next();
}
export const config = {
  matcher: '/api/items/:path*', 
}; 
