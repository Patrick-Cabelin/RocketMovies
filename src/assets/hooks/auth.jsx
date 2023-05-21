import {useContext, createContext, useEffect, useState} from 'react'

import {api} from '../../services/api'

const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData]= useState({})

    async function signIn({email, password}){
        try {
            const response = await api.post('/auth',{email, password})
            const {user, token} = response.data            
            
          api.defaults.headers.common['authorization']= `bearer ${token}` ,setData({user, token})
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert('Error inesperado')
            }
        }
    }

    async function signUp({name, email, password}){
        const response = await api.post('/user',{name,email, password})
    }
    return(
        <AuthContext.Provider
        value={{
            signIn,
            signUp
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {useAuth, AuthProvider}