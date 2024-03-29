import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Register/Register';
import ClientSignup from './Components/Client-SignUp/ClientSignup';
import FreelancerSignup from './Components/Freelancer-SignUp/FreelancerSignup';
import Footer from './Components/Footer/Footer';
import Home from './Routes/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/client-signup' element={<ClientSignup/>}/>
          <Route path='/freelancer-signup' element={<FreelancerSignup/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
