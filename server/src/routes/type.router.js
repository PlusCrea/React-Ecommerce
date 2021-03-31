import express from "express";

import Type from "../models/Type";

const route = () => {
  const router = new express.Router();

  router.route("/").get((req, res) => {
    Type.find(function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

  //Mark Id li kaydı buluyor....
  router.route("/category/:id").get(function (req, res) {
    let categoryid = req.params.id;
    Type.find({ category: categoryid }, function (err, data) {
      res.json(data);
    });
  });

  //id li kaydı buluyor....
  router.route("/:id").get(function (req, res) {
    let id = req.params.id;
    Type.findById(id, function (err, data) {
      res.json(data);
    });
  });

  router.route("/update/:id").post(function (req, res) {
    Type.findById(req.params.id, function (err, data) {
      if (!data) res.status(404).send("data is not found");
      else {
        data.name = req.body.name;
        data.category = req.body.category;
      }
      data
        .save()
        .then((data) => {
          res.json("Model updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    });
  });

  //Delete

  router.route("/delete/:id").delete((req, res, next) => {
    Type.findByIdAndRemove(req.params.id, (error, data) => {
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
    let data = new Type(req.body);

    data
      .save()
      .then((data) => {
        res.status(200).json({ todo: "todo added successfully" });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });

  return router;
};

export default {
  route,
  routePrefix: "/Type",
  //routePrefix: `/${config.version}/auth`
};
