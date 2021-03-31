import React, { useState, useEffect } from "react";
import {
  getCategoryAction,
  deleteCategoryAction,
} from "../../action/categoryAction";
import { useSelector, useDispatch } from "react-redux";

export default function ListCategory() {
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  console.log("ListGenerale", category);

  useEffect(() => {
    console.log("ListUseEffect", category);

    dispatch(getCategoryAction());
  }, []);

  const onDeleteClick = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      console.log("Delete", id);
      dispatch(deleteCategoryAction(id));
    }
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Category List</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <a
            type="button"
            href="/admin/addcategory"
            className="btn btn-sm btn-primary mb-4"
          >
            Add New Category
          </a>
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>---</th>
              </tr>
            </thead>
            <tbody>
              {category.map((category, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{category.name}</td>
                    <td>
                      <a
                        className="btn btn-info btn-sm"
                        href={"/admin/updatecategory/" + category._id}
                      >
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a
                        className="btn btn-danger btn-sm ml-2"
                        href="/"
                        onClick={(e) => {
                          onDeleteClick(e, category._id);
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
