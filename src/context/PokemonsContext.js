import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokemonsContext = createContext();

const PokemonsProviders = (props) => {
  const [results, setResults] = useState([]);
  const [search, searchPokemon] = useState({ pokemon: "", type: "" });

  const { pokemon, type } = search;

  const [query, setQuery] = useState(false);

  useEffect(() => {
    if (query) {
      const getPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const resultado = await axios.get(url);
        /* console.log(resultado.data); */
        setResults(resultado.data);
      };
      getPokemon();
    }
  }, [search]);
  return (
    <PokemonsContext.Provider
      value={{
        results,
        searchPokemon,
        setQuery,
        query,
      }}
    >
      {props.children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProviders;
