import React, { useState, useEffect } from "react";
import { uploadFileAction } from "../../action/uploadAction";
import config from "../../config";
import {
  editSliderAction,
  getSliderActionWithId,
  addSliderAction,
} from "../../action/sliderAction";
import { useSelector, useDispatch } from "react-redux";
import Compressor from "compressorjs";

export default function AddEditSlider(props) {
  const [imgurl, setimgurl] = useState("");
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [link, setlink] = useState("");
  const [order, setorder] = useState(0);
  const [isAdd, setisAdd] = useState(true);

  const imageurl = `${config.imgUrl}`;

  const fileok = useSelector((state) => state.filename);
  const errmsg = useSelector((state) => state.errmsg);
  const { sliders } = useSelector((state) => state.slider);

  const dispatch = useDispatch();

  useEffect(() => {
    //File Upload hata yonetimi
    if (fileok !== undefined) console.log("Dosya Upload Succes");
    if (errmsg !== undefined) console.log("Dosya Upload Hata", errmsg);
  }, [errmsg, fileok]);

  useEffect(() => {
    if (props.match.params.id) {
      dispatch(getSliderActionWithId(props.match.params.id));
      setisAdd(false);
    }
  }, []);

  useEffect(() => {
    setlink(sliders.link);
    setorder(sliders.order);
    setimgurl(sliders.image);
    setFile(sliders.image);
  }, [sliders]);

  const fileChangedHandler = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setimgurl(URL.createObjectURL(e.target.files[0]));
  };

  const onDeleteClick = (e) => {
    e.preventDefault();
    setFile("");
    setFilename("");
    setimgurl("");
  };

  const onRegister = (e) => {
    e.preventDefault();

    /*
    todo : 
    --update te resim silinecekse veya degisecekse klasorden silinmeli
    --resim degismeyecekse database te guncellenmemeli.
    --guncelleme yapıyor fakat hata veriyor ona bakalım.
     */

    if (link === "" || order === 0 || file === "") {
      //setstatus("error");
      //setmessage("Lütfen tüm alanları doldurunuz!");
      console.log("Hata");

      return;
    }

    const newSlider = {
      link: link,
      order: order,
      image: filename,
    };
    if (isAdd) {
      new Compressor(file, {
        quality: 0.8,
        maxWidth: 500,
        maxHeight: 500,
        success(result) {
          const formData = new FormData();

          var newfilename = new Date().getTime() + result.name;
          formData.append("file", result, newfilename);
          dispatch(uploadFileAction(formData));
          newSlider.image = newfilename;
          dispatch(addSliderAction(newSlider));
        },
        error(err) {
          console.log(err.message);
        },
      });
    } else {
      newSlider.image = "";
      dispatch(editSliderAction(props.match.params.id, newSlider));
    }

    /*
    

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
    */
  };

  return (
    <div className="col-lg">
      <div className="card">
        <div className="card-header">
          <h5 className="m-0">{isAdd ? "Add" : "Update"} Slider</h5>
        </div>
        <form onSubmit={onRegister}>
          <div className="card-body">
            <div className="form-group m-3">
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

            <div className="form-group col-5">
              <label>Order</label>
              <input
                type="number"
                className="form-control"
                name="order"
                value={order}
                placeholder="0.0"
                onChange={(e) => setorder(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="exampleInputFile">Slider Image</label>
              <div className="input-group">
                <div className="custom-file col-5">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="exampleInputFile"
                    onChange={fileChangedHandler}
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
            {file ? (
              <div className="row text-center text-lg-left">
                <div className="col-lg-3 col-md-4 col-6">
                  <a
                    href="#"
                    className="d-block mb-4 h-100"
                    onClick={(e) => {
                      onDeleteClick(e);
                    }}
                  >
                    <img
                      className="img-fluid img-thumbnail"
                      src={isAdd ? imgurl : imageurl + imgurl}
                      alt={filename}
                    />
                  </a>
                </div>
              </div>
            ) : null}
            {/* /gallery end */}

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
