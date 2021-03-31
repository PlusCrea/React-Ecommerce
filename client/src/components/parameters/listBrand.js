import React, { useState, useEffect } from "react";
import {
  getCategoryAction,
  deleteCategoryAction,
} from "../../action/categoryAction";
import {
  getParametersAction,
  deleteBrandAction,
} from "../../action/parametersAction";
import { useSelector, useDispatch } from "react-redux";

export default function ListBrand() {
  const { parameters } = useSelector((state) => state.parameters);
  const { category } = useSelector((state) => state.category);
  const [brand, setbrand] = useState([]);
  const [status, setstatus] = useState(false);
  const [stat, setstat] = useState(false);

  //const brand = [];

  const dispatch = useDispatch();
  //console.log("ListGenerale", parameters);
  // console.log("Category", category);

  useEffect(() => {
    // console.log("ListUseEffect", parameters);

    dispatch(getParametersAction());
    dispatch(getCategoryAction());
    setbrand([]);
  }, [status]);

  useEffect(() => {
    var i;

    for (i in parameters.brand) {
      //console.log("BList", parameters.brand[i]);
      brand.push(parameters.brand[i]);
    }
    setstat(!stat);
    /*
    brand.forEach(function (item, index, array) {
      console.log(item, index);
    });

    brand.map((sweetItem, i) => {
      console.log("P", sweetItem);
    });
    */
  }, [parameters]);

  const onDeleteClick = (e, brandname) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      //console.log("Delete", brandname);
      const newBrand = {
        brand: brandname,
      };
      console.log(newBrand);

      dispatch(deleteBrandAction(newBrand));
      setstatus(!status);
    }
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Brand List</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <a
            type="button"
            href="/admin/addbrand"
            className="btn btn-sm btn-primary mb-4"
          >
            Add New Brand
          </a>
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Brand</th>
                <th>---</th>
              </tr>
            </thead>
            <tbody>
              {brand.map((brandname, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{brandname}</td>
                    <td>
                      <a
                        className="btn btn-info btn-sm"
                        href={"/admin/addbrand/" + brandname}
                      >
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a
                        className="btn btn-danger btn-sm ml-2"
                        href="/"
                        onClick={(e) => {
                          onDeleteClick(e, brandname);
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
