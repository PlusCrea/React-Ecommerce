import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LeftCategoryMenu from "./leftcategorymenu";
import { getProductActionWithId } from "../../action/productAction";
import { getCategoryAction } from "../../action/categoryAction";
import { getTypeAction } from "../../action/typeAction";
import renderHTML from "react-render-html";

export default function ProductDetail(props) {
  const { products } = useSelector((state) => state.product);
  const { category } = useSelector((state) => state.category);
  const { type } = useSelector((state) => state.type);
  const [sizearr, setsizearr] = useState([]);

  console.log("Product", products);
  if (products._id) {
    products.size.forEach((element) => {
      console.log(element);
    });
  }
  /*
Todo: price kısmında hata var.
Renkler ve size ları da gosteremedik.
İmage gallery de de problem var.Css veya javascript olmadı sanırım.
productgallery adlı sayfayı denemek icin yaptım.
*/

  const dispatch = useDispatch();

  useEffect(() => {
    if (products._id) {
      //setsizearr(products.size);
      sizearr.push(products.size);
      console.log("size", sizearr);
    }
  }, [products]);

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getTypeAction());
    dispatch(getProductActionWithId(props.match.params.id));
  }, []);
  return (
    <section className="product-shop spad page-details">
      <div className="container">
        <div className="row">
          <LeftCategoryMenu />
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-pic-zoom">
                  <img
                    className="product-big-img"
                    src={
                      products.images
                        ? process.env.PUBLIC_URL +
                          "../../uploads/" +
                          products.images[0]
                        : "../images/noimage.png"
                    }
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
                      data-imgbigurl="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
                    >
                      <img
                        src="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-details">
                  <div className="pd-title">
                    <h3>{products.title}</h3>
                    <a href="#" className="heart-icon">
                      <i className="icon_heart_alt" />
                    </a>
                  </div>

                  <div className="pd-desc">
                    <p>{products.shortdesc}</p>
                    <h4>
                      {process.env.PUBLIC_URL}
                      {products.price}{" "}
                      <span> ${Math.ceil(products.price * 1.2)}</span>
                    </h4>
                  </div>
                  <div className="pd-color">
                    <h6>Color</h6>
                    <div className="pd-color-choose">
                      Blue
                      {products._id
                        ? products.color.forEach((a) => {
                            return <div> {a} </div>;
                          })
                        : "Boş"}
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
                      <label htmlFor="md-size">
                        {sizearr.forEach((a) => {
                          return { a };
                        })}
                      </label>
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
                      <span>CATEGORIES</span>:{" "}
                      {category
                        .filter((cat) => cat._id === products.category)
                        .map((cat) => cat.name)}
                      ,{" "}
                      {type
                        .filter((typ) => typ._id === products.type)
                        .map((typ) => typ.name)}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="product-tab">
              <div className="tab-item">
                <ul className="nav" role="tablist">
                  <li>
                    <a
                      className="active"
                      data-toggle="tab"
                      href="#tab-1"
                      role="tab"
                    >
                      DESCRIPTION
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab-2" role="tab">
                      SPECIFICATIONS
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-item-content">
                <div className="tab-content">
                  <div
                    className="tab-pane fade-in active"
                    id="tab-1"
                    role="tabpanel"
                  >
                    <div className="product-content">
                      <div className="row">
                        <h5>Introduction</h5>
                        {products._id ? renderHTML(products.desc) : ""}
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-2" role="tabpanel">
                    <div className="specification-table">
                      <table>
                        <tbody>
                          <tr>
                            <td className="p-catagory">Price</td>
                            <td>
                              <div className="p-price">$495.00</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-catagory">Add To Cart</td>
                            <td>
                              <div className="cart-add">+ add to cart</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-catagory">Availability</td>
                            <td>
                              <div className="p-stock">22 in stock</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-catagory">Weight</td>
                            <td>
                              <div className="p-weight">1,3kg</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-catagory">Size</td>
                            <td>
                              <div className="p-size">Xxl</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-catagory">Color</td>
                            <td>
                              <span className="cs-color" />
                            </td>
                          </tr>
                          <tr>
                            <td className="p-catagory">Sku</td>
                            <td>
                              <div className="p-code">00012</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
