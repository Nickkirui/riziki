import * as React from "react";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";

import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Testimonials from "./LandComp/Testimonials";

export default function Header() {
  let navigate = useNavigate()

  const [isLoggedIn, setLogInState] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleLogin = () => {
    navigate('/login')
	setLogInState(true)
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


return (
	<>

	<AppBar position="static">
		<Toolbar sx={{backgroundColor: "lightblue"}}>
		
		<IconButton className="Icon"
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			
			<MenuIcon />
    
		</IconButton>
		

			<img width={'100px'} src="images\RIZIKI.png" alt="" />
		{!isLoggedIn &&
		<Button color="inherit" onClick={() => handleLogin()}>Login</Button>
		}

		{isLoggedIn && 
			<>
					<IconButton size="large" aria-label="show 4 new mails" color="inherit">
						<Badge badgeContent={4} color="error">
						<MailIcon />
						</Badge>
					</IconButton>
					<IconButton
						size="large"
						aria-label="show 1 new notifications"
						color="inherit"
					>
						<Badge badgeContent={1} color="error">
						<NotificationsIcon />
						</Badge>
					</IconButton>
					<MenuItem onClick={handleProfileMenuOpen}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="primary-search-account-menu"
						aria-haspopup="true"
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
					</MenuItem>
					</>



		}
		</Toolbar>
	</AppBar>


	<Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
	
	</>



	
);
}


