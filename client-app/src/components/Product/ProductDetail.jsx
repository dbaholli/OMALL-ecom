import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./styles/_productdetail.scss";

const ProductDetail = () => {
  let productParam = useParams();
  // const product = productsData.find((p) => p.id == productParam.id);
  const [product, setProduct] = useState({});

  console.log(productParam);

  async function getProduct() {
    const response = axios
      // .get("http://127.0.0.1:8000/api/v2/pages/produkti2")
      .get(`http://127.0.0.1:8000/api/v2/pages/${productParam.slug}`)
      .then((response) => {
        setProduct(response.data);
        console.log("produkti:", response.data);
      });
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className='product-detail-component'>
      <div className='product-detail-container'>
        <div className='productimage-container'>
          {product.image?.map((productImg, i) => {
            return (
              <img
                src={`http://127.0.0.1:8000/${productImg.value?.image?.url}`}
                alt='Othman Home'
                className='product-image'
                key={i}
              />
            );
          })}
        </div>
        <div className='product-info'>
          <h1 className='product-title header-text'>{product.title}</h1>
          <p className='product-price paragraph-text'>
            <span>Cmimi:</span> {product.price}€
          </p>
          <p className='product-quantity paragraph-text'>
            <span>Sasia:</span> {product.quanitity}
          </p>
          <h2 className='product-desc paragraph-text'>{product.description}</h2>
          <Link className='shared-button pay-btn'>Paguaj</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
