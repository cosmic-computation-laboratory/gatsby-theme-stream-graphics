import React, { useContext } from "react";

const DebugContext = React.createContext({});

export const useDebug = () => useContext(DebugContext);

export const DebugProvider = ({ debug = false, children }) => (
  <DebugContext.Provider value={debug}>{children}</DebugContext.Provider>
);
