import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import HomePage from "./pages/Home/Home";
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
