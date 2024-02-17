import { NextResponse } from "next/server";
import axios from 'axios';


export async function POST(request) {

    try {
        const token = request.cookies.get("token");
        const body = await request.json()

        const config = {
            headers: { Authorization: `Bearer ${token.value}` },

        };
        console.log(body)
        const res = await axios.post('http://localhost:3001/api/auth/register', body, config);

        const client = res.data;

        const response = NextResponse.json({
            client,
        });

        return response

    } catch (error) {

        // const { message, statusCode } = error.response.data
        // return NextResponse.json(
        //     {
        //         message:message,
        //     },
        //     {
        //         status: statusCode,
        //     }
        // );
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