import React, { createContext, useState } from 'react';

export const Web3AuthContext = createContext();

export const Web3AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  return (
    <Web3AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </Web3AuthContext.Provider>
  );
};
