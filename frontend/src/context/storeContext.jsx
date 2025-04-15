import { createContext } from "react";
import { food_list } from "../assets/assets";

export const storeContext = createContext(null);

const storeContextProvider = (props) => {
  const contextValue = {};
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default storeContextProvider;
