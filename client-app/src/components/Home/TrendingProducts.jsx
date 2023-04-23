import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTrendingProducts } from "../../actions/productActions";
import "./styles/_trending-products.scss";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

const TrendingProducts = () => {
  const dispatch = useDispatch();

  const trendingProductsList = useSelector(
    (state) => state.trendingProductsList
  );

  const { loading, trendingProducts } = trendingProductsList;

  useEffect(() => {
    dispatch(listTrendingProducts());
  }, []);

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
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 550,
      itemsToShow: 2,
    },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 3 },
  ];

  function calculatePriceChangePercentage(oldPrice, newPrice) {
    const priceChange = newPrice - oldPrice;
    const percentageChange = (priceChange / oldPrice) * 100;
    return `${percentageChange.toFixed(2)}%`;
  }

  return (
    <div className='trending-products-component component-layout'>
      {loading ? (
        <h1 className='header-text'>Loading...</h1>
      ) : (
        <div className='trending-products-container'>
          {trendingProducts?.map((trendingData, i) => {
            return (
              <>
                <div className='trending-product-header'>
                  <h1 className='header-text'>{trendingData.title}</h1>
                </div>

                <div className='trending-slider' key={i}>
                  <Carousel
                    className='slider'
                    breakPoints={breakPoints}
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    disableArrowsOnEnd={false}
                    enableAutoPlay={true}
                    autoPlaySpeed={1500}
                  >
                    {trendingData.trending_products.map((props, i) => {
                      return (
                        <Link
                          className='trending-item'
                          key={i}
                          to={`/produkti/${props?.value.product.product_slug}`}
                        >
                          <div className='product-badge'>ZBRITJE</div>
                          <div className='trending-image-container'>
                            <img
                              src={`${import.meta.env.VITE_APP_API}${props.value.product.image[0].url.src}`}
                              alt=''
                              height='350px'
                            />
                          </div>
                          <div className='trending-info'>
                            <h1 className='paragraph-text'>
                              {props.value.product.title}
                            </h1>
                            <div className='paragraph-text price-sale-amount'>
                              {props.value.product.price_with_sale
                                ? calculatePriceChangePercentage(
                                    props?.value.product.price,
                                    props?.value.product.price_with_sale
                                  )
                                : null}
                            </div>
                            <p
                              className={`product-price paragraph-text ${
                                props?.value.product.price_with_sale
                                  ? "active-sale"
                                  : ""
                              }`}
                            >
                              €{props?.value.product.price}
                            </p>
                            {props?.value.product.price_with_sale != null ||
                            0 ? (
                              <p className='product-sale-price paragraph-text'>
                                <span className='price sale-price'>
                                  €{props?.value.product.price_with_sale}
                                </span>
                              </p>
                            ) : null}
                          </div>
                        </Link>
                      );
                    })}
                  </Carousel>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TrendingProducts;
