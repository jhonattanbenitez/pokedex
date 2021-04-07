import React from "react";
import Type from "./Type";
import Sprites from "./Sprites";

const Pokemon = ({ pokemon }) => {
  /* const name = pokemon.forms[0].name; */
  const { name, types, sprites } = pokemon;
  console.log(pokemon);

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {name ? name.toUpperCase() : []}
        </div>

        {sprites ? <Sprites sprites={sprites} /> : []}
      </div>
      <div className="px-6 pt-4 pb-2">
        {types
          ? types.map((type) => <Type key={type.slot} type={type.type.name} />)
          : []}
      </div>
    </div>
  );
};

export default Pokemon;
