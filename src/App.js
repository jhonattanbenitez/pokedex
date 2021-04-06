import React, { Fragment } from "react";
import CardList from "./components/CardList";
import Formulario from "./components/Formulario";
import TypesProvider from "./context/TypesContext";
import PokemonsProvider from "./context/PokemonsContext";

function App() {
  return (
    <TypesProvider>
      <PokemonsProvider>
        <h1 className="text-center">Pokedex</h1>
        <Formulario />
        <CardList />
      </PokemonsProvider>
    </TypesProvider>
  );
}

export default App;
