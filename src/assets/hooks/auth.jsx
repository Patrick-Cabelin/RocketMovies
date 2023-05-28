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
            setData({user,token})
            localStorage.setItem('@rocketmuv:user',JSON.stringify({user}))
            localStorage.setItem('@rocketmuv:token',token)

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

        return response
    }

    function signOut(){
        localStorage.removeItem('@rocketmuv:user')
        localStorage.removeItem('@rocketmuv:token')

        setData({})
    }
    useEffect(()=>{
        const user = localStorage.getItem('@rocketmuv:user')
        const token = localStorage.getItem('@rocketmuv:token')

        setData({
            user: JSON.parse(user),
            token
        })
    },[])
    return(
        <AuthContext.Provider
        value={{
            signIn,
            signUp,
            signOut,
            user: data.user
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