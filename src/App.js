import React from "react";
import CollapsibleExample from "./Components/Nav/Nav";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';


import './App.css';

function App() {
  return (
    <BrowserRouter>
    <CollapsibleExample/>
    <Routes>
    <Route path="/" element={<Home/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
