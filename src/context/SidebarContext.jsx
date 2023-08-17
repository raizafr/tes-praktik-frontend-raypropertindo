import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function useSidebarContext() {
  return useContext(SidebarContext);
}

export function SidebarProvider({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const value = {
    isSidebarVisible,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}
