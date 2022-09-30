import * as React from "react";
import {useNavigate} from 'react-router-dom';


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Testimonials from "./Testimonials";

export default function Header() {
  let navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }
return (
	<>

	<AppBar position="static">
		<Toolbar>
		
		<IconButton className="Icon"
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			
			<MenuIcon />
    
		</IconButton>
		

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			RIZIKI LENDERS
		</Typography>
    <NotificationsIcon/>
		<Button color="inherit" onClick={() => handleLogin()}>Login</Button>
		</Toolbar>
	</AppBar>
	<Testimonials />
	
	</>
	
);
}
