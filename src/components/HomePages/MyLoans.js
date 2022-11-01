import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import './myloans.css'
import { useNavigate } from 'react-router-dom'

export default function MyLoans() {

  let navigate = useNavigate()

  const loans = [
    {id: 1, amount: '3000', interest: '2%'},
    {id: 2, amount: '5000', interest: '4%'},
    {id: 3, amount: '10000', interest: '7%'},
    {id: 4, amount: '20000', interest: '10%'},
  ]

  return (
   < >
   <div className='loanparent'>
   
      <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "50px"}}>
      {loans.map((loan) => (
        <Grid item xs={2} sm={4} md={4}>
          
          <div className='loangrid'>
            <Card key = {loan.id}  sx={{':hover': {
                  backgroundColor: '#043034', 
                  color: 'lightgrey',
                  cursor: 'pointer',
                },
              }}>
              <CardContent>
                <h5>
                  The amount is: 
                  {loan.amount}
                </h5>
                <h6>
                  The interest rate is:
                 {loan.interest}
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
