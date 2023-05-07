import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/shared/Navbar/Nav";
import Footer from "./components/shared/Footer/Footer";
import ScrollToTop from "./scrollToTop";
import PrivateRoute from "./routes/PrivateRoute";
import "./App.scss";
import Loader from "./components/shared/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("./pages/Home/Home"));
const ProductPage = lazy(() => import("./pages/Product/ProductPage"));
const ContactPage = lazy(() => import("./pages/ContactUs/Contact"));
const FaqPage = lazy(() => import("./pages/FAQ/FaqPage"));
const TermsPage = lazy(() => import("./pages/Terms/TermsPage"));
const SecurityPage = lazy(() => import("./pages/Security/SecurityPage"));
const ProfilePage = lazy(() => import("./pages/Profile/ProfilePage"));
const CartPage = lazy(() => import("./pages/Cart/CartPage"));
const CategoryPage = lazy(() => import("./pages/Category/CategoryPage"));
const ShippingPage = lazy(() => import("./pages/Shipping/ShippingPage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <ToastContainer />
        <Nav />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path='/profili' element={<ProfilePage />} />
          </Route>
          <Route exact path='/' element={<HomePage />} />
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
      </Suspense>
    </Router>
  );
};

export default App;
