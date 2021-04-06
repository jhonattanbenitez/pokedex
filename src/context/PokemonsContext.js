import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokemonsContext = createContext();

const PokemonsProviders = (props) => {
  const [search, searchPokemon] = useState({ pokemon: "", type: "" });
  const [result, setResult] = useState([]);

  const { pokemon, type } = search;

  const [query, setQuery] = useState(false);

  useEffect(() => {
    if (query) {
      const getPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const resultado = await axios.get(url);
        /* console.log(resultado.data); */
        setResult(resultado.data);
      };
      getPokemon();
    }
  }, [search]);
  return (
    <PokemonsContext.Provider
      value={{
        searchPokemon,
        setQuery,
      }}
    >
      {props.children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProviders;
