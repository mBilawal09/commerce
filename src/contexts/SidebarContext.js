import React, { useState, useContext, createContext } from "react";

export const SidebarContext = createContext();
const SidebarProvider = ({ children }) => {
  const [Open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ Open, setOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
