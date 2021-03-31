import React, { useState, useEffect } from "react";
import {
  editCategoryAction,
  getCategoryActionWithId,
  addCategoryAction,
} from "../../action/categoryAction";
import { useSelector, useDispatch } from "react-redux";
import Message from "../general/message";

export default function AddEditCategory(props) {
  const [categoryname, setcategoryname] = useState();
  const [isAdd, setisAdd] = useState(true);
  const [status, setstatus] = useState();
  const [message, setmessage] = useState();

  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  console.log("category", category);

  useEffect(() => {
    if (props.match.params.id) {
      dispatch(getCategoryActionWithId(props.match.params.id));
      setisAdd(false);
    }
    return () => {};
  }, []);

  useEffect(() => {
    setcategoryname(category);
  }, [category]);

  const onSignUp = (e) => {
    e.preventDefault();
    if (categoryname === "") {
      setstatus("error");
      setmessage("Lütfen tüm alanları doldurunuz!");
      return;
    }

    const newCategory = {
      name: categoryname,
    };

    if (isAdd) dispatch(addCategoryAction(newCategory));
    else dispatch(editCategoryAction(props.match.params.id, newCategory));
    setcategoryname("");
    setisAdd(false);
    setstatus("");
    setmessage("");
    props.history.push("/admin/category");
  };

  return (
    <div className="col-lg">
      <div className="card">
        {status ? <Message status={status} message={message} /> : null}
        <div className="card-header">
          <h5 className="m-0">{isAdd ? "Add" : "Update"} Category</h5>
        </div>
        <form onSubmit={onSignUp}>
          <div className="card-body">
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                className="form-control"
                name="categoryname"
                value={categoryname}
                placeholder="Category"
                onChange={(e) => setcategoryname(e.target.value)}
              />
            </div>
          </div>
          {/* /.card-body */}
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              {isAdd ? "Add" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
