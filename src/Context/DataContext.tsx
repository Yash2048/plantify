import {createContext, useState, ReactNode, useContext} from 'react';

// Define types for JSON-compatible values
type JSONValue = string | number | boolean | JSONObject | JSONArray;
interface JSONObject {
  [key: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {}

// Define the context type using the JSONObject type
interface DataContextType {
  data: JSONObject | null;
  setData: React.Dispatch<React.SetStateAction<JSONObject | null>>;
}

// Create the context with a default value of null
const DataContext = createContext<DataContextType | null>(null);

// Provider component that holds the JSON data state
export function DataProvider({children}: {children: ReactNode}) {
  const [data, setData] = useState<JSONObject | null>(null);

  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  );
}

// Custom hook to use the DataContext with a runtime check
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
