import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import HomePage from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";
import "./App.scss";
import Nav from "./components/shared/Navbar/Nav";
import Footer from "./components/shared/Footer/Footer";

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/produkti/:id' element={<ProductPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
