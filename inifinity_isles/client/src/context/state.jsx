/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

// Create the context
const NewContext = createContext();

// Create the provider component
export const NewProvider = ({ children }) => {
  const [cart, setCart] = useState({
    totalPrice: '',
    totalQuantity: '',
  });
  
  return (
    <NewContext.Provider value={[cart, setCart]}>
      {children}
    </NewContext.Provider>
  );
};

// Custom hook to use the NewContext
export const useNew = () => useContext(NewContext);
