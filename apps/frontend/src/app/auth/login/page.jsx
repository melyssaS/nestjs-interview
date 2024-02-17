"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("/api/auth/login", credentials);

        if (res.status === 200) {
            router.push("/");
        }
    };

    return (
        <div className="w-80 rounded overflow-hidden shadow-lg shadow-bg-white m-6 text-black">
            <form onSubmit={handleSubmit} className="flex ">
                <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    type="email"
                    placeholder="email"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            email: e.target.value,
                        })
                    }
                />
                <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    type="password"
                    placeholder="password"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            password: e.target.value,
                        })
                    }
                />
                <div className="px-6 pt-4 pb-2">
                    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Send</button>
                </div>

            </form>
        </div>
    );
}

export default Login;