import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header2.css'
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied'

function Header2() {

  let navigate = useNavigate()
  
  return (
    <>
     <div className='navbar'>
     <img width={'100px'} src="images\RIZIKI.png" alt="" className='navbarimg'/>
        {/* <Typography variant='body1' style = {{cursor: 'pointer', paddingTop: '1.5rem'}}> Riziki </Typography> */}
        <div className='navitems'>
          <button className='navbtn' onClick={() => navigate('/')} icon > <HomeIcon></HomeIcon> Home</button>
          <button className='navbtn' onClick={() => navigate('/login') }><LoginIcon></LoginIcon>Log In</button>
          <button className='navbtn' onClick={() => navigate('/registration')}><SensorOccupiedIcon></SensorOccupiedIcon>Sign Up</button>

        </div>

     </div>
    </>
   
  )
}

export default Header2