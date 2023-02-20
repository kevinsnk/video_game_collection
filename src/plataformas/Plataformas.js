import React from "react";
import PlataformaTable from "./PlataformaTable";

import "./Plataformas.css"

const arrayPrueba = [
    {
        "descripcion": "Playstation 4",
        "estado": "A",
        "icono": "tt0094074"
    },
    {
        "descripcion": "Nintendo Switch",
        "estado": "A",
        "icono": "tt0094074"
    }
];


const Plataformas = () => {
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Icono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrayPrueba?.length > 0
                            ? (
                                <>
                                    {arrayPrueba.map((plataforma) => (
                                        <PlataformaTable plataforma={plataforma} />
                                    ))}
                                </>
                            ) : (
                                <tr>
                                    <th>No se encontraron datos</th>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Plataformas;