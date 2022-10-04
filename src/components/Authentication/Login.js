import React , {useState} from 'react'
import './login.css'
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../../global/firebaseCofig'
import { Card, Button, TextField, CardHeader, CardActions } from '@mui/material'
import Header from '../header'
import { blue } from '@mui/material/colors'
import {InputAdornment} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {IconButton} from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Login() {

  let navigate = useNavigate()


  const [email, setEmail ] = useState(' ')
  const [password, setPassword ] = useState(' ')
  const [error, setError ] = useState(' ')

  const [showPassword, setShowPassword] = useState(false)
    
  const handleLogin = (e) => {
    e.preventDefault()
    //console.log(email, password);
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      setEmail('')
      setPassword('')
      setError('')
      navigate('/homepage')
    })
    .catch((err => setError(err.message) ))
  }

  
  return (


    <>

    <Header></Header>

            <form  onSubmit = {handleLogin}>

              <Card sx={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "25px", backgroundColor: blue[100], display: "flex", flexDirection: "column", gap:"10px", padding: "45px"}}>

            <CardHeader
            title="Log In"
            
            />

              <TextField variant='outlined' label="email" onChange={(e) => setEmail(e.target.value)}></TextField>
              <TextField variant='outlined' label="password" type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="start">
                                {!showPassword ? <IconButton onClick={() => setShowPassword(true)}><VisibilityIcon></VisibilityIcon></IconButton> : <IconButton onClick={() => setShowPassword(false)}><VisibilityOffIcon></VisibilityOffIcon></IconButton>}
                            </InputAdornment>,
                          }}
              ></TextField>
              <Button variant="contained" color="info" type="submit">Login</Button>

                <p>Don't have an account? <Link to = '/registration'>Create Account</Link></p>
              </Card>



            </form>
    
    </>
        
        
       

    
  )
}

export default Login






{/* <Card>
<h2>Login</h2>
<div className='form-group'>
<label htmlFor='email'>Email:</label>
<br />
<TextField type = 'email' placeholder = 'xyz@domain.com' required
onChange={(e) => setEmail(e.target.value) } value = {email}
/>
</div>
<div className='form-group'>
<label htmlFor='password'>Password:</label>
<br />
<TextField type = 'password' placeholder = 'Enter password' required
onChange={(e) => setPassword(e.target.value) } value = {password}
/>
</div>
<button type = 'submit' >LOGIN</button>
<p>Don't have an account ?
 <Link to = '/registration'>Create Account</Link>
</p>
{error && <span>{error}</span>}
</Card> */}
        
       

  
