import React from "react";
import PokemonList from "./components/PokemonList";
import Formulario from "./components/Formulario";
import TypesProvider from "./context/TypesContext";
import PokemonsProvider from "./context/PokemonsContext";

function App() {
  return (
    <TypesProvider>
      <PokemonsProvider>
        <h1 className="text-center">Pokedex</h1>
        <Formulario />
        <PokemonList />
      </PokemonsProvider>
    </TypesProvider>
  );
}

export default App;
