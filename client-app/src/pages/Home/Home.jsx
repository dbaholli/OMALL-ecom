import React from "react";
import BannerComponent from "../../components/Home/BannerComponent";
import SliderComponent from "../../components/Home/SliderComponent";
import Footer from "../../components/shared/Footer/Footer";
import Nav from "../../components/shared/Navbar/Nav";

const HomePage = () => {
  return (
    <div className="home-page">
      <Nav />
      <SliderComponent />
      <BannerComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
