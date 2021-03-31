import React, { useState, useEffect } from "react";
import {
  getSliderAction,
  deleteSliderAction,
  upDownSliderAction,
} from "../../action/sliderAction";
import { useSelector, useDispatch } from "react-redux";

//Todo:
//--sırayı ayarlama var.
//-- yukarı asagi linkleri ile sırayı ayarlamalıyız...
export default function ListSlider() {
  const { sliders } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliderAction());
  }, []);

  const onUpClick = (e, id, order) => {
    e.preventDefault();

    dispatch(upDownSliderAction(id, order, "up", ""));
    console.log("Up", order);
  };

  const onDownClick = (e, id, order) => {
    e.preventDefault();
    dispatch(upDownSliderAction(id, order, "down", ""));
    console.log("Down", order);
  };

  const onDeleteClick = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      dispatch(deleteSliderAction(id));
    }
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Slider List</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <a
            type="button"
            href="/admin/addslider"
            className="btn btn-sm btn-primary mb-4"
          >
            Add New Slider
          </a>
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Order</th>
                <th>---</th>
              </tr>
            </thead>
            <tbody>
              {sliders.map((slider, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{slider.link}</td>
                    <td>
                      <b>{slider.order}</b>
                      <a
                        href=""
                        onClick={(e) => {
                          onDownClick(e, slider._id, slider.order);
                        }}
                      >
                        <i
                          className="fas fa-arrow-alt-circle-down"
                          style={{
                            fontSize: "25px",
                            color: "blue",
                            marginLeft: "20px",
                          }}
                        ></i>
                      </a>
                      <a
                        href=""
                        onClick={(e) => {
                          onUpClick(e, slider._id, slider.order);
                        }}
                      >
                        <i
                          className="fas fa-arrow-alt-circle-up"
                          style={{
                            fontSize: "25px",
                            color: "green",
                            marginLeft: "10px",
                          }}
                        ></i>
                      </a>
                    </td>
                    <td>
                      <a
                        className="btn btn-info btn-sm"
                        href={"/admin/updateslider/" + slider._id}
                      >
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a
                        className="btn btn-danger btn-sm ml-2"
                        href="/"
                        onClick={(e) => {
                          onDeleteClick(e, slider._id);
                        }}
                      >
                        <i className="fas fa-trash"></i>
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* /.card-body */}
      </div>
    </div>
  );
}
