import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';


 const LoadingContext = createContext();

 export const LoadingStateContext = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};


export const useLoadingStateContext = () => useContext(LoadingContext);
