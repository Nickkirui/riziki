import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {useNavigate } from 'react-router-dom'

function IndividualCard({loan}) {

  let navigate = useNavigate()

  return (
    <>
        <Card className='card'>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            LOAN OFFERS
            </Typography>
            <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} className='cash' >
              {loan.amount}
            </Typography>

            <Typography variant="body2">
             {loan.interest}
         
             {'"5 Months"'}
             </Typography>

             <CardActions>
              <Button size="small"variant='contained'color='success' onClick = {()=> navigate('/application')}>APPLY</Button>
            </CardActions>
            </CardContent>
            </Card>
    </>
  )
}

export default IndividualCard