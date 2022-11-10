import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './apply.css'
import { Grid, Button} from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { database } from '../global/firebaseCofig';
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';


export default function Apply() {

  const [selected, setSelected] = useState(false)
  const [selectedtwo, setSelectedtwo] = useState(false)
  const [selectedthree, setSelectedthree] = useState(false)
  const [selectedFour, setSelectedFour] = useState(false)
  const [selectedFive, setSelectedFive] = useState(false)
  const [selectedSix, setSelectedSix] = useState(false)

  const [divContent, setDivContent] = useState('')
  const [divContenttwo, setDivContenttwo] = useState('')
  const [divContentthree, setDivContentthree] = useState('')
  const [divContentfour, setDivContentfour] = useState('')
  const [divContentfive, setDivContentfive] = useState('')
  const [divContentsix, setDivContentsix] = useState('')


  const handleOnClick = (e, segment) => {
    console.log(e.currentTarget.textContent)
    if(segment===1){
        setSelected(true)
        setDivContent(e.currentTarget.textContent)
    }
    if(segment===2){
        setSelectedtwo(true)
        setDivContenttwo(e.currentTarget.textContent)
    }
    if(segment===3){
        setSelectedthree(true)
        setDivContentthree(e.currentTarget.textContent)
    }
    if(segment===4){
        setSelectedFour(true)
        setDivContentfour(e.currentTarget.textContent)
    }
    if(segment===5){
        setSelectedFive(true)
        setDivContentfive(e.currentTarget.textContent)
    }
    if(segment===6){
        setSelectedSix(true)
        setDivContentsix(e.currentTarget.textContent)
    }
  }
  const apply = () => {
    console.log("calls");
    database.collection('Applications').add({
      usage : divContent,
      livinSituation : divContenttwo,
      relationshipStatus : divContentthree,
      dependants : divContentfour,
      employmentStatus : divContentfive,
      paymentFrequency : divContentsix,
    }).then(()=> {
      //setState('')
    }).catch(err => console.log(err.message))
}

  return (


    <>

    <div className='parent'>
      <h5>{!selected ? <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon> : <CheckCircleOutlineIcon sx={{color: "green"}}></CheckCircleOutlineIcon>} What will you use this money for?</h5>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: "15px"}}>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContent==="Pay Bill" && selected ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 1)}>
              <ReceiptIcon></ReceiptIcon>
                <h5>Pay Bill</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={divContent==="Home Improvements" && selected ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 1)}>
                <AddHomeWorkIcon></AddHomeWorkIcon>
                <h5>Home Improvements</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={divContent==="Car" && selected ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 1)}>
              <DirectionsCarIcon></DirectionsCarIcon>
              <h5>Car</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <div className={divContent==="Debt Payment" && selected ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 1)}>
            <CurrencyExchangeIcon></CurrencyExchangeIcon>
            <h5>Debt Payment</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <div className={divContent==="Personal Expenses" && selected ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 1)}>
            <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
            <h5>Personal Expenses</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <div className={divContent==="Other" && selected ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 1)}>
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
            <div className={divContenttwo==="Home Owner" && selectedtwo ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 2)}>
                <h5>Home Owner</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={divContenttwo==="Private Tenant" && selectedtwo ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 2)}>
                <h5>Private Tenant</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={divContenttwo==="Council Tenant" && selectedtwo ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 2)}> 
              
              <h5>Council Tenant</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContenttwo==="Living with Family" && selectedtwo ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 2)}>
            
            <h5>Living with Family</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContenttwo==="Roomates" && selectedtwo ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 2)}>
            
            <h5>Roomates</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContenttwo==="Other" && selectedtwo ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 2)}>
            
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
            <div className={divContentthree==="Single" && selectedthree ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 3)}>
              
                <h5>Single</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={divContentthree==="Married/ Civil Patnership" && selectedthree ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 3)}>
              
                <h5>Married/ Civil Patnership</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentthree==="Living with Patner" && selectedthree ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 3)}>
              
              <h5>Living with Patner</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentthree==="Widowed" && selectedthree ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 3)}>
            
            <h5>Widowed</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentthree==="Divorced" && selectedthree ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 3)}>
            
            <h5>Divorced</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentthree==="Other" && selectedthree ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 3)}>
            
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
            <div className={divContentfour==="None" && selectedFour ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 4)}>
              
                <h5>None</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={divContentfour==="1" && selectedFour ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 4)}>
              
                <h5>1</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentfour==="2" && selectedFour ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 4)}>
              
              <h5>2</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentfour==="3" && selectedFour ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 4)}>
            
            <h5>3</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentfour==="4" && selectedFour ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 4)}>
            
            <h5>4</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentfour==="Other" && selectedFour ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 4)}>
            
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
            <div className={divContentfive==="Full time" && selectedFive ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 5)}>
              
                <h5>Full time</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={divContentfive==="Part time" && selectedFive ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 5)}>
              
                <h5>Part time</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentfive==="Self Employed" && selectedFive ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 5)}>
              
              <h5>Self employed</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentfive==="Student" && selectedFive ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 5)}>
            
            <h5>Student</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentfive==="Retired" && selectedFive ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 5)}>
            
            <h5>Retired</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentfive==="Not employed" && selectedFive ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 5)}>
            
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
            <div className={divContentsix==="Daily" && selectedSix ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 6)}>
              
                <h5>Daily</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
          <div className={divContentsix==="Weekly" && selectedSix ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 6)}>
              
                <h5>Weekly</h5>
            </div>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentsix==="Monthly" && selectedSix ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 6)}>
              
              <h5>Monthly</h5>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className={divContentsix==="Other" && selectedSix ? 'useActive' : 'use'} onClick={(event) => handleOnClick(event, 6)}>
            
            <h5>Other</h5>
            </div>
          </Grid>
          
      </Grid>
      <div>

      </div>
       <Button variant="contained" color="info" type="submit" onClick = {apply} >NEXT</Button>
    </div>
    
    

    </>
  )
}
