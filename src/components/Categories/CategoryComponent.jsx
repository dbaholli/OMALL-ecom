import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "../../actions/categoryActions";
import "./styles/_category-component.scss";

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
      <div className='category-container'>
        {loading ? (
          <p className='header-text'>Loading categories...</p>
        ) : error ? null : (
          <>
            {category?.map((categoryData, i) => {
              return (
                <Link
                  className='category-categories'
                  key={i}
                  to={`/produkti/${categoryData.slug}/`}
                >
                  <div className='categoryproduct-img-container'>
                    <img
                      src={`${import.meta.env.VITE_APP_API}${categoryData.image.original.src}`}
                      alt='Othman Home'
                      className='categoryproduct-img'
                      key={i}
                    />
                  </div>
                  <p className='paragraph-text'>{categoryData.title}</p>
                  <p className='price paragraph-text'>{categoryData.price}€</p>
                  <div className='product-actions'>
                    <Link to={`/produkti/${categoryData.slug}/`}>
                      Shiko detajet
                    </Link>
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
