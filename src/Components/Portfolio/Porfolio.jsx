import React from 'react'

import '../../App.css'
import {Link,Routes,Route} from 'react-router-dom';
import { PortfolioHome } from './PorfolioMenu/PortfolioHome';
import { PortfolioAbout } from './PorfolioMenu/PortfolioAbout';
import { PortfolioContact } from './PorfolioMenu/PortfolioContact';
export const Porfolio=()=>{

  return (
    <div className='mune1'>
      <div className='imga' >
     
      
      <div>
        <Link to="/PortfolioHome" >Home</Link><br /><br />
        <Link to="/PortfolioAbout" >About</Link><br /><br />
        <Link to="/PortfolioContact" >Contact</Link><br /><br />
      </div>
      <Routes>
      <Route path='/Portfolio' element={<PortfolioHome />} />
      <Route path='/PortfolioAbout' element={<PortfolioAbout />} />
      <Route path='/PortfolioContact' element={<PortfolioContact />} />

      </Routes>
      </div>
    </div>
  )
}
