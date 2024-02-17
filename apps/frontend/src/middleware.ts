import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
    const jwt = request.cookies.get("token");
    if (!jwt) return NextResponse.redirect(new URL('auth/login', request.url));
    try {
        const { payload } = await jwtVerify(
            jwt.value,
            new TextEncoder().encode("test")
        );
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL('auth/login', request.url));
    }
}

export const config = {
    matcher: ['/timesheet', '/employee', '/client'],
};