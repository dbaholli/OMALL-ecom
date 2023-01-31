import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";
import ContactPage from "./pages/ContactUs/Contact";
import "./App.scss";
import Nav from "./components/shared/Navbar/Nav";
import Footer from "./components/shared/Footer/Footer";
import FaqPage from "./pages/FAQ/FaqPage";
import TermsPage from "./pages/Terms/TermsPage";
import SecurityPage from "./pages/Security/SecurityPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import CartPage from "./pages/Cart/CartPage";
import CategoryPage from "./pages/Category/CategoryPage";
import ShippingPage from "./pages/Shipping/ShippingPage";
import ScrollToTop from "./scrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/profili' element={<ProfilePage />} />
        <Route exact path='/produkti/:slug' element={<ProductPage />} />
        <Route exact path='/kategoria/:slug' element={<CategoryPage />} />
        <Route exact path='/shporta/:slug' element={<CartPage />} />
        <Route exact path='/shporta' element={<CartPage />} />
        <Route exact path='/detajet-e-porosise' element={<ShippingPage />} />
        <Route exact path='/pagesa' element={<CartPage />} />
        <Route exact path='/kontakto' element={<ContactPage />} />
        <Route exact path='/faq' element={<FaqPage />} />
        <Route exact path='/termat' element={<TermsPage />} />
        <Route exact path='/siguria' element={<SecurityPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
