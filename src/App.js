import React from 'react';
import './App.css';
import {Mailer} from './Components/Mailer/mailer'
import {Pagoda} from './Components/Route/Pagoda'
import {Home} from './Components/Route/Home';
import {Routes, Route, Link} from 'react-router-dom'
import { Porfolio } from './Components/Portfolio/Porfolio';

function App() {
  
  return (
    <div className="App">
      <div className='menu'>
      <Link to='/'  >Home</Link>
     <Link to='/Pagoda'  >Pagoda</Link> 
     <Link to='/Mailer'  >Mailer</Link>
     <Link  to='/Porfolio'>Porfolio</Link>
    
      </div>
     
    
    <Routes>
      <Route path='/Porfolio' element={<Porfolio/>}/>
      <Route path='/' element={<Home/>} />
      <Route path='/Pagoda' element={<Pagoda/>} />
      <Route path='/Mailer' element={<Mailer/>} /> 
      </Routes>
    </div>
    
  );
}

export default App;
