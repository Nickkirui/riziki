
import './App.css';
import SignIn from './components/Authentication/Login'
import { Routes, Route } from 'react-router-dom';
import Registration from './components/Authentication/Registration';

import Landing from './components/Landing';
// import Application from './components/Application';
import Review from './components/Review';
import Header2 from './components/Header2'
import Apply from './components/apply';
import Homepage from './components/LandComp/Homepage';
import LoanBalance from './components/HomePages/LoanBalance';
import MyAccount from './components/HomePages/MyAccount';
import Repayment from './components/HomePages/Repayment';
import MyLoans from './components/HomePages/MyLoans';
import Input from './components/Map/Input';
import Admin from './components/Admin/Admin';
import ForgotPassword from './components/Authentication/Password';
import Applications from './components/Map/Applications'
import { Toaster } from 'react-hot-toast';
import PrivateLoggedInRoutes from './components/ProtectedRoutes/PrivateLoggedInRoutes';
import PrivateLoggedOutRoutes from './components/ProtectedRoutes/PrivateLoggedOutRoutes';
import { createTheme, ThemeProvider } from '@mui/material';



const theme = createTheme({
  palette: {
    primary: {
      main: '#043034'
    }
  }
})

function App() {

 

  return (
    <ThemeProvider theme={theme}>
    <Toaster />
    <Header2/>
    
        <div className="App">

        <Routes>
          <Route exact path ='/' element = { <Landing /> } />
          <Route path = '/signin' element  ={ <SignIn /> } />
          <Route path = '/registration' element = { <Registration />} />
         {/* <Route path = '/homepage' element ={<HomePage/>}/> */}
          {/* <Route path = '/application' element ={<Application/>}/> */}
          <Route path = '/review' element ={<Review/>}/>
          <Route path = '/apply' element ={<Apply/>}/>
          <Route path = '/loanbalance' element ={<LoanBalance/>}/>
          <Route path = '/myaccount' element ={<MyAccount/>}/>
          <Route path = '/repayment' element ={<Repayment/>}/>
          <Route path = '/myloans' element ={<MyLoans/>}/>
          <Route path = '/homepage' element ={<Homepage/>}/>
          <Route path = '/input' element ={<Input/>}/>
          <Route path = '/admin' element ={<Admin/>}/>
          <Route path = '/Forgotpassword' element ={<ForgotPassword/>}/>
          <Route path = '/applications' element ={<Applications/>}/>

        </Routes>

        </div>
    
    </ThemeProvider>

  );
}

export default App;