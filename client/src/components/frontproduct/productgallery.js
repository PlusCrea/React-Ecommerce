import React from "react";

export default function ProductGallery() {
  return (
    <section className="product-shop spad page-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-pic-zoom">
                  <img
                    className="product-big-img"
                    src="https://source.unsplash.com/sesveuG_rNo/400x300"
                    alt=""
                  />
                  <div className="zoom-icon">
                    <i className="fa fa-search-plus" />
                  </div>
                </div>
                <div className="product-thumbs">
                  <div className="product-thumbs-track ps-slider owl-carousel">
                    <div
                      className="pt active"
                      data-imgbigurl="https://source.unsplash.com/sesveuG_rNo/400x300"
                    >
                      <img
                        src="https://source.unsplash.com/sesveuG_rNo/400x300"
                        alt=""
                      />
                    </div>
                    <div
                      className="pt"
                      data-imgbigurl="https://source.unsplash.com/AvhMzHwiE_0/400x300"
                    >
                      <img
                        src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
                        alt=""
                      />
                    </div>
                    <div
                      className="pt"
                      data-imgbigurl="https://source.unsplash.com/2gYsZUmockw/400x300"
                    >
                      <img
                        src="https://source.unsplash.com/2gYsZUmockw/400x300"
                        alt=""
                      />
                    </div>
                    <div
                      className="pt"
                      data-imgbigurl="https://source.unsplash.com/2gYsZUmockw/400x300"
                    >
                      <img
                        src="https://source.unsplash.com/2gYsZUmockw/400x300"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-details">
                  <div className="pd-title">
                    <span>oranges</span>
                    <h3>Pure Pineapple</h3>
                    <a href="#" className="heart-icon">
                      <i className="icon_heart_alt" />
                    </a>
                  </div>
                  <div className="pd-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                    <span>(5)</span>
                  </div>
                  <div className="pd-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur ing elit, sed do
                      eiusmod tempor sum dolor sit amet, consectetur adipisicing
                      elit, sed do mod tempor
                    </p>
                    <h4>
                      $495.00 <span>629.99</span>
                    </h4>
                  </div>
                  <div className="pd-color">
                    <h6>Color</h6>
                    <div className="pd-color-choose">
                      <div className="cc-item">
                        <input type="radio" id="cc-black" />
                        <label htmlFor="cc-black" />
                      </div>
                      <div className="cc-item">
                        <input type="radio" id="cc-yellow" />
                        <label htmlFor="cc-yellow" className="cc-yellow" />
                      </div>
                      <div className="cc-item">
                        <input type="radio" id="cc-violet" />
                        <label htmlFor="cc-violet" className="cc-violet" />
                      </div>
                    </div>
                  </div>
                  <div className="pd-size-choose">
                    <div className="sc-item">
                      <input type="radio" id="sm-size" />
                      <label htmlFor="sm-size">s</label>
                    </div>
                    <div className="sc-item">
                      <input type="radio" id="md-size" />
                      <label htmlFor="md-size">m</label>
                    </div>
                    <div className="sc-item">
                      <input type="radio" id="lg-size" />
                      <label htmlFor="lg-size">l</label>
                    </div>
                    <div className="sc-item">
                      <input type="radio" id="xl-size" />
                      <label htmlFor="xl-size">xs</label>
                    </div>
                  </div>
                  <div className="quantity">
                    <div className="pro-qty">
                      <input type="text" defaultValue={1} />
                    </div>
                    <a href="#" className="primary-btn pd-cart">
                      Add To Cart
                    </a>
                  </div>
                  <ul className="pd-tags">
                    <li>
                      <span>CATEGORIES</span>: More Accessories, Wallets &amp;
                      Cases
                    </li>
                    <li>
                      <span>TAGS</span>: Clothing, T-shirt, Woman
                    </li>
                  </ul>
                  <div className="pd-share">
                    <div className="p-code">Sku : 00012</div>
                    <div className="pd-social">
                      <a href="#">
                        <i className="ti-facebook" />
                      </a>
                      <a href="#">
                        <i className="ti-twitter-alt" />
                      </a>
                      <a href="#">
                        <i className="ti-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
