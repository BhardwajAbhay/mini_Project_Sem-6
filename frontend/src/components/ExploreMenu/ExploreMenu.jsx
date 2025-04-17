import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const handleCategoryClick = (menuName) => {
    setCategory((prev) => (prev === menuName ? "All" : menuName));
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid alias
        reprehenderit tempora, ducimus consequuntur corporis reiciendis ea
        sapiente officiis ipsa unde numquam possimus, exercitationem praesentium
        recusandae mollitia labore sint explicabo.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item) => (
          <div
            key={item.menu_name}
            className="explore-menu-list-item"
            onClick={() => handleCategoryClick(item.menu_name)}
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
