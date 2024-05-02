import React, { useContext, useState } from "react";

import { createContext } from "react";

export const SidebarHoverContext = createContext();

export const useSidebarHoverContext = () => useContext(SidebarHoverContext);

const SidebarHoverContextProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [product, setProduct] = useState("Research");
  return (
    <SidebarHoverContext.Provider
      value={{ isHovered, setIsHovered, product, setProduct }}
    >
      {children}
    </SidebarHoverContext.Provider>
  );
};

export default SidebarHoverContextProvider;
