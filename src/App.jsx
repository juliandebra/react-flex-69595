import { useState } from "react";
import "./App.css";
import Estudiante from "./components/Estudiante";
import Button from "./components/Button";
import Contador from "./components/Contador";

function App() {
  const [count, setCount] = useState(0);

  const save = () => {
    console.log("Elemento guardado");
  };
  const deleteElement = () => {
    console.log("Elemento eliminado");
  };

  return (
    <>
      <h1>Hola coders</h1>
      <Estudiante name="Pablo" status="En curso..." />
      <Estudiante name="Pedro" status="Finalizado" />
      <Estudiante name="Cristian" status="Pendiente" />
      <Estudiante name="Elías" status="En curso..." />

      <Button color="green" text="Save" onClick={save} />
      <Button color="red" text="Delete" onClick={deleteElement} />
      <Button color="blue" text="Info" onClick={() => alert("Mi info: ...")} />
      <Contador />
    </>
  );
}

export default App;
