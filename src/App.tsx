import React from 'react';
import  { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Resume from './components/Resume';

import './styles/mainpage.css';

function App() {
  return (
    <div className="">
      <HashRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          // <Route path='/Resume' element={<Resume/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
