import React from "react";
import BannerComponent from "../../components/Home/BannerComponent";
import FeaturedProductsComponent from "../../components/Home/FeaturedProductsComponent";
import SliderComponent from "../../components/Home/SliderComponent";

const HomePage = () => {
  return (
    <div className="home-page">
      <SliderComponent />
      <FeaturedProductsComponent />
      <BannerComponent />
    </div>
  );
};

export default HomePage;
