import express from "express";

import Product from "../models/product";

const route = () => {
  const router = new express.Router();

  router.route("/").get((req, res) => {
    Product.find(function (err, product) {
      if (err) {
        console.log(err);
      } else {
        res.json(product);
      }
    });
  });

  //router.route("/").get((req, res) => {
  router.post("/", (req, res) => {
    console.log(req.body.filters);

    if (req.body.filters === "") {
      Product.find().exec((err, product) => {
        if (err) {
          console.log("err", err);
        } else {
          res.json(product);
          console.log("product", product);
        }
      });
    } else {
      Product.find()
        .where()
        .or(req.body.filters)
        .exec((err, product) => {
          if (err) {
            console.log(err);
          } else {
            res.json(product);
          }
        });
    }
  });

  //Id li kaydı buluyor....
  router.route("/:id").get(function (req, res) {
    let id = req.params.id;
    Product.findById(id, function (err, data) {
      res.json(data);
    });
  });

  router.route("/update/:id").post((req, res, next) => {
    Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
          //console.log(data);
        }
      }
    );
  });

  //Delete

  router.route("/delete/:id").delete((req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
  });

  router.route("/add").post((req, res) => {
    let data = new Product(req.body);
    data
      .save()
      .then((data) => {
        res.status(200).json({ todo: "todo added successfully" });
      })
      .catch((err) => {
        res.status(400).send("adding new todo failed");
      });
  });

  return router;
};

export default {
  route,
  routePrefix: "/product",
};
