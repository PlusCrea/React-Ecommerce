import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckBoxPlus from "../general/checkboxplus";
import { getParametersAction } from "../../action/parametersAction";

function LeftCategoryMenu(props) {
  const [Checked, setChecked] = useState([]);
  const [category, setcategory] = useState([]);
  const [type, settype] = useState([]);
  const [brand, setbrand] = useState([]);
  const [color, setcolor] = useState([]);
  const [size, setsize] = useState([]);
  const [stat, setstat] = useState(false);
  const [ischeck, setischeck] = useState(false);

  const { parameters } = useSelector((state) => state.parameters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParametersAction());
  }, []);

  useEffect(() => {
    var i, j;

    for (i in parameters.category) {
      category.push(parameters.category[i].catname);
      for (j = 0; j < parameters.category[i].types.length; j++) {
        type.push([
          parameters.category[i].catname,
          parameters.category[i].types[j],
        ]);
      }
    }

    for (i in parameters.brand) {
      brand.push({
        _id: parameters.brand[i],
        name: parameters.brand[i],
        isChecked: 0,
      });
    }

    for (i in parameters.color) {
      color.push({
        _id: parameters.color[i],
        name: parameters.color[i],
        isChecked: 0,
      });
    }

    for (i in parameters.size) {
      size.push({
        _id: parameters.size[i],
        name: parameters.size[i],
        isChecked: 0,
      });
    }

    setstat(!stat);
  }, [parameters]);

  const handleCheckChieldElement = (event) => {
    if (event.target.name === "mark") {
      brand.forEach((clr) => {
        if (clr.name === event.target.value) {
          clr.isChecked = event.target.checked ? 1 : 0;
        }
      });
    } else if (event.target.name === "color") {
      color.forEach((clr) => {
        if (clr.name === event.target.value) {
          clr.isChecked = event.target.checked ? 1 : 0;
        }
      });
    } else if (event.target.name === "size") {
      size.forEach((clr) => {
        if (clr.name === event.target.value) {
          clr.isChecked = event.target.checked ? 1 : 0;
        }
      });
    }

    //bu handle ı ve ayrıca bunu cagiranın handlenı atıyor.
    //if (props.handleChange) props.handleChange(event);

    const newChecked = [...Checked];

    const currentIndex = Checked.findIndex(
      (x) => x[event.target.name] === event.target.value
    );

    if (currentIndex === -1) {
      var element = {};
      element[event.target.name] = event.target.value;
      newChecked.push(element);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);

    //console.log("Checked", Checked);
    //console.log("newChecked", newChecked);
    /*
        Burada aldıg degerleri cagırılan yere gonderiyor.
        Burası cok onemli.
    */
    props.handleFilters(newChecked);

    setischeck(!ischeck);
  };

  return (
    <div className="col-lg-3">
      <div className="filter-widget">
        <h4 className="fw-title">Categories</h4>
        <ul className="filter-catagories font-weight-bold">
          {category.map((categoryname, i) => {
            return (
              <li key={i}>
                <a href={`/products/${categoryname}`}>{categoryname}</a>
                <br />
                <ul key={i}>
                  {type
                    .filter((type) => type[0] === categoryname)
                    .map(function (type, j) {
                      return (
                        <li key={j} className="ml-3">
                          <a href={`/products/${categoryname}/${type[1]}`}>
                            {type[1]}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="filter-widget">
        <div className="fw-brand-check">
          <CheckBoxPlus
            title="Brand"
            data={brand}
            name="mark"
            handleChange={handleCheckChieldElement}
          />
        </div>
      </div>
      <div className="filter-widget">
        <h4 className="fw-title">Price</h4>
        <div className="filter-range-wrap">
          <div className="range-slider">
            <div className="price-input">
              <input type="text" id="minamount" />
              <input type="text" id="maxamount" />
            </div>
          </div>
          <div
            className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
            data-min={33}
            data-max={98}
          >
            <div className="ui-slider-range ui-corner-all ui-widget-header" />
            <span
              tabIndex={0}
              className="ui-slider-handle ui-corner-all ui-state-default"
            />
            <span
              tabIndex={0}
              className="ui-slider-handle ui-corner-all ui-state-default"
            />
          </div>
        </div>
        <a href="#" className="filter-btn">
          Filter
        </a>
      </div>
      <div className="filter-widget">
        <div className="fw-color-choose">
          <CheckBoxPlus
            title="Color"
            data={color}
            name="color"
            handleChange={handleCheckChieldElement}
          />
        </div>
      </div>
      <div className="filter-widget">
        <div className="fw-size-choose">
          <CheckBoxPlus
            title="Size"
            data={size}
            name="size"
            handleChange={handleCheckChieldElement}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftCategoryMenu;
