import React, { useState } from "react";

// function useState(valorInicial) {
//   let estado = valorInicial;

//   function setEstado(valorNuevo) {
//     estado = valorNuevo;
//   }
//   return [estado, setEstado];
// }

const Contador = () => {
  //   let contador = 0;
  //   console.log(useState("algo"));

  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };
  console.log(counter);
  return (
    <div>
      <button onClick={restar}>-</button>
      <h1>{counter}</h1>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default Contador;
