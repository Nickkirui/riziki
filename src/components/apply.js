import React, {useState} from 'react'
import './apply.css'
import { Grid } from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Apply() {

  const [selected, setSelected] = useState(false)

  return (


    <>

    <div className='parent'>
      <h5>{!selected ? <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon> : <CheckCircleOutlineIcon sx={{color: "green"}}></CheckCircleOutlineIcon>} What will you use this money for?</h5>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "15px"}}>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selected ? 'useActive' : 'use'} onClick={() => setSelected(true)}>
              <ReceiptIcon></ReceiptIcon>
                <h5>Pay Bill</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={selected ? 'useActive' : 'use'}>
              <AddHomeWorkIcon></AddHomeWorkIcon>
                <h5>Home Improvements</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={selected ? 'useActive' : 'use'}>
              <DirectionsCarIcon></DirectionsCarIcon>
              <h5>Car</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selected ? 'useActive' : 'use'}>
            <CurrencyExchangeIcon></CurrencyExchangeIcon>
            <h5>Debt Payment</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selected ? 'useActive' : 'use'}>
            <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
            <h5>Personal Expenses</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selected ? 'useActive' : 'use'}>
            <MoreHorizIcon></MoreHorizIcon>
            <h5>Other</h5>
            </div>
          </Grid>
      </Grid>
      <div>

      </div>

    </div>

    <div className='parent'>
      <h5>{!selected ? <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon> : <CheckCircleOutlineIcon sx={{color: "green"}}></CheckCircleOutlineIcon>} What will you use this money for?</h5>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "15px"}}>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selected ? 'useActive' : 'use'} onClick={() => setSelected(true)}>
              <ReceiptIcon></ReceiptIcon>
                <h5>Pay Bill</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={selected ? 'useActive' : 'use'}>
              <AddHomeWorkIcon></AddHomeWorkIcon>
                <h5>Home Improvements</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={selected ? 'useActive' : 'use'}>
              <DirectionsCarIcon></DirectionsCarIcon>
              <h5>Car</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selected ? 'useActive' : 'use'}>
            <CurrencyExchangeIcon></CurrencyExchangeIcon>
            <h5>Debt Payment</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selected ? 'useActive' : 'use'}>
            <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
            <h5>Personal Expenses</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selected ? 'useActive' : 'use'}>
            <MoreHorizIcon></MoreHorizIcon>
            <h5>Other</h5>
            </div>
          </Grid>
      </Grid>
      <div>

      </div>

    </div>

    </>
  )
}
