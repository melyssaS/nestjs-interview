import { CLIENT_CARD, EMPLOYEE_CARD } from '@ocmi/frontend/constants';
import React from 'react';


const Card = ({ props, type }) => {
    // const handleDelete = () => {
    //     // Lógica para manejar la acción de borrar
    //     console.log("Borrando cliente con ID:", props.id);
    // };

    const cardStructure = [CLIENT_CARD, EMPLOYEE_CARD];

    return (
        <div className="w-1/4 rounded overflow-hidden shadow-lg shadow-bg-white m-6 text-black">

            <div className="px-6 py-4">

                {cardStructure[type].map((structure, index) => (
                    <div key={index}>
                        {structure.label == 'title' ?
                            <div className="font-bold text-xl mb-2 text-purple-800 text-center">{props[structure.key]}</div>
                            :
                            <p className="text-gray-700 text-base" >
                                {structure.label}: <span className="text-black">{props[structure.key]}</span>
                            </p>}
                    </div>
                ))}
            </div>

            {/* <div className="px-6 pt-4 pb-2">
                <button onClick={handleDelete} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Editar
                </button>
            </div> */}
        </div>
    );
};

export default Card;