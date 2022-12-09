import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-light py-3 sticky-top">
      <nav className="container d-flex align-items-center justify-content-between pb-3 border-bottom">
        <Link to={"/"}>
          <img src="/images/logo.svg" alt="Coral" />
        </Link>

        <ul className="list-unstyled m-0 p-0 d-flex align-items-center">
          <li>
            <a href="/#brands" className="btn">
              Brands
            </a>
          </li>
          <li>
            <a href="/#premium" className="btn">
              Premium
            </a>
          </li>
          <li>
            <a href="/#new-products" className="btn">
              New Products
            </a>
          </li>
          <li>
            <a href="/#best-seller" className="btn">
              Best Sellers
            </a>
          </li>
          <li>
            <Link to={"/search"} className="btn">
              Search <i className="fa-solid fa-search"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
