import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//crear context

export const TypesContext = createContext();

const TypesProvider = (props) => {
  //state del context
  const [types, setTypes] = useState([]);

  //ejecutar llamado  la api
  useEffect(() => {
    const getTypes = async () => {
      const url = `https://pokeapi.co/api/v2/type`;
      const type = await axios.get(url);
      setTypes(type.data.results);
    };
    getTypes();
  }, []);

  return (
    <TypesContext.Provider value={{ types }}>
      {props.children}
    </TypesContext.Provider>
  );
};

export default TypesProvider;
