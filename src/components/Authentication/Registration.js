import React, { useState } from 'react'
import {auth, database} from '../../global/firebaseCofig'
import {useNavigate} from 'react-router-dom'



import { Card, Button, TextField, CardHeader, CardActions } from '@mui/material'
import { blue } from '@mui/material/colors'
import Copyright from '../LandComp/Copyright'


function Registration() {

    let navigate = useNavigate()

    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [error, setError ] = useState('')

    const handleSignup = (e) => {
        e.preventDefault()
        //console.log(name, email, password);
        auth.createUserWithEmailAndPassword(email, password)
        .then((cred) => {
            database.collection('Users').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            })
            .then(() => {
                setName('')
                setEmail('')
                setPassword('')
                navigate('/login')
            }).catch(err => setError(err.message))
        }).catch(err => setError(err.message))

    }
  return (
    <>
   
        
            <form autoComplete = 'off' >

            <Card sx={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "25px", backgroundColor: blue[100], display: "flex", flexDirection: "column", gap:"10px", padding: "45px"}}>

            <CardHeader
            title="Registration Form"

            />
            <TextField variant='outlined' label="name" onChange={(e) => setName(e.target.value)} value = {name}/>
            <TextField variant='outlined' label="email" onChange={(e) => setEmail(e.target.value)} value = {email}/>
            <TextField variant='outlined' label="password" type="text" onChange={(e) => setPassword(e.target.value)} value = {password}/>
            <Button onClick = {handleSignup} variant="contained" href="#outlined-buttons">SUBMIT</Button>
            
                {error && <span>{error}</span>};
                </Card>
            </form>
            <Copyright />
    </>
  )
}

export default Registration