import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Admin from "./components/admin/Admin";
import ProductDetail from "./components/frontproduct/productdetail";
import Gallery from "./components/frontproduct/productgallery";
import Products from "./components/frontproduct/products";
import Slider from "./components/layout/Slider";
//import ParameterProvider from "../src/context/parameterContext";

/*
ToDo:
 - Parameters type delete de filter olmadı. Bakalım olmazsa baska cozum...
 - Yeni product model create.
 - product ve parameters birlestir.
 - menu slider ve digerleri icin nasıl bir model kuralım.....
*/

function App() {
  let pathName = window.location.pathname;
  let adminhideheaderpath = pathName.includes("admin");
  //console.log("pathName==>", adminhideheaderpath);
  return (
    <Router>
      <div>
        {adminhideheaderpath ? "" : <Header />}
        <Switch>
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={Register} />
          <Route path="/admin/" component={Admin} />
          <Route path="/gallery/" component={Gallery} />
          <Route path="/products/:category/:type" component={Products} />
          <Route path="/products/:category" component={Products} />
          <Route path="/products/" component={Products} />
          <Route path="/productdetail/:id" component={ProductDetail} />
          <Slider />
        </Switch>
        {adminhideheaderpath ? "" : <Footer />}
      </div>
    </Router>
  );
}

export default App;
