// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/new-page', request.url));
// }
import middleware from 'next-auth/middleware';

export default middleware;

export const config = {
  //*: zero or more
  //+:one or more
  //?:zero or one

  matcher: ['/users/:id*'],
};
