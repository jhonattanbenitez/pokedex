import React, { Fragment } from "react";
import CardList from "./components/CardList";
import Formulario from "./components/Formulario";

function App() {
  return (
    <Fragment>
      <h1>Pokedex</h1>
      <Formulario />
      <CardList />
    </Fragment>
  );
}

export default App;
