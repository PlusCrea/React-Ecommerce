import express from "express";

import Category from "../models/Category";

const route = () => {
  const router = new express.Router();

  router.route("/").get((req, res) => {
    Category.find(function (err, categories) {
      if (err) {
        console.log(err);
      } else {
        res.json(categories);
      }
    });
  });

  //Id li kaydı buluyor....
  router.route("/:id").get(function (req, res) {
    let id = req.params.id;
    Category.findById(id, function (err, data) {
      res.json(data);
    });
  });

  router.route("/update/:id").post(function (req, res) {
    Category.findById(req.params.id, function (err, data) {
      if (!data) res.status(404).send("data is not found");
      else data.category = req.body.name;

      data
        .save()
        .then((data) => {
          res.json("Mark updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    });
  });

  //Delete

  router.route("/delete/:id").delete((req, res, next) => {
    Category.findByIdAndRemove(req.params.id, (error, data) => {
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
    let data = new Category(req.body);

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
  routePrefix: "/category",
  //routePrefix: `/${config.version}/auth`
};
