
import React , {useState} from 'react'

import {Link, useNavigate} from 'react-router-dom'

import { Card, Button, TextField, CardHeader } from '@mui/material'

import { green } from '@mui/material/colors'
;
import Copyright from '../LandComp/Copyright'


function Applications() {

  // let navigate = useNavigate()


  // const [DateofBirth, setDateofBirth ] = useState(' ')
  // const [PlaceofBirth, setPlaceofBirth ] = useState(' ')
  // const [Residency, setResidency ] = useState(' ')
  // const [RelationshipStatus, setRelationshipStatus ] = useState(' ')
  // const [Dependants, setDependants ] = useState(' ')
  // const [EmploymentStatus, setEmploymentStatus ] = useState(' ')
  // const [PaymentFrequency, setPaymentFrequency] = useState(' ')
  // const [PaymentMethod, setPaymentMethod = useState(' ')

  
    
 
  //   .then(() => {
  //     setDateofBirth('')
  //     setPlaceofBirth('')
  //     setResidency('')
  //     setRelationshipStatus('')
  //     setDependants('')
  //     setEmploymentStatus('')
  //     setPaymentFrequency('')
  //     navigate('/input')
   

  
  return (


    <>

    

            <form   className= 'body' autoComplete='on'>

              <Card sx={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto", backgroundcolor:green[300], marginTop: "25px", display: "flex", flexDirection: "column", gap:"10px", padding: "45px"}} className='card'>
              
            <CardHeader
            title="Log In"
            
            />

              <TextField variant='outlined' label="Date of Birth" ></TextField>
              <TextField variant='outlined' label="Place of Birth" ></TextField>
              <TextField variant='outlined' label="Residency" ></TextField>
              <TextField variant='outlined' label="Relationship Status" ></TextField>
              <TextField variant='outlined' label="Dependants" ></TextField>
              <TextField variant='outlined' label="Employment Status"></TextField>
              <TextField variant='outlined' label="Payment Frequency" ></TextField>
              <TextField variant='outlined' label="Payment Method" ></TextField>
              <Button variant="contained" color="info" type="submit">Login</Button>
              
              </Card>



            </form>
            <Copyright></Copyright>
    
    </>
        
        
       

    
  )
}

export default Applications;