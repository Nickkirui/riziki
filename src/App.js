
import './App.css';
import SignIn from './components/Authentication/Login'
import { Routes, Route } from 'react-router-dom';
import Registration from './components/Authentication/Registration';

import Landing from './components/Landing';
import Application from './components/Application';
import Review from './components/Review';
import Header2 from './components/Header2'
import Apply from './components/apply';
import Homepage from './components/LandComp/Homepage';
import LoanBalance from './components/HomePages/LoanBalance';
import MyAccount from './components/HomePages/MyAccount';
import Repayment from './components/HomePages/Repayment';
import MyLoans from './components/HomePages/MyLoans';
import Input from './components/Map/Input';
import { useEffect } from 'react';


function App() {

  return (
    <>
    {/* <Header/> */}
    <Header2/>
    
        <div className="App">

        <Routes>
          <Route exact path ='/' element = { <Landing /> } />
          <Route path = '/signin' element  ={ <SignIn /> } />
          <Route path = '/registration' element = { <Registration />} />
         {/* <Route path = '/homepage' element ={<HomePage/>}/> */}
          <Route path = '/application' element ={<Application/>}/>
          <Route path = '/review' element ={<Review/>}/>
          <Route path = '/apply' element ={<Apply/>}/>
          <Route path = '/loanbalance' element ={<LoanBalance/>}/>
          <Route path = '/myaccount' element ={<MyAccount/>}/>
          <Route path = '/repayment' element ={<Repayment/>}/>
          <Route path = '/myloans' element ={<MyLoans/>}/>
          <Route path = '/homepage' element ={<Homepage/>}/>
          <Route path = '/input' element ={<Input/>}/>

        </Routes>

        </div>
    
    </>

  );
}

export default App;