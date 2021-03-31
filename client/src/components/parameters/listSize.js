import React, { useState, useEffect } from "react";
import {
  getParametersAction,
  deleteBrandAction,
} from "../../action/parametersAction";
import { useSelector, useDispatch } from "react-redux";

export default function ListSize() {
  const { parameters } = useSelector((state) => state.parameters);
  const [size, setsize] = useState([]);
  const [status, setstatus] = useState(false);
  const [stat, setstat] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParametersAction());
    setsize([]);
  }, [status]);

  useEffect(() => {
    var i;

    for (i in parameters.size) {
      size.push(parameters.size[i]);
    }
    setstat(!stat);
  }, [parameters]);

  const onDeleteClick = (e, sizename) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      const newsize = {
        size: sizename,
      };
      console.log(newsize);

      dispatch(deleteBrandAction(newsize));
      setstatus(!status);
    }
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Size List</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <a
            type="button"
            href="/admin/addsize"
            className="btn btn-sm btn-primary mb-4"
          >
            Add New Size
          </a>
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Size</th>
                <th>---</th>
              </tr>
            </thead>
            <tbody>
              {size.map((sizename, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{sizename}</td>
                    <td>
                      <a
                        className="btn btn-info btn-sm"
                        href={"/admin/addsize/" + sizename}
                      >
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a
                        className="btn btn-danger btn-sm ml-2"
                        href="/"
                        onClick={(e) => {
                          onDeleteClick(e, sizename);
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
