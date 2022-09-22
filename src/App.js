import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Login/Registration';
import HomePage from './components/Homepage';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path ='/' element = { <Header /> } />
          <Route path = '/login' element  ={ <Login /> } />
          <Route path = '/registration' element = { <Registration />} />
          <Route path = '/homepage' element ={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
