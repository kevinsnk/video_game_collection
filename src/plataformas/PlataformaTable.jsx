import React from "react";

const PlataformaTable = ({ plataforma }) => {
    return (
        <>
            <tr>
                <td>{plataforma.descripcion}</td>
                <td>{plataforma.estado}</td>
                <td>{plataforma.icono}</td>
            </tr>
        </>
    );
}

export default PlataformaTable;