import React, { useEffect, useState } from "react";

function Selecionados({ selecionados }) {
    const [ingredientes, setIngredientes] = useState(selecionados);
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const newIngredientes = [];

        for (let i = 0; i < selecionados.length && i < 3; i++) {
            const element = selecionados[i];
            newIngredientes.push(element);
        }

        setIngredientes(newIngredientes);

        setShowWarning(selecionados.length >= 3);
    }, [selecionados])

    return (
        <div>
            <h3>selecionados:</h3>
            <p>{ingredientes.join(' ')}</p>
            {showWarning && <h4>Número máximo de ingredientes atingido</h4>}
        </div>
    )
}

export default Selecionados;