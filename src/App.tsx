import React from 'react';
import  { HashRouter, Routes, Route } from "react-router-dom";

import Timeline from './components/Timeline';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Resume from './components/Resume';

import './styles/mainpage.css';
import { GuitarTools } from './components/GuitarTools/GuitarTools';

function App() {
  return (
    <div>
      <HashRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/timeline' element={<Timeline/>}/>
          <Route path='/guitar-tools' element={<GuitarTools/>}/>
          // <Route path='/Resume' element={<Resume/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
