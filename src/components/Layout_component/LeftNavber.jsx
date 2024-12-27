import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../CSS/component.css"

const LeftNavber = () => {
  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  console.log(categories);
  return (
    <div>
      <h2>CATEGORIES</h2>
      <div className="grid grid-cols-1 gap-2 mt-5">
        {categories.map((category) => (
          <NavLink
            to={`category/${category.category_id}`}
            className="btn btn-primary"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavber;
