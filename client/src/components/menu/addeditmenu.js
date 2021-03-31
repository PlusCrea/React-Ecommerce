import React, { useState, useEffect } from "react";
import {
  editMenuAction,
  getMenuActionWithId,
  addMenuAction,
} from "../../action/menuAction";
import { getCategoryAction } from "../../action/categoryAction";
import { getPageAction } from "../../action/pageAction";
import {
  getTypeAction,
  getTypeActionWithCategory,
} from "../../action/typeAction";

import { useSelector, useDispatch } from "react-redux";
import parameter from "../../data/parameter.json";
import UserComboBox from "../general/combobox";

export default function AddEditMenu(props) {
  const [title, settitle] = useState("");
  const [menutypename, setmenutypename] = useState("");
  const [isAdd, setisAdd] = useState(true);
  const [categoryname, setcategoryname] = useState("");
  const [typename, settypename] = useState("");
  const [pagename, setpagename] = useState("");
  const [typedisabled, settypedisabled] = useState(true);
  const [link, setlink] = useState("");
  const [categoryshow, setcategoryshow] = useState(false);
  const [pageshow, setpageshow] = useState(false);
  const [linkshow, setlinkshow] = useState(false);

  const { menus } = useSelector((state) => state.menu);
  const { pages } = useSelector((state) => state.page);
  const { category } = useSelector((state) => state.category);
  const { type } = useSelector((state) => state.type);

  const MenuType = parameter.MenuType;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getTypeAction());
    dispatch(getPageAction());
    if (props.match.params.id) {
      dispatch(getMenuActionWithId(props.match.params.id));
      setisAdd(false);
    }
  }, []);

  useEffect(() => {
    if (menutypename === "") {
      setcategoryshow(false);
      setpageshow(false);
      setlinkshow(false);
    } else if (menutypename === "Product Category") {
      setcategoryshow(true);
      setpageshow(false);
      setlinkshow(false);
    } else if (menutypename === "Page") {
      setcategoryshow(false);
      setpageshow(true);
      setlinkshow(false);
    } else if (menutypename === "Link") {
      setcategoryshow(false);
      setpageshow(false);
      setlinkshow(true);
    }
  }, [menutypename]);

  useEffect(() => {
    settitle(menus.title);
  }, [menus]);

  useEffect(() => {
    if (categoryname !== "") {
      dispatch(getTypeActionWithCategory(categoryname));
      settypedisabled(false);
    } else {
      dispatch(getTypeAction());
      settypedisabled(true);
    }
  }, [categoryname]);

  const onRegister = (e) => {
    e.preventDefault();

    const newMenu = {
      title: title,
      //desc: desc,
    };

    //return;
    if (isAdd) {
      dispatch(addMenuAction(newMenu));
    } else {
      dispatch(editMenuAction(props.match.params.id, newMenu));
    }
  };

  return (
    <div className="col-lg">
      <div className="card">
        <div className="card-header">
          <h5 className="m-0">{isAdd ? "Add" : "Update"} Menu</h5>
        </div>
        <form onSubmit={onRegister}>
          <div className="card-body">
            <div className="form-group m-3">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={title}
                placeholder="Title"
                onChange={(e) => settitle(e.target.value)}
              />
            </div>
            <div className="form-group col-5">
              <UserComboBox
                title="MenuType"
                datas={MenuType}
                name="menutypename"
                value={menutypename}
                handleChange={(e) => setmenutypename(e.target.value)}
              />
            </div>
            <div
              className="row m-1"
              style={{
                display: categoryshow ? "" : "none",
              }}
            >
              <div className="form-group col-5">
                <UserComboBox
                  title="Category"
                  datas={category}
                  name="categoryname"
                  handleChange={(e) => setcategoryname(e.target.value)}
                  value={categoryname}
                />
              </div>
              <div className="form-group col-5">
                <UserComboBox
                  title="Type"
                  datas={type}
                  name="typename"
                  handleChange={(e) => settypename(e.target.value)}
                  value={typename}
                  disabled={typedisabled}
                />
              </div>
            </div>
            <div
              className="form-group m-2"
              style={{
                display: pageshow ? "" : "none",
              }}
            >
              <UserComboBox
                title="Page"
                datas={pages}
                name="pagename"
                handleChange={(e) => setpagename(e.target.value)}
                value={pagename}
              />
            </div>
            <div
              className="form-group m-2"
              style={{
                display: linkshow ? "" : "none",
              }}
            >
              <label>Link</label>
              <input
                type="text"
                className="form-control"
                name="link"
                value={link}
                placeholder="Link"
                onChange={(e) => setlink(e.target.value)}
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
