"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Home() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        companyName: "",
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            email: e.target.value,
                        })
                    }
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            password: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="companyName"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            companyName: e.target.value,
                        })
                    }
                />
                <button>Save</button>
            </form>
        </div>
    );
}

export default Home;