// import { useState } from 'react'
import React from "react";
import Home from "./pages/home/Home";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

  return (
	<Home />
    	// <Router>
        //     <Routes>
        //         <Route exact path="/" element={<Home />} />
        //     </Routes>
        // </Router>
  	)
}

export default App
