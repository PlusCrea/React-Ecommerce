import React, { useState, useEffect } from "react";
import {
  addBrandAction,
  deleteBrandAction,
} from "../../action/parametersAction";
import { useSelector, useDispatch } from "react-redux";
import Message from "../general/message";

export default function AddEditBrand(props) {
  const [brandname, setbrandname] = useState();
  const [oldbrandname, setoldbrandname] = useState();
  const [isAdd, setisAdd] = useState(true);
  const [status, setstatus] = useState();
  const [message, setmessage] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.match.params.name) {
      setbrandname(props.match.params.name);
      setoldbrandname(props.match.params.name);
      setisAdd(false);
    }
    return () => {};
  }, []);

  const onSignUp = (e) => {
    e.preventDefault();
    if (brandname === "") {
      setstatus("error");
      setmessage("Lütfen tüm alanları doldurunuz!");
      return;
    }

    const newBrand = {
      brand: brandname,
    };

    if (isAdd) {
      dispatch(addBrandAction(newBrand));
    } else {
      const oldBrand = {
        brand: oldbrandname,
      };

      dispatch(deleteBrandAction(oldBrand));
      dispatch(addBrandAction(newBrand));
    }

    setbrandname("");
    setisAdd(false);
    setstatus("");
    setmessage("");
    props.history.push("/admin/brand");
  };

  return (
    <div className="col-lg">
      <div className="card">
        {status ? <Message status={status} message={message} /> : null}
        <div className="card-header">
          <h5 className="m-0">{isAdd ? "Add" : "Update"} Brand</h5>
        </div>
        <form onSubmit={onSignUp}>
          <div className="card-body">
            <div className="form-group">
              <label>Brand</label>
              <input
                type="text"
                className="form-control"
                name="brandname"
                value={brandname}
                placeholder="Brand"
                onChange={(e) => setbrandname(e.target.value)}
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
