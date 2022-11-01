import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
import './Homepage.css'
import CalculateIcon from '@mui/icons-material/Calculate';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BalanceIcon from '@mui/icons-material/Balance';


export default function Homepage() {

    let navigate = useNavigate()


  return (
    <div className='parent'>
        <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "50px"}}>

            <Grid item xs={2} sm={4} md={4}  onClick={() => navigate('/myloans')}>
                <div className='grid' >
                    <CalculateIcon></CalculateIcon>
                    <h5>Apply For a Loan</h5>

                </div>

            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <div className='grid'  onClick={() => navigate('/repayment')}>
                    <PointOfSaleIcon></PointOfSaleIcon>
                    <h5>Repayment</h5>

                </div>

            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <div className='grid'  onClick={() => navigate('/myaccount')}>
                    <ManageAccountsIcon></ManageAccountsIcon>
                    <h5>My Account</h5>

                </div>

            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <div className='grid' onClick={() => navigate('/loanbalance')}>
                <BalanceIcon></BalanceIcon>
                    <h5>My Loans</h5>

                </div>

            </Grid>

        </Grid>

    </div>
  )
}
