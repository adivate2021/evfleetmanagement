import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
