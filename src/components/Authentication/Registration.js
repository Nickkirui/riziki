
import React, { useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {auth, database} from '../../global/firebaseCofig'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';

function Copyright(props) {



  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Riziki
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    );
  }

const theme = createTheme();

export default function Registration() {


const emailRef = useRef()
const passwordRef = useRef()
const fnameRef = useRef()
const lnameRef = useRef()
const idnumberRef = useRef()
const phonenumberRef = useRef()

let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((cred) => {
            database.collection('Users').doc(cred.user.uid).set({
                FirstName: fnameRef.current.value,
                LastName: lnameRef.current.value,
                Email: emailRef.current.value,
                Password: passwordRef.current.value,
                IdNumber: idnumberRef.current.value,
                PhoneNumber:phonenumberRef.current.value
            })
            .then(() => {
                navigate('/signin')
                toast.success('Signup success')

            }).catch((err => toast.error(err.message)))
        }).catch((err => toast.error(err.message)))

 };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  inputRef={fnameRef}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  inputRef={lnameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={passwordRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="IDNumber"
                  label="ID Number"
                  type="Number"
                  id="IDNumber"
                  autoComplete="ID Number"
                  inputRef={idnumberRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="PhoneNumber"
                  label="Phone Number"
                  type="Text"
                  id="PhoneNumber"
                  autoComplete="ID Number"
                  inputRef={phonenumberRef}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}