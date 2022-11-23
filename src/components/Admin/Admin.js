import React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';
import InventoryIcon from '@mui/icons-material/Inventory';
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { collection, onSnapshot } from 'firebase/firestore';
import {database } from '../../global/firebaseCofig'
import { createTheme, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

 
const drawerWidth = 240;
const theme = createTheme()

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}))

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Admin() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //create 2 states for each item
  const [viewusers, setViewUsers] = useState(false) //displaying the item if it is true
  const [ users, setUsers ] = useState([]) //contains the data

  const [viewapplications, setViewApplications] = useState(false) //displaying the item if it is true
  const [ applications, setApplications ] = useState([]) //contains the data

//get users function
  const handleViewUsers = () => {
    setViewUsers(true)
    setViewApplications(false)
    onSnapshot( collection(database, "Users"), (snapshot) => {
      setUsers(snapshot.docs.map(doc => ({...doc.data(), UserId: doc.id  })))
      
    })
  }

  const handleViewApplications = () => {
    setViewApplications(true)
    setViewUsers(false)
    onSnapshot( collection(database, "Applications"), (snapshot) => {
      setApplications(snapshot.docs.map(doc => ({...doc.data(), ApplicationId: doc.id  })))
      
    })
  }

  console.log(applications)

  // console.log(users)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }), color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx = {{color: 'black'}}>
           Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon >
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary='My Account' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary='Add Loan Products' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary='View Loan Products' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton  onClick = {handleViewApplications}>
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary='View Applications' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick = {handleViewUsers}>
                <ListItemIcon >
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary='View Users' />
              </ListItemButton>
            </ListItem>

        </List>
        <Divider />
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReviewsIcon />
              </ListItemIcon>
              <ListItemText primary='Reviews' />
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary='Log Out' />
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
       {viewusers && <>

        <TableContainer component = {Paper} sx = {{marginTop: '1rem', width: '60%'}}>
        <Table sx = {{minWidth: 450 }} aria-label="simple table">
          <TableHead sx= {{backgroundColor: 'lightblue'}}>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>ID Number</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

             {users.map((user) => (
              <TableRow key = {user.UserId} 
              sx = {{'&:last-child td, &:last-child th': {  border: 0 },  minHeight: '2rem'}}>
                <TableCell component="th" scope="row">
                {user.FirstName + ' ' + user.LastName} 
                </TableCell>
                <TableCell >{user.Email}</TableCell>
                <TableCell >{user.IdNumber}</TableCell>
                <TableCell >
                  <IconButton >
                      <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))} 
             
             <TableRow > 
            <TableCell  colSpan = {6} style = {{display: 'flex', justifyContent: 'space-between'}}>
              <b>Total Number of users: {users.length}</b>
              
            </TableCell>
          </TableRow>

          </TableBody>
          </Table>
          </TableContainer>
       </>}

       {viewapplications && <>
        <TableContainer component = {Paper} sx = {{marginTop: '1rem', width: '100%'}}>
        <Table sx = {{minWidth: 450 }} aria-label="simple table">
          <TableHead sx= {{backgroundColor: 'lightblue'}}>
            <TableRow>
              <StyledTableCell>applicant id</StyledTableCell>
              <StyledTableCell>applicant email</StyledTableCell>
              <StyledTableCell>Usage</StyledTableCell>
              <StyledTableCell>Relationship Status</StyledTableCell>
              <StyledTableCell>Payment Frequency</StyledTableCell>
              <StyledTableCell>Living Situation</StyledTableCell>
              <StyledTableCell>Employment Status</StyledTableCell>
              <StyledTableCell>Dependants</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

             {applications.map((application) => (
              <TableRow key = {application.ApplicationId} 
              sx = {{'&:last-child td, &:last-child th': {  border: 0 },  minHeight: '2rem'}}>
                <TableCell >{application.userId}</TableCell>
                <TableCell >{application.email}</TableCell>
                <TableCell component="th" scope="row">
                {application.usage} 
                </TableCell>
                <TableCell >{application.relationshipStatus}</TableCell>
                <TableCell >{application.paymentFrequency}</TableCell>
                <TableCell >{application.livinSituation}</TableCell>
                <TableCell >{application.employmentStatus}</TableCell>
                <TableCell >{application.dependants}</TableCell>
                <TableCell >
                  <Box sx={{display: 'flex'}}>
                    <Tooltip title='accept loan application'>
                    <IconButton color='success'>
                      <CheckCircleIcon />
                  </IconButton>
                    </Tooltip>
  
                  <Tooltip title='decline loan application'>
                  <IconButton color='error'>
                  <CancelIcon />
                  </IconButton>
                  </Tooltip>
    
                  </Box>
                </TableCell>
              </TableRow>
            ))} 
             
             <TableRow > 
            <TableCell  colSpan = {6} style = {{display: 'flex', justifyContent: 'space-between'}}>
              <b>Total Number ofapplications: {applications.length}</b>
              
            </TableCell>
          </TableRow>

          </TableBody>
          </Table>
          </TableContainer>
       </>}

      </Main>
    </Box>
  );
}
