/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */

import { createContext, useContext, useState } from "react";

const newContext = createContext()

export const Newprovider = ({ children }) => {
  const [id, setId] = useState('')
    return (
        <newContext.Provider value={[id, setId]}>
            {children}
        </newContext.Provider>
    )
}

export const useNew = () => useContext(newContext)