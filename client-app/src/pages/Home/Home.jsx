import React from "react";
import BannerComponent2 from "../../components/Home/BannerComponent2";
import FeaturedProductsComponent from "../../components/Home/FeaturedProductsComponent";
import SliderComponent from "../../components/Home/SliderComponent";
import CategoryBoxes from "../../components/TopCategories/CategoryBoxes";

const HomePage = () => {
  return (
    <div className='home-page'>
      <SliderComponent />
      <FeaturedProductsComponent />
      <CategoryBoxes />
      <BannerComponent2 />
    </div>
  );
};

export default HomePage;
