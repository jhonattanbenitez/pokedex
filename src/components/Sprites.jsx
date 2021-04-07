import React from "react";

const Sprites = ({ sprites }) => {
  console.log(sprites);
  return (
    <div className="flex flex-col">
      <img
        src={sprites.other.dream_world.front_default}
        alt=""
        className="mb-7"
      />
      <div className="grid grid-cols-4 gap-4">
        <img src={sprites.front_default} alt="pokemon de espalda" />
        <img src={sprites.front_female} alt="pokemon femenino de espalda" />
        <img src={sprites.front_shiny} alt="pokemon femenino de espalda" />
        <img
          src={sprites.front_shiny_female}
          alt="pokemon femenino de espalda"
        />
        <img src={sprites.back_default} alt="pokemon de espalda" />
        <img src={sprites.back_female} alt="pokemon femenino de espalda" />
        <img src={sprites.back_shiny} alt="pokemon femenino de espalda" />
        <img
          src={sprites.back_shiny_female}
          alt="pokemon femenino de espalda"
        />
      </div>
    </div>
  );
};

export default Sprites;
