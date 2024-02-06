import React from "react";

function App() {
  //               0 1 2 3 4 5 6 7 8 posição do array
  let numeros = [1,2,3,4,5,6,7,8,9];

  function clicou() {
    numeros = numeros.map((elemento) => {
      return elemento * 2;
    });

    console.log(numeros)
    // numeros.forEach((elemento, index) => {
    //   console.log(elemento + '-' + index)
    // });
  }

  return (
    <div>
      <h1>Hello world</h1>
      <h1>{numeros}</h1>      
      <button onClick={() => {clicou(false)}} >Clique aqui</button>
    </div>
  );
}

export default App;
