import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LeftCategoryMenu from "./leftcategorymenu";
import { getProductAction } from "../../action/productAction";
import { getCategoryAction } from "../../action/categoryAction";

export default function Products(props) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getProductAction());
    dispatch(getCategoryAction());
  }, []);

  return (
    <section className="product-shop spad page-details">
      <div className="container">
        <div className="row">
          <LeftCategoryMenu />
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-9 order-1 order-lg-2">
                <div className="product-list">
                  <div className="row">
                    {products.map((prdct, i) => {
                      return (
                        <div className="col-lg-4 col-sm-6" key={prdct._id}>
                          <div className="product-item">
                            <div className="pi-pic">
                              <img
                                src={
                                  prdct.images[0]
                                    ? process.env.PUBLIC_URL +
                                      "../../uploads/" +
                                      prdct.images[0]
                                    : "../images/noimage.png"
                                }
                                alt=""
                              />
                            </div>
                            <div className="pi-text">
                              <div className="catagory-name">
                                {category
                                  .filter((cat) => cat._id === prdct.category)
                                  .map((cat) => cat.name)}
                              </div>
                              <a href={"/productdetail/" + prdct._id}>
                                <h5>{prdct.title}</h5>
                              </a>
                              <div className="product-price">
                                ${prdct.price}
                                <span> ${Math.ceil(prdct.price * 1.2)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
