import React, { useState, useEffect } from "react";
import {
  editPageAction,
  getPageActionWithId,
  addPageAction,
} from "../../action/pageAction";
import { useSelector, useDispatch } from "react-redux";
import EditorPlus from "../general/editorplus";

export default function AddEditPage(props) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [isAdd, setisAdd] = useState(true);
  const { pages } = useSelector((state) => state.page);

  const dispatch = useDispatch();

  useEffect(() => {
    setdesc("<p>This is the initial content of the editor</p>");

    if (props.match.params.id) {
      dispatch(getPageActionWithId(props.match.params.id));
      setisAdd(false);
    }
  }, []);

  useEffect(() => {
    settitle(pages.title);
    setdesc(pages.desc);
  }, [pages]);
  const handleEditorChange = (content) => {
    setdesc(content);
  };

  const onRegister = (e) => {
    e.preventDefault();

    const newPage = {
      title: title,
      desc: desc,
    };

    //return;
    if (isAdd) {
      dispatch(addPageAction(newPage));
    } else {
      dispatch(editPageAction(props.match.params.id, newPage));
    }
  };

  return (
    <div className="col-lg">
      <div className="card">
        <div className="card-header">
          <h5 className="m-0">{isAdd ? "Add" : "Update"} Page</h5>
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

            <div className="form-group mb-3">
              <label>Description</label>
              <EditorPlus
                initialValue={desc}
                onEditorChange={handleEditorChange}
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
