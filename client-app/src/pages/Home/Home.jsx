import React from "react";
import Banner from "../../components/Home/Banner";
import Footer from "../../components/shared/Footer/Footer";
import Nav from "../../components/shared/Navbar/Nav";

const HomePage = () => {
  return (
    <>
      <SliderComponent />
      <FeaturedProductsComponent />
      <BannerComponent />
    </>
  );
};

export default HomePage;
