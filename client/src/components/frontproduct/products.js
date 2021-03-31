import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LeftCategoryMenu from "./leftcategorymenu";
import { getProductAction } from "../../action/productAction";

export default function Products(props) {
  const [filteredProducts, setfilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [ischeck, setischeck] = useState(false);

  useEffect(() => {
    const variables = {
      skip: 0,
      limit: 0,
      filters: "",
    };

    getProducts(variables);
  }, []);

  const getProducts = (variables) => {
    dispatch(getProductAction(variables));
  };

  useEffect(() => {
    setfilteredProducts(products);

    if (props.match.params.category) {
      setfilteredProducts(
        products.filter((cat) => cat.category === props.match.params.category)
      );

      if (props.match.params.type) {
        setfilteredProducts(
          products.filter(
            (cat) =>
              cat.category === props.match.params.category &&
              cat.type === props.match.params.type
          )
        );
      }
    }

    // setischeck(!ischeck);
  }, [products]);

  const handleCheckChieldElement = (event) => {
    console.log(event.target.name, event.target.value);
    if (event.target.name === "mark") {
      setfilteredProducts(
        products.filter((prd) => prd.mark === event.target.value)
      );
    }
  };
  const handleFilters = (filters, category) => {
    console.log("filter", filters);

    let where = "";
    var tmp = [];
    filters.map((val, i, filters) => {
      //where += val.toString();
      tmp.push(val);
    });

    const variables = {
      skip: 0,
      limit: 0,
      filters: filters,
    };

    getProducts(variables);
  };

  return (
    <section className="product-shop spad page-details">
      <div className="container">
        <div className="row">
          <LeftCategoryMenu
            //handleChange={handleCheckChieldElement}
            handleFilters={(filters) => handleFilters(filters, "continents")} // gelen degerleri alıyor.
          />
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-9 order-1 order-lg-2">
                <div className="product-list">
                  <div className="row">
                    {filteredProducts.map((prdct, i) => {
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
                                {prdct.category}
                              </div>
                              <a href={"/productdetail/" + prdct._id}>
                                <h5>{prdct.title}</h5>
                              </a>
                              <div className="product-price">
                                ${prdct.price}
                                <span>${Math.ceil(prdct.price * 1.2)}</span>
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
