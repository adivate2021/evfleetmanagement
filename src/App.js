import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import React from 'react';
import Manage from './Manage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="/manage" element = {<Manage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
