import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Login/Registration';
import HomePage from './components/Homepage';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path ='/' element = { <Landing /> } />
          <Route path = '/login' element  ={ <Login /> } />
          <Route path = '/registration' element = { <Registration />} />
          <Route path = '/homepage' element ={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
