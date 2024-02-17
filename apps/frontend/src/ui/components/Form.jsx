import { CLIENT_FORM, EMPLOYEE_FORM } from '@ocmi/frontend/constants';
import React, { useState, FormEvent } from 'react';


const Form = ({ addClient, type }) => {
    const [formValues, setFormValues] = useState({});
    const formStructure = [CLIENT_FORM, EMPLOYEE_FORM];


    const handleSubmit = (event) => {
        event.preventDefault();
        addClient(formValues);

    };

    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    return (
        <div className="min-w-80 rounded overflow-hidden shadow-lg bg-white p-5">
            <form onSubmit={handleSubmit} className="space-y-4">


                {formStructure[type].map((structure, index) => (
                    <div key={index}>
                        <label htmlFor="email" className="block text-black">{structure.label}</label>
                        <input
                            type={structure.type}
                            name={structure.key}
                            id={structure.key}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                            required
                        />

                    </div>
                ))}

                <button type="submit" className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Form;