// "use client";

// import axios from "axios";
import { NAV_LINKS } from "@ocmi/frontend/constants";
// import { useRouter } from "next/navigation";
import Link from "next/link";
// import { useEffect, useState } from "react";


export async function Navbar() {
    // const router = useRouter();



    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const res = await axios.post("/api/auth/logout");

    //     if (res.status === 200) {


    //     }
    // };

    return (
        <header >

            <nav>
                <ul className="bg-purple-500 m-6 p-12 rounded flex justify-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <li className="text-white" key={link.key}>
                            <Link href={link.href} key={link.key}>

                                {link.label}

                            </Link>
                        </li>
                    ))}
                    {/* <li className="text-white" onClick={handleSubmit}>Logout</li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;