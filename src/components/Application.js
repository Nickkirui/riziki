import React, { useState } from 'react'

import { Card, Button, TextField, CardHeader, CardActions } from '@mui/material'
import { blue } from '@mui/material/colors'
import { database } from '../global/firebaseCofig'
import {useNavigate} from 'react-router-dom'

function Application() {

  const navigate = useNavigate()

  const [fName, setFname] = useState('')
  const [midName, setMidName] = useState('')
  const [lastName, setLastName] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')

  const addApplicant =(e) =>{
    e.preventDefault()
    database.collection('Applicants').add({
      FirstName: fName,
      MiddleName: midName,
      LastName: lastName,
      NationalID: idNumber,
      City: city,
      HomeAdress: address
    }).then(()=>{
      setFname('')
      setMidName('')
      setLastName('')
      setIdNumber('')
      setError('')
      setCity('')
      setAddress('')
      navigate('/review')
    }).catch(err=> setError(err.message))
  }

  return (
    <div>
     
     <form onSubmit={addApplicant} >

              <Card sx={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "25px",  display: "flex", flexDirection: "column", gap:"10px", padding: "45px", backgroundColor:blue[100]}}>

            <CardHeader
            title="Personal Details"
           
            
            />
             <TextField variant='outlined' label="Firstname" 
             onChange={(e)=> setFname(e.target.value)} value={fName}></TextField>

             <TextField variant='outlined' label="Middlename" 
             onChange={(e)=> setMidName(e.target.value)} value={midName}></TextField>

             <TextField variant='outlined' label="Lastname" 
             onChange={(e)=> setLastName(e.target.value)} value={lastName}></TextField>

             <TextField variant='outlined' label="ID Number" 
             onChange={(e)=> setIdNumber(e.target.value)} value={idNumber}></TextField>

             <TextField variant='outlined' label="City" 
              onChange={(e)=> setCity(e.target.value)} value={city}></TextField>

             <TextField variant='outlined' label="Home Address" 
              onChange={(e)=> setAddress(e.target.value)} value={address}></TextField>
              
             <button variant="contained" color="info" type="submit">NEXT</button>

            </Card>
            </form>
            {error & <span>{error}</span>}
    </div>
  )
}


export default Application