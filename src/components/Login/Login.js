import React , {useState} from 'react'
import './login.css'
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../../global/firebaseCofig'

function Login() {

  let navigate = useNavigate()


  const [email, setEmail ] = useState(' ')
  const [password, setPassword ] = useState(' ')
  const [error, setError ] = useState(' ')
    
  const handleLogin = (e) => {
    e.preventDefault()
    //console.log(email, password);
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      setEmail('')
      setPassword(' ')
      setError(' ')
      navigate('/homepage')
    })
    .catch((err => setError(err.message) ))
  }

  
  return (
    
        
            
            <form  onSubmit = {handleLogin} autoComplete = 'off'>
                <div className='form-inner'>
                  <h2>Login</h2>
                  <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <br />
                <input type = 'email' placeholder = 'xyz@domain.com' required
                 onChange={(e) => setEmail(e.target.value) } value = {email}
                />
                </div>

                <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <br />
                <input type = 'password' placeholder = 'Enter password' required
                 onChange={(e) => setPassword(e.target.value) } value = {password}
                />
                </div>
                <button type = 'submit' >LOGIN</button>

                <p>Don't have an account ?
                   <Link to = '/registration'>Create Account</Link>
                </p>
                {error && <span>{error}</span>}
                </div>
            </form>
        
       

    
  )
}

export default Login
