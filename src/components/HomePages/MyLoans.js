import { Button, Card, CardActions, CardContent, Grid, Typography, Chip, Stack, Box } from '@mui/material'
import React, { useState } from 'react'
import './myloans.css'
import { useNavigate } from 'react-router-dom'
import { collection, onSnapshot } from 'firebase/firestore'
import { database } from '../../global/firebaseCofig'

export default function MyLoans() {

  let navigate = useNavigate()

  const [LoanProducts, setLoanProducts] = useState ([])

  onSnapshot( collection(database, "LoanProducts"), (snapshot) => {
    setLoanProducts(snapshot.docs.map(doc => ({...doc.data(), LoanId: doc.id  })))
  })

  return (
   <Box sx={{display: 'flex', justifyContent: 'center', margin:'auto', maxWidth: '1800px'}}>
      <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 2, sm: 2, md: 12}} sx={{padding: "50px", maxWidth: '100%', margin: 'auto'}}>
      {LoanProducts.map((loan) => (
        <Grid item xs={2} sm={4} md={4} sx={{maxWidth: '100px'}}>
          
            <Card key = {loan.LoanId}  sx={{':hover': {
                  backgroundColor: '#043034', 
                  color: 'lightgrey',
                  cursor: 'pointer',
                },
              }}>
              <CardContent>
                <Stack spacing={1}>
                <Chip label={`Kes. ${loan.Loan}`} color='success' variant='contained'>
                  {loan.Loan}
                </Chip>
                <Typography variant='h6' sx={{color: 'orange'}}>
                {`+${loan.interest}`}
                </Typography>
                </Stack>
   
                <Typography variant='h7'>
                 {loan.duration}
                </Typography>

              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                <Button variant = 'contained' color='info' onClick={()=> navigate('/apply')}
                >Apply</Button>
              </CardActions>

            </Card>
        </Grid>
        ))}
    </Grid>
    
       </Box>
  )
}
