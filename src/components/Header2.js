
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './header2.css'
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied'
import {auth} from '../global/firebaseCofig'
import { useSelector } from 'react-redux'
import { getUser } from '../slices/userSlice'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const nullValues = ["null", null, undefined]

function Header2() {

  const user = useSelector((state) => state.user.user.email)
  const [userName, setUserName] = useState('')

  const getUser = () => {
    setUserName(!nullValues.includes(user) ? user.split('@')[0] : "")
    console.log(userName)
  }

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

  useEffect(() => {
    getUser()
  }, [user])

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
     <h5 className='h5'>{userName}</h5>
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