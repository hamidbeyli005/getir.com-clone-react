import React, { useEffect, useState } from "react";


import categoryData from "../api/categories.json";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categoryData);
  },[]);
  return (
    <div className="Categories">
      <h6>Kategoriler</h6>
      <div className="categoryCards">
      {categories.map((category) => (
        <a href="/" key={category.id} className="categoryCard">
          <img className="categoryImage" src={category.image} alt="" />
          <span className="categoryText">{category.title} </span>
        </a>
      ))}
      </div>
    </div>
  );
}

export default Categories;
