import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import "./styles/_category-component.scss";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../../actions/categoryActions";

const CategoryComponent = () => {
  let categoryParam = useParams();
  const dispatch = useDispatch();

  const singleCategory = useSelector((state) => state.singleCategory);
  const { loading, error, category } = singleCategory;

  useEffect(() => {
    dispatch(listCategory(categoryParam.slug));
  }, [dispatch, categoryParam.slug]);

  return (
    <div className='component-layout category-component'>
      <div className='hotel-container'>
        {loading ? (
          <p className='header-text'>Loading categories...</p>
        ) : error ? (
          <p className='header-text'>No categories {error}</p>
        ) : (
          <>
            {category?.map((categoryData, i) => {
              return (
                <Link className='hotel-categories' key={i} to={`/produkti/${categoryData.slug}/`}>
                  <div className='hotelproduct-img-container'>
                    <img
                      src={`http://127.0.0.1:8000/${categoryData.image.original.src}`}
                      alt='Othman Home'
                      className='hotelproduct-img'
                      key={i}
                    />
                  </div>
                  <p className='paragraph-text'>{categoryData.title}</p>
                  <p className='price paragraph-text'>{categoryData.price}€</p>
                  <div className='product-actions'>
                    <Link to={`/produkti/${categoryData.slug}/`}>Shiko detajet</Link>
                    <BsCartPlusFill />
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
      <Link className='shared-button'>Me shume</Link>
    </div>
  );
};

export default CategoryComponent;
