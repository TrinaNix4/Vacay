import { useState, useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Button from "react-bootstrap/Button"

const Login = () => {
  const [email, setEmail] = useState('test2@test.com')
  const [password, setPassword] = useState('123456')
  const auth = useContext(AuthContext)
  //not needed but nice for UX
  //const [confirmPassword, setConfirmPassword] = useState('')
  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    auth.handleLogin({email, password})
  }
  
  return (
    <div>
    {/* form with 2 inputs with handleSubmit 
    to prevent the default */}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p></p>
        <input placeholder= "Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <p></p>
        <input placeholder= "Password" value={password} onChange={(e)=> setPassword(e.target.value)}/> 
      <br></br>
      <Button onClick={handleSubmit} className="btn-spacing" size="sm" variant="dark">Login</Button>
      </form>
    </div>
  )
}

export default Login 