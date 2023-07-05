import React from "react";
import CollapsibleExample from "./Components/Nav/Nav";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Historia from './Pages/Historia/Historia';
import StackedExample from "./Components/SideBar/SideBar";
import Foot from "./Components/foot/foot";



import './App.css';

function App() {
  return (
    <BrowserRouter className="flex-rout">
    <CollapsibleExample/>
    <div>
      
      <Routes>   
      <Route path="/" element={<Home/>}/> 
      <Route path="/historia" element={<Historia/>}/>
      </Routes>
    </div>
    <Foot/>
    </BrowserRouter>
  );
}

export default App;
