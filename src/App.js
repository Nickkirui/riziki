import logo from './logo.svg';
import './App.css';
import Login from './components/Authentication/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Authentication/Registration';

import Landing from './components/Landing';
import Card from './components/Card';
import Application from './components/Application';
import Review from './components/Review';
import Header2 from './components/Header2'
import Apply from './components/apply';



function App() {
  return (
    <>
    {/* <Header/> */}
    <Header2/>
    
        <div className="App">

        <Routes>
          <Route exact path ='/' element = { <Landing /> } />
          <Route path = '/login' element  ={ <Login /> } />
          <Route path = '/registration' element = { <Registration />} />
         {/* <Route path = '/homepage' element ={<HomePage/>}/> */}
          <Route path = '/application' element ={<Application/>}/>
          <Route path = '/review' element ={<Review/>}/>
          <Route path = '/apply' element ={<Apply/>}/>
        </Routes>

        </div>
    
    </>

  );
}

export default App;