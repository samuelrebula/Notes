import React, { useState } from "react";
import Selecionados from "./Components/Selecionados";

function App() {
  const[ingredientes, setIngredientes] = useState([]);

  function handleInputChange(e) {
    const value = e.target.value;

    const newIngredientes = [...ingredientes];
    const index = ingredientes.indexOf(value);

    if(index === -1) newIngredientes.push(value);
    else newIngredientes.splice(index, 1);

    setIngredientes(newIngredientes);
  }

  return (
    <div>
      <h1>ingredientes</h1>

      <input
        id="Pepperoni"
        type="checkbox"
        value="Pepperoni"
        onChange={handleInputChange}
      />
      <label htmlFor="Pepperoni">Pepperoni</label>
      <br />
      <input
        id="Queijo"
        type="checkbox"
        value="Queijo"
        onChange={handleInputChange}
      />
      <label htmlFor="Queijo">Queijo</label>
      <br />
      <input
        id="Molho"
        type="checkbox"
        value="Molho"
        onChange={handleInputChange}
      />
      <label htmlFor="Molho">Molho</label>
      <br />
      <input
        id="Tomate"
        type="checkbox"
        value="Tomate"
        onChange={handleInputChange}
      />
      <label htmlFor="Tomate">Tomate</label>
      <br />
      <Selecionados selecionados={ingredientes} />
    </div>
  );
}

export default App;
