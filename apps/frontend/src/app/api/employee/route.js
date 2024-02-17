import { NextResponse } from "next/server";
import axios, { all } from 'axios';


export async function GET(request) {

    try {
        const token = request.cookies.get("token");

        const config = {
            headers: { Authorization: `Bearer ${token.value}` }
        };

        const res = await axios.get('http://localhost:3001/api/employee/all', config);

        const employees = res.data;


        const response = NextResponse.json({
            employees,
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

export async function POST(request) {

    try {
        const token = request.cookies.get("token");
        const body = await request.json()

        const config = {
            headers: { Authorization: `Bearer ${token.value}` },

        };

        const res = await axios.post('http://localhost:3001/api/employee/create', body, config);


        const employee = res.data;


        const response = NextResponse.json({
            employee,
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