import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//create context from react 
//createContext => {Consumer, Provider}
//a way to 'consume' data and a way to 'provide' data
//Hooks:  useContext (Context) a new and improved way to 'consume data'


//Hooks:  useContext (Context) a new and improved way to 'consume data'
export const AuthContext = React.createContext()
//another way to get the data
 export const AuthConsumer = AuthContext.Consumer



//create Provider 
//create a user object in stsate; null user is a not auth user (not logged in)
//if i have a user, they will be authenticated 
const AuthProvider = ({children})=> {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate()



    //register
  //called on submit on a register page; expects to be given a user
  //no token needed from user; 
   const handleRegister = async (user) => {
    try{          //check routes look for 'registrations create a new registration' 
       let res = await axios.post('/api/auth', user)
       //res.data.data is the 'user' 
       //behind the scenes, there is also a token being 
       ///sent back here that devise-axios 
       //is keeping track of 
       setUser(res.data.data)
        //once logged in, just take them to the homepage '/'
       navigate ('/')
    }catch(err){
      //potentially a lot of work here to let the user know
      //exactly what error is occurring 
    alert('error: unable to register.')
    console.log(err)
   }
   }
const handleLogin = async (user) => {
  console.log('going to login user in handleLogin:', user)  
  try{          //check routes look for 'registrations create a new registration' 
       
    //this call will give us back user from DB
    //assuming email and pw are correct 
    let res = await axios.post('/api/auth/sign_in', user)
       setUser(res.data.data)
        //once logged in, just take them to the homepage '/'
       navigate ('/')
    }catch(err){
    alert('error:unable to login. ')
    console.log(err)
   }
   }

   const handleLogout = async () => {
  console.log('going to logout user in handleLogout:')  
  try{          //check routes look for 'registrations create a new registration' 
       
    //need to send token: done with help initmiddleware
    //token is what will be used to find the user

    let res = await axios.delete('/api/auth/sign_out')
    //user not logged in is null  
    //signing out so no token given back; destroy the token
    //that's how a user is signed out   
    setUser(null)
        //once logged in, just take them to the homepage '/'
       navigate ('/')
    }catch(err){
    alert('error:unable to logout. did you send the token? ')
    console.log(err)
   }
   }
  
  return(         //no longer hard code this (e.g.{user:{email:'test@test.com'}})
    <AuthContext.Provider value={{user, setUser, handleRegister, handleLogin, handleLogout}}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider; 