import PropTypes from "prop-types";
import React, { useState } from "react";
import './Menu.scss';

export default function Menu({ menu: { items } }) {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="main-menu self-center hidden md:block">
      <ul className="nav flex space-x-275 justify-content-center">
        <li
          className="nav-item linavbar"
          onMouseEnter={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
        >
          <button className="nav-link hover:underline">
            Categorías
          </button>
          {showCategories && (
            <ul className="dropdown-menu">
              {items.map((item, index) => (
                <li key={index} className="dropdown-item">
                  <a href={item.url} className="dropdown-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="nav-item linavbar">
          <a className="nav-link hover:underline" href={"/page/contact"}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};


export const layout = {
  areaId: "header",
  sortOrder: 1,
};

export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
}`;
