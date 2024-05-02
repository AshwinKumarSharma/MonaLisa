import React, { useContext, useState } from "react";
import NavbarTwo from "./NavbarTwo";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      {/* <SidebarHoverContextProvider> */}
      <Sidebar />
      <NavbarTwo />
      {children}
      {/* </SidebarHoverContextProvider> */}
    </>
  );
};

export default Layout;
