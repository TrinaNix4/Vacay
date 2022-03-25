import React, { useState } from 'react'
import axios from 'axios'

//create context from react 
//createContext => {Consumer, Provider}
//a way to 'consume' data and a way to 'provide' data
//Hooks:  useContext (Context) a new and improved way to 'consume data'


//Hooks:  useContext (Context) a new and improved way to 'consume data'
export const AuthContext = React.createContext()

//another way to get the data
const AuthConsumer = AuthContext.Consumer

//create Provider 
//create a user object in stsate; null user is a not auth user (not logged in)
//if i have a user, they will be authenticated 
const AuthProvider = ({children})=> {
  const [user, setUser] = useState(null); 


    //register
  //called on submit on a register page; expects to be given a user
  const handleRegister = async (user) => {
    try{          //check routes look for 'registrations create a new registration' 
        let res = await axios.post('/api/auth', user)
        console.log(res)
    }catch(err){
    alert('error')
    console.log(err)
  }
  }

  return(         //no longer hard code this (e.g.{user:{email:'test@test.com'}})
    <AuthContext.Provider value={{user, handleRegister}}>
    {children}

    </AuthContext.Provider>
  )
}

export default AuthProvider; 