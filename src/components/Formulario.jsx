import React, { useContext, useState } from "react";
import { TypesContext } from "../context/TypesContext";
import { PokemonsContext } from "../context/PokemonsContext";

const Formulario = () => {
  const [search, setSearch] = useState({
    pokemon: "",
    type: "",
  });

  // función para leer el pokemon o el tipo

  const getDataSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const { types } = useContext(TypesContext);

  const { searchPokemon, setQuery } = useContext(PokemonsContext);

  return (
    <form
      className=""
      onSubmit={(e) => {
        e.preventDefault();
        searchPokemon(search);
        setQuery(true);
      }}
    >
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="w-auto">
          <input
            type="text"
            name="pokemon"
            placeholder="Buscar pokemon por nombre"
            className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            onChange={getDataSearch}
          />
        </div>
        <div className="w-full">
          <select
            name="type"
            id=""
            className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            onChange={getDataSearch}
          >
            <option value="">--Selecciona Tipo--</option>
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Buscar"
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
