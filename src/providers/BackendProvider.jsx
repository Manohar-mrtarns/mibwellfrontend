import { createContext, useState } from "react";


export const BackendContext = createContext();

const BackEndContext = ({children}) => {
    const [token,setToken] = useState("")

    

    const onHandleToStoreTokenInLS = (value) => {
        localStorage.setItem("token",value)
        setToken(token)
    }
    return (
        <BackendContext.Provider value={{onHandleToStoreTokenInLS}}>
            {children}
        </BackendContext.Provider>
    )
}

export default BackEndContext