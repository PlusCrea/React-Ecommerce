import React, { useState, useEffect } from "react";
import {
  getParametersAction,
  deleteBrandAction,
} from "../../action/parametersAction";
import { useSelector, useDispatch } from "react-redux";

export default function ListCategory() {
  const { parameters } = useSelector((state) => state.parameters);
  const [category, setcategory] = useState([]);
  const [status, setstatus] = useState(false);
  const [stat, setstat] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParametersAction());
    setcategory([]);
  }, [status]);

  useEffect(() => {
    var i;

    for (i in parameters.category) {
      category.push(parameters.category[i].catname);
    }
    setstat(!stat);
  }, [parameters]);

  const onDeleteClick = (e, categoryname) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      const newcategory = {
        category: { catname: categoryname },
        //"category.$.catname": categoryname,
      };

      dispatch(deleteBrandAction(newcategory));
      console.log(newcategory);

      setstatus(!status);
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
              {category.map((categoryname, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{categoryname}</td>
                    <td>
                      <a
                        className="btn btn-info btn-sm"
                        href={"/admin/addcategory/" + categoryname}
                      >
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a
                        className="btn btn-danger btn-sm ml-2"
                        href="/"
                        onClick={(e) => {
                          onDeleteClick(e, categoryname);
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
