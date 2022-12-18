import React from "react";
import BannerComponent from "../../components/Home/BannerComponent";
import FeaturedProductsComponent from "../../components/Home/FeaturedProductsComponent";
import SliderComponent from "../../components/Home/SliderComponent";
import Footer from "../../components/shared/Footer/Footer";
import Nav from "../../components/shared/Navbar/Nav";

const HomePage = () => {
  return (
    <div className="home-page">
      <Nav />
      <SliderComponent />
      <FeaturedProductsComponent />
      <BannerComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
