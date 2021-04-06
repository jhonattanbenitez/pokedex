import React, { useContext } from "react";
import Pokemon from "./Pokemon";

import { PokemonsContext } from "../context/PokemonsContext";

const PokemonList = () => {
  //extraer los pokemons
  const { results, query } = useContext(PokemonsContext);
  console.log(query);
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {query ? <Pokemon pokemon={results} /> : null}
    </div>
  );
};

export default PokemonList;
