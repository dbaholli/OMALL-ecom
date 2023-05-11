import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listAllCategories } from "../../actions/categoryActions";
import "./styles/_category-boxes.scss";

const CategoryBoxes = () => {
  const dispatch = useDispatch();

  const allCategories = useSelector((state) => state.allCategories);
  const { loading, categories } = allCategories;

  useEffect(() => {
    dispatch(listAllCategories());
  }, [dispatch]);

  return (
    <div className='categoryboxes-component component-layout'>
      <h1 className='header-text'>KATEGORITË</h1>
      {loading ? (
        <h1 className='header-text'>Loading...</h1>
      ) : (
        <>
          <div className='categorybox-container'>
            {categories?.map((category, i) => {
              return (
                <Link
                  className='categorybox-item hvr-float'
                  key={i}
                  to={`kategoria/${category?.full_url}`}
                >
                  <div className='categorybox-img'>
                    <img
                      src={`${import.meta.env.VITE_APP_API}${category?.icon}`}
                      height='200px'
                    />
                    <h1 className='category-title paragraph-text'>
                      {category?.name}
                    </h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryBoxes;
