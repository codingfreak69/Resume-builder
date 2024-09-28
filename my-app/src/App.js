// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './componets/Home';
import Templates from './componets/Template';
import SignUp from './componets/SignUp';
import Login from './componets/Login';
import ForgotPassword from './componets/ForgotPassword';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Templates" element={<Templates />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
