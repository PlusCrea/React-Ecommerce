import React, { useState, useEffect } from "react";
import parameter from "../../data/parameter.json";
import UserComboBox from "../general/combobox";
import { getCategoryAction } from "../../action/categoryAction";
import { uploadFileAction } from "../../action/uploadAction";
import { getTypeAction } from "../../action/typeAction";
import {
  editProductAction,
  getProductActionWithId,
  addProductAction,
} from "../../action/productAction";
import {
  getParametersAction,
} from "../../action/parametersAction";

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
  //var Color = parameter.Color;
  //console.log("Color", Color);
  //console.log("Size", Size);
  const Mark = parameter.Mark;
  Mark.sort((a, b) => (a.name > b.name ? 1 : -1));
  //var Colornew = [];
  //let colorarr = [...Color];

  const [colornew, setcolornew] = useState([]);
  const [size, setsize] = useState([]);
  const [categoryname, setcategoryname] = useState("");
  const [typename, settypename] = useState("");
  const [desc, setdesc] = useState("");
  const [typedisabled, settypedisabled] = useState(true);
  const [images, setimages] = useState([]);
  const [image, setImage] = useState(false);
  const [selectedcolor, setselectedcolor] = useState([...colornew]);
  //const [size, setsize] = useState([]);
  const [isAdd, setisAdd] = useState(true);
  const [status, setstatus] = useState();
  const [message, setmessage] = useState();
  const [ischeck, setischeck] = useState(false);
  const [filearr, setFilearr] = useState([]);
  const [filearrnewname, setFilearrnewname] = useState([]);
  let fileObj = [];
  let fileArray = [];
  const [category, setcategory] = useState([]);
  const [type, settype] = useState([]);
  const [brand, setbrand] = useState([]);
  const [brandname, setbrandname] = useState("");
  const [stat, setstat] = useState(false);
  const { parameters } = useSelector((state) => state.parameters);
  //console.log("parameters", parameters);

  //const { category } = useSelector((state) => state.category);
  //const { type } = useSelector((state) => state.type);
  const { products } = useSelector((state) => state.product);
  const fileok = useSelector((state) => state.filename);
  const errmsg = useSelector((state) => state.errmsg);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getTypeAction());
    setdesc("<p>This is the initial content of the editor</p>");
    dispatch(getParametersAction());
    setcategory([]);

    if (props.match.params.id) {
      dispatch(getProductActionWithId(props.match.params.id));
      setisAdd(false);
    }
  }, []);

  useEffect(() => {
    var i, j;

    for (i in parameters.category) {
      category.push(parameters.category[i].catname);
      //console.log("i", i);
      for (j = 0; j < parameters.category[i].types.length; j++) {
        type.push([
          parameters.category[i].catname,
          parameters.category[i].types[j],
        ]);
      }
    }

    var newtype = type[0];

    settypename(newtype ? Object.entries(type[0])[1][1] : "");
    //console.log(newtype ? Object.entries(type[0])[1][1] : "");

    setcategoryname(category[0]);

    for (i in parameters.brand) {
      brand.push(parameters.brand[i]);
    }

    setbrandname(brand[0]);

    for (i in parameters.color) {
      // colornew.push(parameters.color[i]);

      colornew.push({
        _id: parameters.color[i],
        name: parameters.color[i],
        isChecked: 0,
      });
    }

    for (i in parameters.size) {
      size.push({
        _id: parameters.size[i],
        name: parameters.size[i],
        isChecked: 0,
      });
    }

    //console.log("Colornew", colornew);

    setstat(!stat);
    //setischeck(!ischeck);
  }, [parameters]);

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
  /*
  useEffect(() => {
    if (categoryname !== "") {
      dispatch(getTypeActionWithCategory(categoryname));
      settypedisabled(false);
    } else {
      dispatch(getTypeAction());
      settypedisabled(true);
    }
  }, [categoryname]);
*/
  const handleEditorChange = (content) => {
    setdesc(content);
  };

  const updatearray = (arr, name) => {
    if (name === "color") {
      colornew.forEach((clr) => {
        if (arr.includes(clr._id)) clr.isChecked = 1;
      });
    } else if (name === "size") {
      size.forEach((sz) => {
        if (arr.includes(sz._id)) sz.isChecked = 1;
      });
    }
    setselectedcolor(selectedcolor.concat(colornew));
  };

  const handleCheckChieldElement = (event) => {
    //console.log("render", event.target.name);
    if (event.target.name === "color") {
      colornew.forEach((clr) => {
        if (clr.name === event.target.value) {
          clr.isChecked = event.target.checked ? 1 : 0;
        }
      });
    } else if (event.target.name === "size") {
      size.forEach((sz) => {
        if (sz.name === event.target.value) {
          sz.isChecked = event.target.checked ? 1 : 0;
        }
      });
    }
    setischeck(!ischeck);
  };

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

    //console.log("image", images, filearr);
  };

  const onDeleteClick = (e, index) => {
    e.preventDefault();
    images.splice(index, 1);
    setImage(!image);
    //setimages(fileArray);
    //console.log("Images", images, filearr);
  };

  const onRegister = (e) => {
    e.preventDefault();

    var selectcolor = colornew
      .filter(function (clr) {
        if (clr.isChecked) return clr.name;
      })
      .map((cl) => cl.name);

    var selectsize = size
      .filter(function (sz) {
        if (sz.isChecked) return sz.name;
      })
      .map((sze) => sze.name);

    const newProduct = {
      title: values.title,
      shortdesc: values.shortdesc,
      price: values.price,
      mark: brandname,
      category: categoryname,
      type: typename,
      color: selectcolor,
      size: selectsize,
      images: images,
      desc: desc,
    };

    console.log("newProduct", newProduct);
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
    } else {
      //Update yapıyor ama hata veriyor.
      //Hatayı bulamadım.
      //Resim update i yapmadım....
      dispatch(editProductAction(props.match.params.id, newProduct));
    }
    props.history.push("/admin/product");
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
                <label>Category</label>
                <select
                  className="form-control"
                  name="category"
                  value={categoryname}
                  onChange={(e) => setcategoryname(e.target.value)}
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
              <div className="form-group col-5">
                <label>Type</label>
                <select
                  className="form-control"
                  name="type"
                  value={typename}
                  onChange={(e) => settypename(e.target.value)}
                >
                  {type
                    .filter((type) => categoryname === type[0])
                    .map((type, i) => {
                      return (
                        <option key={i} value={type[1]}>
                          {type[1]}
                        </option>
                      );
                    })}
                </select>
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
              <label>Mark</label>
              <select
                className="form-control"
                name="mark"
                value={brandname}
                onChange={(e) => setbrandname(e.target.value)}
              >
                {brand.map((categoryname, i) => {
                  return (
                    <option key={i} value={categoryname}>
                      {categoryname}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group m-3">
              <CheckBoxPlus
                title="Color New"
                data={colornew}
                name="color"
                handleChange={handleCheckChieldElement}
              />
            </div>

            <div className="form-group m-3">
              <CheckBoxPlus
                title="Size"
                data={size}
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
