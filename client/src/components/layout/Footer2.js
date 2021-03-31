import React, { Component } from "react";
import logo from '../../img/footer-logo.png';
import paymentlogo from '../../img/payment-method.png';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-left">
                  <div className="footer-logo">
                    <a href="/login">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                  <ul>
                    <li>Address: 60-49 Road 11378 New York</li>
                    <li>Phone: +65 11.188.888</li>
                    <li>Email: hello.colorlib@gmail.com</li>
                  </ul>
                  <div className="footer-social">
                    <a href="/login">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="/login">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="/login">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="/login">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>              
      
            <div className="col-lg-2 offset-lg-1">
              <div className="footer-widget">
                <h5>Information</h5>
                <ul>
                  <li>
                    <a href="/login">About Us</a>
                  </li>
                  <li>
                    <a href="/login">Checkout</a>
                  </li>
                  <li>
                    <a href="/login">Contact</a>
                  </li>
                  <li>
                    <a href="/login">Serivius</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
                    <div className="footer-widget">
                        <h5>My Account</h5>
                        <ul>
                            <li><a href="/login">My Account</a></li>
                            <li><a href="/login">Contact</a></li>
                            <li><a href="/login">Shopping Cart</a></li>
                            <li><a href="/login">Shop</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="newslatter-item">
                        <h5>Join Our Newsletter Now</h5>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="#" className="subscribe-form">
                            <input type="text" placeholder="Enter Your Mail"/>
                            <button type="button">Subscribe</button>
                        </form>
                    </div>
                </div>
                </div>
          </div>
   <div className="copyright-reserved">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-text">
                            All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a>
                        </div>
                        <div className="payment-pic">
                            <img src={paymentlogo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
      </div>
    );
  }
}
