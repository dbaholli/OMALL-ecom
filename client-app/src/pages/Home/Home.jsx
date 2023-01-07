import React from "react";
// import BannerComponent from "../../components/Home/BannerComponent";
import BannerComponent2 from "../../components/Home/BannerComponent2";
import FeaturedProductsComponent from "../../components/Home/FeaturedProductsComponent";
import SliderComponent from "../../components/Home/SliderComponent";

const HomePage = () => {
  return (
    <div className="home-page">
      <SliderComponent />
      <FeaturedProductsComponent />
      {/* <BannerComponent /> */}
      <BannerComponent2 />
    </div>
  );
};

export default HomePage;
