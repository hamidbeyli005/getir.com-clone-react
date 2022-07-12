import React, { useEffect, useState } from "react";
import productsData from "../api/products.json";

function Favorites() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productsData);
  }, []);
  return (
    <div className="Favorites">
      <h6>Favoriler</h6>
      <div className="products">
        {products.map((product) => (
          <a href="/" key={product.id} className="productCard">
            <div className="img">
              <img className="productImage" src={product.image} alt="" />
            </div>
            <span className="productPrice"> ${product.price} </span>
            <span className="productText">{product.title} </span>
            <span className="productAlt">{product.alt} </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
