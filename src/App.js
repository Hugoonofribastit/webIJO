import React from "react";
import CollapsibleExample from "./Components/Nav/Nav";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Historia from './Pages/Historia/Historia';
import UPF from "./Pages/UPF/UPF";
import Foot from "./Components/foot/foot";
import Pastoral from "./Pages/Pastoral/Pastoral";
import Parroquia from "./Pages/Parroquia/Parroquia";
import './App.css';
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <BrowserRouter scrollBehavior="smooth" className="flex-rout">
      <ScrollToTop/>
    <CollapsibleExample/>
    <div>
      <Routes>   
      <Route path="/" element={<Home/>}/> 
      <Route path="/historia" element={<Historia/>}/>
      <Route path="/proyecto_ed_pastoral" element={<Pastoral/>}/>
      <Route path="/upf" element={<UPF/>}/>
      <Route path="/parroquia" element={<Parroquia/>}/>
      </Routes>
    </div>
    <Foot/>
    </BrowserRouter>
  );
}

export default App;
