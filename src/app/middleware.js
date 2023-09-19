'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/pages/dashboard', request.url);
    const urlRegister = new URL('/pages/dashboard/register', request.url);
    const urlAlter = new URL('/pages/dashboard/alter', request.url);

    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
    } 
        if (!isTokenValidated || !token) {
            if (request.nextUrl.pathname === '/pages/dashboard/register') {
                return NextResponse.redirect(urlRegister);
             
            }
    }

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard/alter') {
            return NextResponse.redirect(urlAlter);
         
        }
}
    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/dashboard/register', '/pages/dashboard/alter']
};

