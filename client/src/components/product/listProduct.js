import React, { useState, useEffect } from "react";
import {
  getProductAction,
  deleteProductAction,
} from "../../action/productAction";
import { useSelector, useDispatch } from "react-redux";

export default function ListProduct() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log("ListGenerale", products);

  useEffect(() => {
    console.log("ListUseEffect", products);

    dispatch(getProductAction());
  }, []);

  const onDeleteClick = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      console.log("Delete", id);
      dispatch(deleteProductAction(id));
    }
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Product List</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <a
            type="button"
            href="/admin/addcategory"
            className="btn btn-sm btn-primary mb-4"
          >
            Add New Product
          </a>
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Type</th>
                <th>Title</th>
                <th>---</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{product.category}</td>
                    <td>{product.type}</td>
                    <td>{product.title}</td>
                    <td>
                      <a
                        className="btn btn-info btn-sm"
                        href={"/admin/updateproduct/" + product._id}
                      >
                        <i className="fas fa-pencil-alt"></i>
                        &nbsp;Edit
                      </a>
                      <a
                        className="btn btn-danger btn-sm ml-2"
                        href="/"
                        onClick={(e) => {
                          onDeleteClick(e, product._id);
                        }}
                      >
                        <i className="fas fa-trash"></i>
                        &nbsp;Delete
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
