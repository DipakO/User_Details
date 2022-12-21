import React from 'react'

import "./App.css"
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Add from './Pages/Add';
import Home from './Pages/Home';
import Edit from './Pages/Edit';
const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/Adduser' element = {<Add />}/>
        <Route path='/Edit/:firstName/:lastName/:emailId/:contact' element = {<Edit />} />
      </Routes>
      </BrowserRouter>
      
  
  )
}

export default App