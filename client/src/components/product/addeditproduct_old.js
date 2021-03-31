import React, { useState, useEffect } from "react";
import parameter from "../../data/parameter.json";
import UserComboBox from "../general/combobox";
import { getCategoryAction } from "../../action/categoryAction";
import { uploadFileAction } from "../../action/uploadAction";
import {
  getTypeAction,
  getTypeActionWithCategory,
} from "../../action/typeAction";
import {
  editProductAction,
  getProductActionWithId,
  addProductAction,
} from "../../action/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../util/useForm";
//import renderHTML from "react-render-html";
import EditorPlus from "../general/editorplus";
import CheckBoxPlus from "../general/checkboxplus";
import Compressor from "compressorjs";

export default function AddEditProduct(props) {
  const [values, handleChange] = useForm({
    title: "",
    shortdesc: "",
    price: "",
    mark: "",
    description: "",
  });

  //const socialMediaList = parameter.SocialMedias;
  const Size = parameter.Size;
  var Color = parameter.Color;
  const Mark = parameter.Mark;
  Mark.sort((a, b) => (a.name > b.name ? 1 : -1));
  let colorarr = [...Color];

  const [categoryname, setcategoryname] = useState("");
  const [typename, settypename] = useState("");
  const [desc, setdesc] = useState("");
  const [typedisabled, settypedisabled] = useState(true);
  const [images, setimages] = useState([]);
  const [image, setImage] = useState(false);
  const [selectedcolor, setselectedcolor] = useState([...Color]);
  const [size, setsize] = useState([]);
  const [isAdd, setisAdd] = useState(true);
  const [status, setstatus] = useState();
  const [message, setmessage] = useState();
  const [ischeck, setischeck] = useState(false);
  const [filearr, setFilearr] = useState([]);
  const [filearrnewname, setFilearrnewname] = useState([]);
  let fileObj = [];
  let fileArray = [];

  const { category } = useSelector((state) => state.category);
  const { type } = useSelector((state) => state.type);
  const { products } = useSelector((state) => state.product);
  const fileok = useSelector((state) => state.filename);
  const errmsg = useSelector((state) => state.errmsg);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getTypeAction());
    setdesc("<p>This is the initial content of the editor</p>");

    if (props.match.params.id) {
      dispatch(getProductActionWithId(props.match.params.id));
      setisAdd(false);
    }
  }, []);

  useEffect(() => {
    //File Upload hata yonetimi
    if (fileok !== undefined) console.log("Dosya Upload Succes");
    if (errmsg !== undefined) console.log("Dosya Upload Hata", errmsg);
  }, [errmsg, fileok]);

  useEffect(() => {
    if (products._id) {
      setcategoryname(products.category);
      settypename(products.type);
      values.title = products.title;
      values.shortdesc = products.shortdesc;
      values.price = products.price;
      values.mark = products.mark;
      setdesc(products.desc);
      updatearray(products.color, "color");
      updatearray(products.size, "size");
    }
  }, [products]);

  useEffect(() => {
    if (categoryname !== "") {
      dispatch(getTypeActionWithCategory(categoryname));
      settypedisabled(false);
    } else {
      dispatch(getTypeAction());
      settypedisabled(true);
    }
  }, [categoryname]);

  const handleEditorChange = (content) => {
    setdesc(content);
  };

  const updatearray = (arr, name) => {
    if (name === "color") {
      Color.forEach((clr) => {
        if (arr.includes(clr._id)) clr.isChecked = 1;
      });
    } else if (name === "size") {
      Size.forEach((sz) => {
        if (arr.includes(sz._id)) sz.isChecked = 1;
      });
    }
    setselectedcolor(selectedcolor.concat(Color));
  };
  /*
  const checkboxChangedHandler = (event) => {
    const target = event.target;
    var value = target.value;
    var name = target.name;
    console.log("checkchange", target.checked);

    if (name === "size") {
      if (target.checked) size.push(value);
      else size.splice(size.indexOf(value), 1);
    }
    if (name === "color") {
      if (target.checked) selectedcolor.push(value);
      else selectedcolor.splice(selectedcolor.indexOf(value), 1);
    }

    setstatus("");
    //values.price = 1500;
  };
*/
  const handleCheckChieldElement = (event) => {
    console.log("render", event.target.name);
    if (event.target.name === "color") {
      Color.forEach((clr) => {
        if (clr.name === event.target.value) {
          clr.isChecked = event.target.checked ? 1 : 0;
        }
      });
    } else if (event.target.name === "size") {
      Size.forEach((sz) => {
        if (sz.name === event.target.value) {
          sz.isChecked = event.target.checked ? 1 : 0;
        }
      });
    }
    setischeck(!ischeck);
  };
  /*
  const renderItem = () => {
    {
      console.log("render");

      return Color.map(function (s) {
        return (
          <div className="col-5" key={s._id}>
            <input
              className="form-check-input"
              type="checkbox"
              name="color"
              value={s.name}
              onChange={handleCheckChieldElement}
              checked={s.isChecked}
              //checked={selectedcolor.includes(s.name) ? "checked" : ""}
            />
            <label className="form-check-label">{s.name}</label>
          </div>
        );
      });
    }
    console.log("render Color", selectedcolor);
  };
*/
  const fileChangedHandler = (e) => {
    //function fileChangedHandler(e) {
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
      //setimages([...images, fileObj[0][i]]);
      images.push(URL.createObjectURL(fileObj[0][i]));
    }
    fileObj.length = 0;

    for (let i = 0; i < e.target.files.length; i++) {
      filearr.push(e.target.files[i]);
    }
    setImage(!image);
    //setimages(fileArray);

    console.log("image", images, filearr);
  };

  const onDeleteClick = (e, index) => {
    e.preventDefault();
    images.splice(index, 1);
    setImage(!image);
    //setimages(fileArray);
    console.log("Images", images, filearr);
  };

  const onRegister = (e) => {
    e.preventDefault();

    var selectcolor = Color.filter(function (clr) {
      if (clr.isChecked) return clr.name;
    }).map((cl) => cl.name);

    var selectsize = Size.filter(function (sz) {
      if (sz.isChecked) return sz.name;
    }).map((sze) => sze.name);
    /*
    const formData = new FormData();
    for (var x = 0; x < images.length; x++) {
      formData.append("myImage", images[x]);
    }
*/

    //console.log(newProduct);

    const newProduct = {
      title: values.title,
      shortdesc: values.shortdesc,
      price: values.price,
      mark: values.mark,
      category: categoryname,
      type: typename,
      color: selectcolor,
      size: selectsize,
      images: images,
      desc: desc,
    };

    //return;
    if (isAdd) {
      filearr.map((filenew) => {
        new Compressor(filenew, {
          quality: 0.8,
          maxWidth: 500,
          maxHeight: 500,
          success(result) {
            const formData = new FormData();

            var newfilename = new Date().getTime() + result.name;
            filearrnewname.push(newfilename);
            formData.append("file", result, newfilename);
            dispatch(uploadFileAction(formData));
          },
          error(err) {
            console.log(err.message);
          },
        });
      });

      //Burda atadıgım seyi begenmiyor.
      newProduct.images = filearrnewname;

      dispatch(addProductAction(newProduct));
      console.log("newProduct", newProduct);
    } else {
      //dispatch(editProductAction(props.match.params.id, newProduct));
    }
  };

  return (
    <div className="col-lg">
      <div className="card">
        <div className="card-header">
          <h5 className="m-0">{isAdd ? "Add" : "Update"} Product</h5>
        </div>
        <form onSubmit={onRegister}>
          <div className="card-body">
            <div className="row m-1">
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
            <div className="form-group m-3">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={values.title}
                placeholder="Title"
                onChange={handleChange}
              />
            </div>
            <div className="form-group m-3">
              <label>Short Desc</label>
              <input
                type="text"
                className="form-control"
                name="shortdesc"
                value={values.shortdesc}
                placeholder="Short Desc"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-5">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={values.price}
                placeholder="0.0"
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-5">
              <UserComboBox
                title="Mark"
                datas={Mark}
                name="mark"
                value={values.mark}
                handleChange={handleChange}
              />
            </div>
            {/*}
            <div className="form-group m-3">
              <label>Color </label>
              {renderItem()}
              {/*}
              <ul>
                {colorarr.map((fruite) => {
                  return (
                    <CheckBoxPlus
                      handleCheckChieldElement={handleCheckChieldElement}
                      {...fruite}
                    />
                  );
                })}
              </ul>        
                  </div>
                  {*/}
            <div className="form-group m-3">
              <CheckBoxPlus
                title="Color"
                data={Color}
                name="color"
                handleChange={handleCheckChieldElement}
              />
            </div>
            <div className="form-group m-3">
              <CheckBoxPlus
                title="Size"
                data={Size}
                name="size"
                handleChange={handleCheckChieldElement}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="exampleInputFile">File input</label>
              <div className="input-group">
                <div className="custom-file col-5">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="exampleInputFile"
                    onChange={fileChangedHandler}
                    multiple
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="exampleInputFile"
                  >
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div className="row text-center text-lg-left">
              {images.map((url, i) => {
                return (
                  <div className="col-lg-3 col-md-4 col-6" key={i}>
                    <a
                      href="#"
                      className="d-block mb-4 h-100"
                      onClick={(e) => {
                        onDeleteClick(e, i);
                      }}
                    >
                      <img
                        className="img-fluid img-thumbnail"
                        src={url}
                        alt={i}
                      />
                    </a>
                  </div>
                );
              })}

              <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/sesveuG_rNo/400x300"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/2gYsZUmockw/400x300"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <a href="#" className="d-block mb-4 h-100">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
                    alt=""
                  />
                </a>
              </div>
            </div>
            {/* /gallery end */}
            <div className="form-group mb-3">
              <label>Description</label>
              <EditorPlus
                initialValue={desc}
                onEditorChange={handleEditorChange}
              />
            </div>

            {/* /.col*/}

            {/*editor end*/}
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
