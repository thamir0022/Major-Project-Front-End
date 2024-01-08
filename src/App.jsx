import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Register/Register';
import ClientSignup from './Components/Client-SignUp/ClientSignup';
import FreelancerSignup from './Components/Freelancer-SignUp/FreelancerSignup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/client-signup' element={<ClientSignup/>}/>
          <Route path='/freelancer-signup' element={<FreelancerSignup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
