import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";
import ContactPage from "./pages/ContactUs/Contact";
import "./App.scss";
import Nav from "./components/shared/Navbar/Nav";
import Footer from "./components/shared/Footer/Footer";
import Footer3 from "./components/shared/Footer/Footer3";

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/produkti/:id' element={<ProductPage />} />
          <Route exact path='/kontakto' element={<ContactPage />} />
        </Routes>
        {/* <Footer /> */}
        <Footer3 />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
