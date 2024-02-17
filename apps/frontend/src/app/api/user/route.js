import { NextResponse } from "next/server";
import axios from 'axios';


export async function GET(request) {

    try {
        const token = request.cookies.get("token");

        const config = {
            headers: { Authorization: `Bearer ${token.value}` }
        };

        const res = await axios.get('http://localhost:3001/api/user/clients', config);

        const clients = res.data;


        const response = NextResponse.json({
            clients,
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