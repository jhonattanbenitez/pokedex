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
        await axios
          .get(url)
          .then((response) => setResults(response.data))
          .catch((error) => console.log(error));

        console.log(type);
      };
      getPokemon();
    }
  }, [search]);
  return (
    <PokemonsContext.Provider
      value={{
        results,
        query,
        searchPokemon,
        setQuery,
      }}
    >
      {props.children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProviders;
