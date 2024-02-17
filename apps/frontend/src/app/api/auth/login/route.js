import { NextResponse } from "next/server";
import axios from 'axios';


export async function POST(request) {

  try {
    const body = await request.json()

    const res = await axios.post('http://localhost:3001/api/auth/login', body);

    const { token } = res.data;

    const response = NextResponse.json({
      token,
    });

    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });

    return response;

  } catch (error) {

    return NextResponse.json(
      {
        message: "Invalid credentials",
      },
      {
        status: 401,
      }
    );
  }
}