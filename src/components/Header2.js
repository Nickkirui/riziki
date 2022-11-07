
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './header2.css'
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied'
import {auth} from '../global/firebaseCofig'

function Header2() {

  let navigate = useNavigate()

  const [currentuser, setCurrentUser] =  useState(null)
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        setCurrentUser(user)
      }
      else{
        setCurrentUser(null)
      }
    })
  }, [])
  //console.log(currentuser);

  const handleLogout =() => {
    auth.signOut()
    .then(()=>{
      navigate('/')
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

  return (
    <>
     <div className='navbar'>
     <img width={'100px'} src="images\RIZIKI.png" alt="" className='navbarimg'/>
        {/* <Typography variant='body1' style = {{cursor: 'pointer', paddingTop: '1.5rem'}}> Riziki </Typography> */}
        <div className='navitems'>
          <button className='navbtn' onClick={() => navigate('/')} icon > <HomeIcon></HomeIcon> Home</button>

          {currentuser ? (
            <button className='navbtn' onClick={() => handleLogout() }><LogoutIcon></LogoutIcon>Log out</button>
          ) : (
            <>
             <button className='navbtn' onClick={() => navigate('/signin') }><LoginIcon></LoginIcon>Log In</button>
             <button className='navbtn' onClick={() => navigate('/registration')}><SensorOccupiedIcon></SensorOccupiedIcon>Sign Up</button>
             </>
          )}
         

        </div>

     </div>
    </>
   
  )
}

export default Header2