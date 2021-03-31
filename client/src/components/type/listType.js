import React, { useState, useEffect } from "react";
import {
  getTypeAction,
  deleteTypeAction,
  getTypeActionWithCategory,
} from "../../action/typeAction";
import { getCategoryAction } from "../../action/categoryAction";
import { useSelector, useDispatch } from "react-redux";
import UserComboBox from "../general/combobox";

export default function ListType() {
  const [categoryname, setcategoryname] = useState("");
  const { category } = useSelector((state) => state.category);
  const { type } = useSelector((state) => state.type);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getTypeAction());
  }, []);

  useEffect(() => {
    if (categoryname !== "") dispatch(getTypeActionWithCategory(categoryname));
    else dispatch(getTypeAction());
  }, [categoryname]);

  const onDeleteClick = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      dispatch(deleteTypeAction(id));
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
          <div className="form-group">
            <UserComboBox
              title="Category"
              datas={category}
              name="categoryname"
              handleChange={(e) => setcategoryname(e.target.value)}
              value={categoryname}
            />
          </div>
          <a
            type="button"
            href="/admin/addtype"
            className="btn btn-sm btn-primary mb-4"
          >
            Add New Type
          </a>
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Type</th>
                <th>---</th>
              </tr>
            </thead>
            <tbody>
              {type.map((type, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      {category
                        .filter((category) => category._id === type.category)
                        .map((catg) => catg.name)}
                    </td>
                    <td>{type.name}</td>
                    <td>
                      <a
                        className="btn btn-info btn-sm"
                        href={"/admin/updatetype/" + type._id}
                      >
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a
                        className="btn btn-danger btn-sm ml-2"
                        href="/"
                        onClick={(e) => {
                          onDeleteClick(e, type._id);
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
