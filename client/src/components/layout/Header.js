import React, { useEffect } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Header() {
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
              <i className="fas fa-envelope" />
              hello.colorlib@gmail.com
            </div>
            <div className="phone-service">
              <i className="fas fa-phone" />
              +65 11.188.888
            </div>
          </div>
          <div className="ht-right">
            {token ? <LogoutButton /> : <LoginButton />}
            <div className="lan-selector">
              <select
                className="language_drop"
                name="countries"
                id="countries"
                style={{ width: "300px" }}
              >
                <option
                  value="yt"
                  data-image="img/flag-1.jpg"
                  data-imagecss="flag yt"
                  data-title="English"
                >
                  English
                </option>
                <option
                  value="yu"
                  data-image="img/flag-2.jpg"
                  data-imagecss="flag yu"
                  data-title="Bangladesh"
                >
                  German
                </option>
              </select>
            </div>
            <div className="top-social">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest" />
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
                  <img src="img/logo.png" alt="" />
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
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-right col-md-3">
              <ul className="nav-right">
                <li className="heart-icon">
                  <a href="#">
                    <i className="far fa-heart" />
                    <span>1</span>
                  </a>
                </li>
                <li className="cart-icon">
                  <a href="#">
                    <i className="fas fa-shopping-basket" />
                    <span>3</span>
                  </a>
                  <div className="cart-hover">
                    <div className="select-items">
                      <table>
                        <tbody>
                          <tr>
                            <td className="si-pic">
                              <img src="img/select-product-1.jpg" alt="" />
                            </td>
                            <td className="si-text">
                              <div className="product-selected">
                                <p>$60.00 x 1</p>
                                <h6>Kabino Bedside Table</h6>
                              </div>
                            </td>
                            <td className="si-close">
                              <i className="fas fa-times" />
                            </td>
                          </tr>
                          <tr>
                            <td className="si-pic">
                              <img src="img/select-product-2.jpg" alt="" />
                            </td>
                            <td className="si-text">
                              <div className="product-selected">
                                <p>$60.00 x 1</p>
                                <h6>Kabino Bedside Table</h6>
                              </div>
                            </td>
                            <td className="si-close">
                              <i className="fas fa-times" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="select-total">
                      <span>total:</span>
                      <h5>$120.00</h5>
                    </div>
                    <div className="select-button">
                      <a href="#" className="primary-btn view-card">
                        VIEW CARD
                      </a>
                      <a href="#" className="primary-btn checkout-btn">
                        CHECK OUT
                      </a>
                    </div>
                  </div>
                </li>
                <li className="cart-price">$150.00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-item">
        <div className="container">
          <div className="nav-depart">
            <div className="depart-btn">
              <i className="fas fa-bars" />
              <span>All departments</span>
              <ul className="depart-hover">
                <li className="active">
                  <a href="#">Women???s Clothing</a>
                </li>
                <li>
                  <a href="#">Men???s Clothing</a>
                </li>
                <li>
                  <a href="#">Underwear</a>
                </li>
                <li>
                  <a href="#">Kid's Clothing</a>
                </li>
                <li>
                  <a href="#">Brand Fashion</a>
                </li>
                <li>
                  <a href="#">Accessories/Shoes</a>
                </li>
                <li>
                  <a href="#">Luxury Brands</a>
                </li>
                <li>
                  <a href="#">Brand Outdoor Apparel</a>
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
                <a href="#">Collection</a>
                <ul className="dropdown">
                  <li>
                    <a href="#">Men's</a>
                  </li>
                  <li>
                    <a href="#">Women's</a>
                  </li>
                  <li>
                    <a href="#">Kid's</a>
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
                <a href="#">Pages</a>
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
          <div id="mobile-menu-wrap" />
        </div>
      </div>
    </header>
  );
}
