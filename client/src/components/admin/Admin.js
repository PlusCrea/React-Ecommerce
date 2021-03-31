import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// core components
import AdminHeader from "../layout/AdminHeader.js";
import AdminFooter from "../layout/AdminFooter.js";
import AdminSidebar from "../layout/AdminSidebar.js";
import BreadCrumb from "./BreadCrumb";
import AddCategory from "../category/addEditCategory";
import AddType from "../type/addEditType";
import ListCategory from "../category/listCategory";
import ListType from "../type/listType";
import AddProduct from "../product/addeditproduct";
import ListProduct from "../product/listProduct";
import Authorization from "../util/Authorization";
import AddEditSlider from "../slider/addeditslider";
import ListSlider from "../slider/listSlider";
import AddEditPage from "../page/addeditpage";
import ListPage from "../page/listpage";
import AddEditMenu from "../menu/addeditmenu";
import AddEditBrand from "../parameters/addEditBrand";
import ListBrand from "../parameters/listBrand";
import AddEditColor from "../parameters/addEditColor";
import ListColor from "../parameters/listColor";
import ListSize from "../parameters/listSize";
import AddEditSize from "../parameters/addEditSize";
import ListPCategory from "../parameters/listCategory";
import AddEditCategory from "../parameters/addEditCategory";
import ListPType from "../parameters/listType";
import AddPType from "../parameters/addEditType";

//import routes from "routes.js";

export default function Admin() {
  //let pathName = window.location.pathname;
  //console.log("pathName==>", pathName);
  return (
    <>
      <AdminSidebar />
      <AdminHeader />

      <div className="content-wrapper">
        <BreadCrumb />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <Switch>
                {/* 
                <Route path="/admin/addcategory" component={AddCategory} />
                */}
                <Route path="/admin/addptype" component={AddPType} />
                <Route path="/admin/addproduct" component={AddProduct} />
                <Route path="/admin/addpage" component={AddEditPage} />
                <Route path="/admin/addslider" component={AddEditSlider} />
                <Route path="/admin/addmenu" component={AddEditMenu} />
                <Route path="/admin/addbrand/:name" component={AddEditBrand} />
                <Route path="/admin/addbrand" component={AddEditBrand} />
                <Route path="/admin/addcolor/:name" component={AddEditColor} />
                <Route path="/admin/addcolor" component={AddEditColor} />
                <Route path="/admin/addsize/:name" component={AddEditSize} />
                <Route path="/admin/addsize" component={AddEditSize} />
                <Route
                  path="/admin/addcategory/:name"
                  component={AddEditCategory}
                />

                <Route path="/admin/addcategory" component={AddEditCategory} />

                <Route
                  path="/admin/updateslider/:id"
                  component={AddEditSlider}
                />
                <Route path="/admin/updatepage/:id" component={AddEditPage} />
                <Route path="/admin/slider" component={ListSlider} />
                <Route path="/admin/page" component={ListPage} />
                <Route path="/admin/brand" component={ListBrand} />
                <Route path="/admin/color" component={ListColor} />
                <Route path="/admin/size" component={ListSize} />
                <Route path="/admin/category" component={ListPCategory} />
                <Route path="/admin/ptype" component={ListPType} />
                <Route path="/admin/product" component={ListProduct} />
                <Route
                  path="/admin/type"
                  component={Authorization(ListType, "ListType")}
                />
                <Route
                  path="/admin/updatecategory/:id"
                  component={AddCategory}
                />
                <Route
                  path="/admin/updatetype/:category/:type"
                  component={AddPType}
                />
                <Route path="/admin/updateproduct/:id" component={AddProduct} />
                {/* 
                <Route path="/admin/category" component={ListCategory} />
                */}
                <Route path="/" component={BreadCrumb} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
