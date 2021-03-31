import React, { useState, useEffect } from "react";
import { getCategoryAction } from "../../action/categoryAction";
import {
  editTypeAction,
  //addTypeAction,
  getTypeActionWithId,
} from "../../action/typeAction";
import {
  getParametersAction,
  deleteTypeAction,
  addTypeAction,
} from "../../action/parametersAction";
import { useSelector, useDispatch } from "react-redux";
import Message from "../general/message";

export default function AddEditType(props) {
  const [category, setcategory] = useState([]);
  const [categoryname, setcategoryname] = useState("");
  const [type, settype] = useState([]);
  const { parameters } = useSelector((state) => state.parameters);
  const [typename, settypename] = useState("");
  const [oldtypename, setoldtypename] = useState("");
  const [isAdd, setisAdd] = useState(true);
  const [status, setstatus] = useState();
  const [stat, setstat] = useState(false);
  const [combodisabled, setcombodisabled] = useState(false);
  const [message, setmessage] = useState();

  //Burada kaldım. Burası olmadı.
  const dispatch = useDispatch();
  /*
  useEffect(() => {
    dispatch(getParametersAction());
    setcategory([]);
  }, [status]);
*/
  useEffect(() => {
    var i, j;

    for (i in parameters.category) {
      category.push(parameters.category[i].catname);
      for (j = 0; j < parameters.category[i].types.length; j++) {
        type.push([
          parameters.category[i].catname,
          parameters.category[i].types[j],
        ]);
      }
    }
    setcategoryname(category[0]);

    if (props.match.params.category) {
      //dispatch(getTypeActionWithId(props.match.params.category));
      setisAdd(false);
      settypename(props.match.params.type);
      setoldtypename(props.match.params.type);
      setcategoryname(props.match.params.category);
      setcombodisabled(true);
    }

    setstat(!stat);
  }, [parameters]);

  useEffect(() => {
    console.log("Params", props.match.params);

    dispatch(getParametersAction());

    return () => {};
  }, []);

  useEffect(() => {
    settypename(type.name);
    setcategoryname(type.category);
  }, [type]);

  const onSignUp = (e) => {
    e.preventDefault();
    if (typename === "") {
      setstatus("error");
      setmessage("Lütfen tüm alanları doldurunuz!");
      return;
    }

    const newType = {
      type: typename,
      category: categoryname,
    };

    if (isAdd) {
      dispatch(addTypeAction(newType));
    } else {
      const delType = {
        type: oldtypename,
        category: categoryname,
      };
      dispatch(deleteTypeAction(delType));
      dispatch(addTypeAction(newType));
    }
    settypename("");
    setisAdd(false);
    setstatus("");
    setmessage("");
    props.history.push("/admin/ptype");
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
              <label>Category</label>
              <select
                className="form-control"
                name="type"
                value={categoryname}
                onChange={(e) => setcategoryname(e.target.value)}
                disabled={combodisabled}
              >
                {category.map((categoryname, i) => {
                  return (
                    <option key={i} value={categoryname}>
                      {categoryname}
                    </option>
                  );
                })}
              </select>
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
