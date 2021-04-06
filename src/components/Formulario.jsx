import React from "react";

const Formulario = () => {
  return (
    <form className="w-full m-5">
      <div className="grid grid-cols-3 gap-6">
        <div className="">
          <input
            type="text"
            name="pokemon"
            placeholder="Buscar pokemon por nombre"
          />
        </div>
        <div>
          <select name="types" id="" className="px-4 py-3 rounded-full">
            <option value="">--Selecciona Tipo--</option>
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
