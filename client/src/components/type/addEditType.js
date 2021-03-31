import React, { useState, useEffect } from "react";
import { getCategoryAction } from "../../action/categoryAction";
import {
  editTypeAction,
  addTypeAction,
  getTypeActionWithId,
} from "../../action/typeAction";
import { useSelector, useDispatch } from "react-redux";
import Message from "../general/message";
import UserComboBox from "../general/combobox";

export default function AddEditType(props) {
  const [typename, settypename] = useState("");
  const [categoryname, setcategoryname] = useState();
  const [isAdd, setisAdd] = useState(true);
  const [status, setstatus] = useState();
  const [message, setmessage] = useState();

  const { category } = useSelector((state) => state.category);
  const { type } = useSelector((state) => state.type);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryAction());

    if (props.match.params.id) {
      dispatch(getTypeActionWithId(props.match.params.id));
      setisAdd(false);
      settypename(type);
    }
    return () => {};
  }, []);

  useEffect(() => {
    settypename(type.name);
    setcategoryname(type.category);
    console.log("Type", categoryname);
    console.log("TypeName", typename);
  }, [type]);

  const onSignUp = (e) => {
    e.preventDefault();
    if (typename === "") {
      setstatus("error");
      setmessage("Lütfen tüm alanları doldurunuz!");
      return;
    }

    const newType = {
      name: typename,
      category: categoryname,
    };

    if (isAdd) dispatch(addTypeAction(newType));
    else dispatch(editTypeAction(props.match.params.id, newType));
    settypename("");
    setisAdd(false);
    setstatus("");
    setmessage("");
    props.history.push("/admin/type");
  };

  return (
    <div className="col-lg">
      <div className="card">
        {status ? <Message status={status} message={message} /> : null}
        <div className="card-header">
          <h5 className="m-0">{isAdd ? "Add" : "Update"} Type</h5>
        </div>
        <form onSubmit={onSignUp}>
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
            <div className="form-group">
              <label>Type</label>
              <input
                type="text"
                className="form-control"
                name="typename"
                value={typename}
                placeholder="Type"
                onChange={(e) => settypename(e.target.value)}
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
