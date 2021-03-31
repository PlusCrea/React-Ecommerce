import React, { useState, useEffect } from "react";
import {
  getTypeAction,
  //deleteTypeAction,
  getTypeActionWithCategory,
} from "../../action/typeAction";
import {
  getParametersAction,
  deleteBrandAction,
  deleteTypeAction,
} from "../../action/parametersAction";
import { getCategoryAction } from "../../action/categoryAction";
import { useSelector, useDispatch } from "react-redux";
import UserComboBox from "../general/combobox";

export default function ListType() {
  const [category, setcategory] = useState([]);
  const [categoryname, setcategoryname] = useState("");
  const [type, settype] = useState([]);
  const { parameters } = useSelector((state) => state.parameters);
  const [status, setstatus] = useState(false);
  const [stat, setstat] = useState(false);
  const dispatch = useDispatch();
  //  console.log("Type", type);

  useEffect(() => {
    dispatch(getParametersAction());
    setcategory([]);
  }, [status]);

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
    setcategoryname(category[0]);

    setstat(!stat);
  }, [parameters]);

  const onDeleteClick = (e, categoryname, typename) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      const delType = {
        type: typename,
        category: categoryname,
      };
      //console.log(typename);
      //return;
      dispatch(deleteTypeAction(delType));
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
            <label>Category</label>
            <select
              className="form-control"
              name="type"
              value={categoryname}
              onChange={(e) => setcategoryname(e.target.value)}
            >
              {category.map((categoryname, i) => {
                return (
                  <option key={i} value={categoryname}>
                    {categoryname}
                  </option>
                );
              })}
            </select>
          </div>
          <a
            type="button"
            href="/admin/addptype"
            className="btn btn-sm btn-primary mb-4"
          >
            Add New Type
          </a>
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>

                <th>Type</th>
                <th>---</th>
              </tr>
            </thead>
            <tbody>
              {type
                .filter((type) => categoryname === type[0])
                .map((type, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>

                      <td>{type[1]}</td>
                      <td>
                        <a
                          className="btn btn-info btn-sm"
                          href={
                            "/admin/updatetype/" + categoryname + "/" + type[1]
                          }
                        >
                          <i className="fas fa-pencil-alt"></i>
                          Edit
                        </a>
                        <a
                          className="btn btn-danger btn-sm ml-2"
                          href="/"
                          onClick={(e) => {
                            onDeleteClick(e, categoryname, type[1]);
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
