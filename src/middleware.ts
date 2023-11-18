// middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

// paths that require authentication or authorization
const requireAuth: string[] = ['/dashboard/','/clientOrder/' ,'/add-order/'];
const notRequired: string[] = ['/login','/sign-up',"/about-us","/services","/leadgen","/email-marketing","/power-point-presentation","/blog","/portfolio","/testimonial","/contact"];

export async function middleware(request: NextRequest) {
    const res = NextResponse.next();
    const pathname = request.nextUrl.pathname;
 
    if (notRequired.some((path) => pathname.startsWith(path))) {
     
        return res;
    }
    if (requireAuth.some((path) => pathname.startsWith(path))) {
        // const session = await getSession();
      
        const token = await getToken({
            req: request,
            secret: process.env.NEXTAUTH_SECRET,
        });
        //check not logged in
     
        if (!token) {
            const url = new URL(`/login`, request.url);
            url.searchParams.set('callbackUrl', encodeURI(request.url));
            return NextResponse.redirect(url);
        }
        // if (token) {
        //     const branch_id = token?.details?.user?.branch;
        //     return NextResponse.redirect(new URL(`/branch/${branch_id}`, request.url));
        // }
        //check if not authorized
        // if (token.role !== 'admin') {
        //     const url = new URL(`/403`, request.url);
        //     return NextResponse.rewrite(url);
        // }
    }
    return res;
}
