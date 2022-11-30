import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
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
   < >
   <div className='loanparent'>
   
      <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "50px"}}>
      {LoanProducts.map((loan) => (
        <Grid item xs={2} sm={4} md={4}>
          
          <div className='loangrid'>
            <Card key = {loan.LoanId}  sx={{':hover': {
                  backgroundColor: '#043034', 
                  color: 'lightgrey',
                  cursor: 'pointer',
                },
              }}>
              <CardContent>
                <h5>
                  The amount is: 
                  {loan.Loan}
                </h5>
                <h6>
                  The interest rate is:
                 {loan.interest}
                </h6>
                <h6>
                  The duration is:
                 {loan.duration}
                </h6>

              </CardContent>
              <CardActions>
                <Button variant = 'contained' color='success' onClick={()=> navigate('/apply')}
                >Apply</Button>
              </CardActions>

            </Card>
            </div>
        </Grid>
        ))}
    </Grid>
    
     </div>
   </>
  )
}
