import React, { useEffect } from "react";
import { getPageAction, deletePageAction } from "../../action/pageAction";
import { useSelector, useDispatch } from "react-redux";

export default function ListPage() {
  const { pages } = useSelector((state) => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPageAction());
  }, []);

  const onDeleteClick = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      dispatch(deletePageAction(id));
    }
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Page List</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <a
            type="button"
            href="/admin/addpage"
            className="btn btn-sm btn-primary mb-4"
          >
            Add New Page
          </a>
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>---</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{page.title}</td>

                    <td>
                      <a
                        className="btn btn-info btn-sm"
                        href={"/admin/updatepage/" + page._id}
                      >
                        <i className="fas fa-pencil-alt"></i>
                        Edit
                      </a>
                      <a
                        className="btn btn-danger btn-sm ml-2"
                        href="/"
                        onClick={(e) => {
                          onDeleteClick(e, page._id);
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
