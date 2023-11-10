import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <img src="./images/logo.svg" alt="Logo" />
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              voluptas nisi ipsam totam repudiandae modi.
            </p>
            <div className="d-flex gap-5">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-dribbble"></i>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <ul className="list-unstyled">
              <li>
                <h3>Catalog</h3>
              </li>
              <li>Necklace</li>
              <li>Hoodies</li>
              <li>Jewelry Box</li>
              <li>T-shirt</li>
              <li>Jacket</li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <ul className="list-unstyled">
              <li>
                <h3>ABOUT US</h3>
              </li>
              <li>Our Producers</li>
              <li>Sitemap</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <ul className="list-unstyled">
              <li>
                <h3>CUSTOMER SERVICES</h3>
              </li>
              <li>Contact Us</li>
              <li>Track Your Order</li>
              <li>Product Care & Repair</li>
              <li>Book an Appointment</li>
              <li>Shipping & Returns</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-bg-dark">
        <div className="container py-2 d-flex align-items-center justify-content-between">
          <span>
            © 2022 Tribute , Inc. (<Link to={"/burger"}>Burger Page</Link>)
          </span>
          <img src="./images/payments.png" alt="" />
          <a href="#" className="btn link-light">
            Scroll to top <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
