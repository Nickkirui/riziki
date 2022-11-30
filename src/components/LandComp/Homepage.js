import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
import './Homepage.css'



export default function Homepage() {

    let navigate = useNavigate()


  return (
    <div className='parent'>
        <Grid container spacing={{ xs: 4, md: 6}} columns={{ xs: 4, sm: 8, md: 8 }} sx={{padding: "50px"}}>

            <Grid item xs={2} sm={4} md={4}  onClick={() => navigate('/myloans')}>
                <div className='grid' >
                <img src='./assets/apply.png'alt="" width='50px'/>
                    <h5>Apply For a Loan</h5>

                </div>

            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <div className='grid'  onClick={() => navigate('/repayment')}>
                <img src='./assets/repayment.png'alt="" width='50px'/>
                    <h5>Repayment</h5>

                </div>

            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <div className='grid'  onClick={() => navigate('/myaccount')}>
                <img src='./assets/account.png'alt="" width='50px'/>
                    <h5>My Account</h5>

                </div>

            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <div className='grid' onClick={() => navigate('/loanbalance')}>
                <img src='./assets/myloans.png'alt="" width='50px'/>
                    <h5>My Loans</h5>

                </div>

            </Grid>

        </Grid>

    </div>
  )
}
