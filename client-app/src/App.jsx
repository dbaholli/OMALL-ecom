import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import ContactPage from "./pages/ContactUs/Contact";
import "./App.scss";
import Nav from "./components/shared/Navbar/Nav";
import Footer from "./components/shared/Footer/Footer";

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/kontakto' element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
