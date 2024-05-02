import React, { useContext, useState } from "react";

import { createContext } from "react";

export const GenerativeData = createContext();

export const useGenerativeContext = () => useContext(GenerativeData);

const GenerativeDataContextProvider = ({ children }) => {
  const [genData, setGenData] = useState(null);
  return (
    <GenerativeData.Provider value={{ genData, setGenData }}>
      {children}
    </GenerativeData.Provider>
  );
};

export default GenerativeDataContextProvider;
