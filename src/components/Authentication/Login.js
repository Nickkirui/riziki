import  React, {useRef} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../../global/firebaseCofig'
import { useDispatch } from 'react-redux';
import {getUser} from '../../slices/userSlice';
import toast, { Toaster } from 'react-hot-toast';


function Copyright(props) {
  return (
    <Typography variant="body2"  align="center" {...props} >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        RIZIKI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const emailRef = useRef()
  const passwordRef = useRef()

  const dispatch = useDispatch()

  
  let navigate = useNavigate() 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(emailRef.current.value === 'admin@admin.com' && passwordRef.current.value === 'admin123'){
      navigate('/admin')
    }
    else{
      auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((user) => {
        dispatch(getUser(user.user))
        localStorage.setItem("user", user.user.uid)
        navigate('/homepage')
             
        })
       .then(() => {
          toast.success("login success")}).catch((err => toast.error(err.message) ))
    }
    }

  

  return (
    <>
    <Toaster/>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              inputRef={emailRef}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordRef}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              <p>Don't have an account? <Link to = '/registration'>Sign Up</Link></p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}


// import React , {useState} from 'react'

// import {Link, useNavigate} from 'react-router-dom'
// import {auth} from '../../global/firebaseCofig'
// import { Card, Button, TextField, CardHeader } from '@mui/material'

// import { green } from '@mui/material/colors'
// import {InputAdornment} from '@mui/material'
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import {IconButton} from '@mui/material'
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


// import './Login.css';
// import Copyright from '../LandComp/Copyright'


// function Login() {

//   let navigate = useNavigate()


//   const [email, setEmail ] = useState(' ')
//   const [password, setPassword ] = useState(' ')
//   const [error, setError ] = useState(' ')

//   const [showPassword, setShowPassword] = useState(false)
    
//   const handleLogin = (e) => {
//     e.preventDefault()
//     //console.log(email, password);
//     auth.signInWithEmailAndPassword(email, password)
//     .then(() => {
//       setEmail('')
//       setPassword('')
//       setError('')
//       navigate('/homepage')
//     })
//     .catch((err => setError(err.message) ))
//   }

  
//   return (


//     <>

    

//             <form  onSubmit = {handleLogin} className= 'body' autoComplete='on'>

//               <Card sx={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto", backgroundcolor:green[300], marginTop: "25px", display: "flex", flexDirection: "column", gap:"10px", padding: "45px"}} className='card'>
              
//             <CardHeader
//             title="Log In"
            
//             />

//               <TextField variant='outlined' label="email" onChange={(e) => setEmail(e.target.value)}></TextField>
//               <TextField variant='outlined' label="password" type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)}
//                           InputProps={{
//                             endAdornment: <InputAdornment position="start">
//                                 {!showPassword ? <IconButton onClick={() => setShowPassword(true)}><VisibilityIcon></VisibilityIcon></IconButton> : <IconButton onClick={() => setShowPassword(false)}><VisibilityOffIcon></VisibilityOffIcon></IconButton>}
//                             </InputAdornment>,
//                           }}
//               ></TextField>
//               <Button variant="contained" color="info" type="submit">Login</Button>
//               <p>Don't have an account? <Link to = '/registration'>Create Account</Link></p>
//               </Card>



//             </form>
//             <Copyright></Copyright>
    
//     </>
        
        
       

    
//   )
// }

// export default Login







       

  
