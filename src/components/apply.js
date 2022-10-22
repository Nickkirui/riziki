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
  const [selectedtwo, setSelectedtwo] = useState(false)
  const [selectedthree, setSelectedthree] = useState(false)
  const [selectedFour, setSelectedFour] = useState(false)
  const [selectedFive, setSelectedFive] = useState(false)
  const [selectedSix, setSelectedSix] = useState(false)

  const [divContent, setDivContent] = useState()


  const handleOnClick = (e, segment) => {
    console.log(e.currentTarget.textContent)
    setDivContent(e.currentTarget.textContent)
    if(segment===1){
        setSelected(true)
    }
    if(segment===2){
        setSelectedtwo(true)
    }
    if(segment===3){
        setSelectedthree(true)
    }
    if(segment===4){
        setSelectedFour(true)
    }
    if(segment===5){
        setSelectedFive(true)
    }
    if(segment===6){
        setSelectedSix(true)
    }
  }

  return (


    <>

    <div className='parent'>
      <h5>{!selected ? <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon> : <CheckCircleOutlineIcon sx={{color: "green"}}></CheckCircleOutlineIcon>} What will you use this money for?</h5>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "15px"}}>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContent==="Pay Bill" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 1)}>
              <ReceiptIcon></ReceiptIcon>
                <h5>Pay Bill</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={divContent==="Home Improvements" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 2)}>
                <AddHomeWorkIcon></AddHomeWorkIcon>
                <h5>Home Improvements</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={divContent==="Car" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 3)}>
              <DirectionsCarIcon></DirectionsCarIcon>
              <h5>Car</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <div className={divContent==="Debt Payment" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 4)}>
            <CurrencyExchangeIcon></CurrencyExchangeIcon>
            <h5>Debt Payment</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <div className={divContent==="Personal Expenses" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 5)}>
            <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
            <h5>Personal Expenses</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <div className={divContent==="Other" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 6)}>
            <MoreHorizIcon></MoreHorizIcon>
            <h5>Other</h5>
            </div>
          </Grid>
      </Grid>
      <div>

      </div>

    </div>

    <div className='parent'>
      <h5>{!selectedtwo ? <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon> : <CheckCircleOutlineIcon sx={{color: "green"}}></CheckCircleOutlineIcon>} What's your current living situation?</h5>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "15px"}}>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContent==="Home Owner" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 1)}>
                <h5>Home Owner</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={divContent==="Private Tenant" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 2)}>
                <h5>Private Tenant</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={divContent==="Council Tenant" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 3)}> 
              
              <h5>Council Tenant</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContent==="Living with Family" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 4)}>
            
            <h5>Living with Family</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContent==="Roomates" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 5)}>
            
            <h5>Roomates</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContent==="Other" ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 6)}>
            
            <h5>Other</h5>
            </div>
          </Grid>
      </Grid>
      <div>

      </div>

    </div>

    <div className='parent'>
      <h5>{!selectedthree ? <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon> : <CheckCircleOutlineIcon sx={{color: "green"}}></CheckCircleOutlineIcon>} What is your relationship status?</h5>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "15px"}}>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedthree ? 'useActive' : 'use'} onClick={() => setSelectedthree(true)}>
              
                <h5>Single</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={selectedthree ? 'useActive' : 'use'}>
              
                <h5>Married/ Civil Patnership</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedthree ? 'useActive' : 'use'}>
              
              <h5>Living with Patner</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedthree ? 'useActive' : 'use'}>
            
            <h5>Widowed</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedthree ? 'useActive' : 'use'}>
            
            <h5>Divorced</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedthree ? 'useActive' : 'use'}>
            
            <h5>Other</h5>
            </div>
          </Grid>
      </Grid>
      <div>

      </div>

    </div>

    <div className='parent'>
      <h5>{!selectedFour ? <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon> : <CheckCircleOutlineIcon sx={{color: "green"}}></CheckCircleOutlineIcon>} Number of dependants</h5>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "15px"}}>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedFour ? 'useActive' : 'use'} onClick={() => setSelectedFour(true)}>
              
                <h5>None</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={selectedFour ? 'useActive' : 'use'}>
              
                <h5>1</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedFour ? 'useActive' : 'use'}>
              
              <h5>2</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedFour ? 'useActive' : 'use'}>
            
            <h5>3</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedFour ? 'useActive' : 'use'}>
            
            <h5>4</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedFour ? 'useActive' : 'use'}>
            
            <h5>Other</h5>
            </div>
          </Grid>
      </Grid>
      <div>

      </div>

    </div>

    <div className='parent'>
      <h5>{!selectedFive ? <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon> : <CheckCircleOutlineIcon sx={{color: "green"}}></CheckCircleOutlineIcon>}What's your current employment status?</h5>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "15px"}}>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedFive ? 'useActive' : 'use'} onClick={() => setSelectedFive(true)}>
              
                <h5>Full time</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={selectedFive ? 'useActive' : 'use'}>
              
                <h5>Part time</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedFive ? 'useActive' : 'use'}>
              
              <h5>Self employed</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedFive ? 'useActive' : 'use'}>
            
            <h5>Student</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedFive ? 'useActive' : 'use'}>
            
            <h5>Retired</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedFive ? 'useActive' : 'use'}>
            
            <h5>Not employed</h5>
            </div>
          </Grid>
      </Grid>
      <div>

      </div>

    </div>

    <div className='parent'>
      <h5>{!selectedSix ? <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon> : <CheckCircleOutlineIcon sx={{color: "green"}}></CheckCircleOutlineIcon>} How often do you get paid?</h5>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "15px"}}>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedSix ? 'useActive' : 'use'} onClick={() => setSelectedSix(true)}>
              
                <h5>Daily</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={selectedSix ? 'useActive' : 'use'}>
              
                <h5>Weekly</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedSix ? 'useActive' : 'use'}>
              
              <h5>Monthly</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={selectedSix ? 'useActive' : 'use'}>
            
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
