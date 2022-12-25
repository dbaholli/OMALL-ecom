import React from "react";
import Carousel from "react-elastic-carousel";
import { topOffers } from "./data";
import "./styles/_slider-component.scss";

const SliderComponent = () => {
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo("single-slide".length);
    }
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
  ];

  return (
    <div className='banner-component'>
      <Carousel
        className='slider'
        breakPoints={breakPoints}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
      >
        {topOffers.map((img, i) => {
          return (
            <div className='img-cont' key={i}>
              <div className='img' style={{ content: `url(${img.img})` }}></div>
              <div className='bg'></div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SliderComponent;
