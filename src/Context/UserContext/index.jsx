import React, { useState } from 'react'
import { createContext,useContext } from 'react'
import { initData } from '../../Component/Form';

const UserContext=createContext(null);

const UserContextProvider = ({children}) => {
    const [globalData,setGlobalData]=useState(initData);

  return (
    <UserContext.Provider value={{globalData,setGlobalData}}>
        {children}
    </UserContext.Provider>
  )
}

export const useUserContextConsumer=()=>{
    const context=useContext(UserContext);
    if(!context){
        console.log("UserContext not defined ")
    }
    return context;
}

export default UserContextProvider