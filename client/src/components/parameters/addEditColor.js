import React, { useState, useEffect } from "react";
//import { getCategoryActionWithId } from "../../action/categoryAction";
import {
  addBrandAction,
  deleteBrandAction,
} from "../../action/parametersAction";
import { useSelector, useDispatch } from "react-redux";
import Message from "../general/message";

export default function AddEditColor(props) {
  const [colorname, setcolorname] = useState();
  const [oldcolorname, setoldcolorname] = useState();
  const [isAdd, setisAdd] = useState(true);
  const [status, setstatus] = useState();
  const [message, setmessage] = useState();

  //const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
   
    if (props.match.params.name) {
      setcolorname(props.match.params.name);
      setoldcolorname(props.match.params.name);
      setisAdd(false);
    }
    return () => {};
  }, []);

  const onSignUp = (e) => {
    e.preventDefault();
    if (colorname === "") {
      setstatus("error");
      setmessage("Lütfen tüm alanları doldurunuz!");
      return;
    }

    const newColor = {
      color: colorname,
    };

    if (isAdd) {
      dispatch(addBrandAction(newColor));
    } else {
      const oldColor = {
        color: oldcolorname,
      };

      dispatch(deleteBrandAction(oldColor));
      dispatch(addBrandAction(newColor));
    }
    setcolorname("");
    setisAdd(false);
    setstatus("");
    setmessage("");
    props.history.push("/admin/color");
  };

  return (
    <div className="col-lg">
      <div className="card">
        {status ? <Message status={status} message={message} /> : null}
        <div className="card-header">
          <h5 className="m-0">{isAdd ? "Add" : "Update"} Color</h5>
        </div>
        <form onSubmit={onSignUp}>
          <div className="card-body">
            <div className="form-group">
              <label>Color</label>
              <input
                type="text"
                className="form-control"
                name="colorname"
                value={colorname}
                placeholder="Color"
                onChange={(e) => setcolorname(e.target.value)}
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
