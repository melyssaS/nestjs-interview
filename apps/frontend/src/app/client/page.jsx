"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@ocmi/frontend/ui/components/Card";
import Form from "@ocmi/frontend/ui/components/Form";


function Client() {
    const [clients, setClients] = useState([]);
    const router = useRouter();

    const loadClients = async () => {

        const res = await axios.get("/api/user");

        if (res.status === 200) {
            setClients(res.data.clients);
        }
    };

    const addClient = async (client) => {
        console.log(client)
        const res = await axios.post("/api/auth/register", client);
        if (res.status === 200) {
            clients.push(res.data.client);
            setClients([...clients]);
        } else {
            console.log(res.message)
        }

    }

    useEffect(() => {
        loadClients();
    }, [])

    return (
        <div >
            <div className="flex justify-center">
                <Form addClient={addClient} type={0} />
            </div>
            <div className="flex space-x-8" >
                {clients.map((client) => (
                    <Card props={client} type={0} key={client.id} />
                ))}
            </div>
        </div>
    );
}

export default Client;