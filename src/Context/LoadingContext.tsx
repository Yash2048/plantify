import {createContext, useState, ReactNode, useContext} from 'react';

const LoadingContext = createContext({
  isLoading: 0,
  setIsLoading: (value: number) => {},
});

export function LoadingProvider({children}: {children: ReactNode}) {
  const [isLoading, setIsLoading] = useState(0);

  return (
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      {children}
    </LoadingContext.Provider>
  );
}

//export hook
export const useLoading = () => useContext(LoadingContext);
