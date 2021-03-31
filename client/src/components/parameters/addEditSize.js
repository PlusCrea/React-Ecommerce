import React, { useState, useEffect } from "react";
import {
  addBrandAction,
  deleteBrandAction,
} from "../../action/parametersAction";
import { useSelector, useDispatch } from "react-redux";
import Message from "../general/message";

export default function AddEditSize(props) {
  const [sizename, setsizename] = useState();
  const [oldsizename, setoldsizename] = useState();
  const [isAdd, setisAdd] = useState(true);
  const [status, setstatus] = useState();
  const [message, setmessage] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.match.params.name) {
      setsizename(props.match.params.name);
      setoldsizename(props.match.params.name);
      setisAdd(false);
    }
    return () => {};
  }, []);

  const onSignUp = (e) => {
    e.preventDefault();
    if (sizename === "") {
      setstatus("error");
      setmessage("Lütfen tüm alanları doldurunuz!");
      return;
    }

    const newSize = {
      size: sizename,
    };

    if (isAdd) {
      dispatch(addBrandAction(newSize));
    } else {
      const oldSize = {
        size: oldsizename,
      };

      dispatch(deleteBrandAction(oldSize));
      dispatch(addBrandAction(newSize));
    }
    setsizename("");
    setisAdd(false);
    setstatus("");
    setmessage("");
    props.history.push("/admin/size");
  };

  return (
    <div className="col-lg">
      <div className="card">
        {status ? <Message status={status} message={message} /> : null}
        <div className="card-header">
          <h5 className="m-0">{isAdd ? "Add" : "Update"} Size</h5>
        </div>
        <form onSubmit={onSignUp}>
          <div className="card-body">
            <div className="form-group">
              <label>Size</label>
              <input
                type="text"
                className="form-control"
                name="sizename"
                value={sizename}
                placeholder="Size"
                onChange={(e) => setsizename(e.target.value)}
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
