import React, { useEffect } from "react";
import logo from "../../img/logo.png";
import flag1 from "../../img/flag-1.jpg";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
//import "../../css/style.css";

import "../../css/bootstrap.min.css";
import "../../css/font-awesome.min.css";

export default function Header() {
  //export default class Header extends Component {

  //Burasıbir degisiklik oldugunda render olmadı icin ilk basta logout linki cikmiyor.
  //daha sonra cikiyor. logout a tıklayınca problem yok.
  //logout u daha sonra ayırıp sadece orayı render ettirebiliriz.
  require("../../css/style.css");
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    console.log("Token", token);
  }, [token]);

  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="ht-left">
            <div className="mail-service">
              <i className="fa fa-envelope"></i>
              hello.colorlib@gmail.com
            </div>
            <div className="phone-service">
              <i className="fa fa-phone"></i>
              +65 11.188.888
            </div>
          </div>
          <div className="ht-right">
            {token ? <LogoutButton /> : <LoginButton />}
            <div className="lan-selector">
              <select className="language_drop" name="countries" id="countries">
                <option
                  value="yt"
                  data-image={flag1}
                  data-imagecss="flag yt"
                  data-title="English"
                >
                  English
                </option>
                <option
                  value="yu"
                  data-image={flag1}
                  data-imagecss="flag yu"
                  data-title="Bangladesh"
                >
                  German
                </option>
              </select>
            </div>
            <div className="top-social">
              <a href="/login">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="/login">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="/login">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="/login">
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="inner-header">
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <div className="logo">
                <a href="./index.html">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="advanced-search">
                <button type="button" className="category-btn">
                  All Categories
                </button>
                <div className="input-group">
                  <input type="text" placeholder="What do you need?" />
                  <button type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-item">
        <div className="container">
          <div className="nav-depart">
            <div className="depart-btn">
              <i className="fas fa-bars"></i>
              <span>All departments</span>
              <ul className="depart-hover">
                <li className="active">
                  <a href="/login">Women’s Clothing</a>
                </li>
                <li>
                  <a href="/login">Men’s Clothing</a>
                </li>
                <li>
                  <a href="/login">Underwear</a>
                </li>
                <li>
                  <a href="/login">Kid's Clothing</a>
                </li>
                <li>
                  <a href="/login">Brand Fashion</a>
                </li>
                <li>
                  <a href="/login">Accessories/Shoes</a>
                </li>
                <li>
                  <a href="/login">Luxury Brands</a>
                </li>
                <li>
                  <a href="/login">Brand Outdoor Apparel</a>
                </li>
              </ul>
            </div>
          </div>
          <nav className="nav-menu mobile-menu">
            <ul>
              <li className="active">
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./shop.html">Shop</a>
              </li>
              <li>
                <a href="/login">Collection</a>
                <ul className="dropdown">
                  <li>
                    <a href="/login">Men's</a>
                  </li>
                  <li>
                    <a href="/login">Women's</a>
                  </li>
                  <li>
                    <a href="/login">Kid's</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./blog.html">Blog</a>
              </li>
              <li>
                <a href="./contact.html">Contact</a>
              </li>
              <li>
                <a href="/login">Pages</a>
                <ul className="dropdown">
                  <li>
                    <a href="./blog-details.html">Blog Details</a>
                  </li>
                  <li>
                    <a href="./shopping-cart.html">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="./check-out.html">Checkout</a>
                  </li>
                  <li>
                    <a href="./faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="./register.html">Register</a>
                  </li>
                  <li>
                    <a href="./login.html">Login</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
    </header>
  );
}
