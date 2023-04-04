import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import { displayBannerAds } from "../../actions/bannerAdsActions";
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

  const dispatch = useDispatch();

  const bannerAds = useSelector((state) => state.bannerAds);
  const { loading, error, bannerAd } = bannerAds;

  useEffect(() => {
    dispatch(displayBannerAds());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p className='paragraph-text'>Loading...</p>
      ) : (
        <div className='banner-component'>
          <Carousel
            className='slider'
            breakPoints={breakPoints}
            ref={carouselRef}
            onPrevStart={onPrevStart}
            onNextStart={onNextStart}
            disableArrowsOnEnd={false}
          >
            {bannerAd[0]?.banner?.map((img, i) => {
              return (
                <div className='img-cont' key={i}>
                  <img
                    className='img'
                    alt=''
                    height='350px'
                    src={`http://127.0.0.1:8000/${img.value.image.original.src}`}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default SliderComponent;
