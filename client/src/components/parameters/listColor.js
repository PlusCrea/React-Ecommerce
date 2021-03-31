import React, { useState, useEffect } from "react";
import {
  getParametersAction,
  deleteBrandAction,
} from "../../action/parametersAction";
import { useSelector, useDispatch } from "react-redux";

export default function ListColor() {
  const { parameters } = useSelector((state) => state.parameters);
  const [color, setcolor] = useState([]);
  const [status, setstatus] = useState(false);
  const [stat, setstat] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParametersAction());
    setcolor([]);
  }, [status]);

  useEffect(() => {
    var i;

    for (i in parameters.color) {
      color.push(parameters.color[i]);
    }
    setstat(!stat);
  }, [parameters]);

  const onDeleteClick = (e, colorname) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      
      const newColor = {
        color: colorname,
      };
      
      dispatch(deleteBrandAction(newColor));
      setstatus(!status);
    }
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Color List</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <a
            type="button"
            href="/admin/addcolor"
            className="btn btn-sm btn-primary mb-4"
          >
            Add New Color
          </a>
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Color</th>
                <th>---</th>
              </tr>
            </thead>
            <tbody>
              {color.map((colorname, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{colorname}</td>
                    <td>
                      <a
                        className="btn btn-info btn-sm"
                        href={"/admin/addcolor/" + colorname}
                      >
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a
                        className="btn btn-danger btn-sm ml-2"
                        href="/"
                        onClick={(e) => {
                          onDeleteClick(e, colorname);
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
