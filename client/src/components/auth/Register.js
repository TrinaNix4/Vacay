import { useState, useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = useContext(AuthContext)
  //not needed but nice for UX
  //const [confirmPassword, setConfirmPassword] = useState('')
  
  
  //use Context (auth) to grab handleRegister 
  //and pass it
  //the user info 
  const handleSubmit = (e) => {
    e.preventDefault()
    //with devise_token_auth there are backend validations
    //email must be valid email and unique 
    //password must be 6 or greater characters 
    auth.handleRegister({email, password})
  }
  
  return (
    <div>
    {/* form with 2 inputs with handleSubmit 
    to prevent the default */}
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <p>Password</p>
        <input value={password} onChange={(e)=> setPassword(e.target.value)}/> 
      <button>Register</button>
      </form>
    </div>
  )
}

export default Register 