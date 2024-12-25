import React, { useState, createContext } from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function UserProvider({ children }) {
    const [isUserLoggedIn, setIsuserLoggedIn] = useState<Boolean>(false);
  
    return (
      <UserContext.Provider value={isUserLoggedIn}>
        <UserDispatchContext.Provider value={setIsuserLoggedIn}>
          {children}
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    );
  }
  
  export { UserProvider, UserContext, UserDispatchContext };