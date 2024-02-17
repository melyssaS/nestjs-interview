"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@ocmi/frontend/ui/components/Card";
import Form from "@ocmi/frontend/ui/components/Form";


function Employee() {
    const [employees, setEmployees] = useState([]);


    const loadEmployees = async () => {

        const res = await axios.get("/api/employee");
        if (res.status === 200) {
            setEmployees(res.data.employees);
        }
    };



    const addEmployee = async (employee) => {

        // const res = await axios.post("/api/employee", { ...employee, payAmount: parseFloat(employee.payAmount) });
        // if (res.status === 200) {
        //     employees.push(res.data.employee);
        //     setEmployees([...employees]);
        // }
    }

    useEffect(() => {
        loadEmployees();
    }, [])

    return (
        <div >
            <div className="flex justify-center">
                <Form addClient={addEmployee} type={1} />
            </div>
            <div className="flex space-x-8" >
                {employees.map((employee, index) => (
                    <Card props={employee} type={1} key={index} />

                ))}
            </div>
        </div>
    );
}

export default Employee;