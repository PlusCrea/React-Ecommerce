import express from "express";

import Page from "../models/page";

const route = () => {
  const router = new express.Router();

  router.route("/").get((req, res) => {
    Page.find(function (err, page) {
      if (err) {
        console.log(err);
      } else {
        res.json(page);
      }
    });
  });

  //Id li kaydı buluyor....
  router.route("/:id").get(function (req, res) {
    let id = req.params.id;
    Page.findById(id, function (err, data) {
      res.json(data);
    });
  });

  router.route("/update/:id").post((req, res, next) => {
    Page.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      }
    );
  });

  //Delete

  router.route("/delete/:id").delete((req, res, next) => {
    Page.findByIdAndRemove(req.params.id, (error, data) => {
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
  routePrefix: "/page",
};
