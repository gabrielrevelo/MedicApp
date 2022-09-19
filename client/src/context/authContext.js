//Toda la logica de autenticasion del usuario:
import {createContext, useCallback, useContext, useMemo, useState} from 'react';
import PropTypes from 'prop-types'
export const AuthContext = createContext();

//funcion autenticadora:
export function AuthContextProvider({children}){
    const [isAuth, setAuth] = useState(window.localStorage.getItem('isAuth')) ?? false

    const login = useCallback(()=>{
        window.localStorage.setItem('session', true);
        setAuth(true);
    },[])//no se pasan dependencias para que solo se cree una vez que se llama

    const logout = useCallback(()=>{
        window.localStorage.clear();
        window.localStorage.clear()
        setAuth(false)
    },[])//no se pasan dependencias para que solo se cree una vez que se llama

    const value = useMemo(()=>({
        login,
        logout,
        isAuth,
    }),[login, logout, isAuth])// se pasan dependencias para cada vez que cambien se renderice el componente que lo llamo, el unico que cambiara sera el isAuth

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>//le damos este contexto a todos sus hijos
}
 
AuthContextProvider.propTypes={
    children: PropTypes.object
} //prototypamos nuestras props

//creamos el contexto: retornando el contexto creado anteriormente

export function useAuthContext() {
    return useContext(AuthContext)
}