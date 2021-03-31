import express from "express";

import Slider from "../models/Slider";

const route = () => {
  const router = new express.Router();

  router.route("/").get((req, res) => {
    Slider.find(function (err, categories) {
      if (err) {
        console.log(err);
      } else {
        res.json(categories);
      }
    }).sort({ order: "asc" });
  });

  //Id li kaydı buluyor....
  router.route("/:id").get(function (req, res) {
    let id = req.params.id;
    Slider.findById(id, function (err, data) {
      res.json(data);
      //console.log(data);
    });
  });

  router.route("/update/:id").post((req, res, next) => {
    Slider.findByIdAndUpdate(
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

  //Order Up Down
  router.route("/updown/:id/:order/:updown").post((req, res, next) => {
    var order = req.params.order;
    var nextorder = order;
    req.params.updown === "up" ? nextorder++ : nextorder--;

    //Order a gore kayıt duzenleniyor
    Slider.updateMany(
      { _id: { $exists: true }, order: nextorder.toString() },
      {
        $set: { order: order.toString() },
      },
      (error, data) => {
        if (error) {
          return next(error);
        }
      }
    );

    //Eski kayıt duzenleniyor.
    Slider.findByIdAndUpdate(
      req.params.id,
      {
        $set: { order: nextorder },
      },
      (error, data) => {
        if (error) {
          return next(error);
        }
      }
    );

    Slider.find(function (err, categories) {
      if (err) {
        console.log(err);
      } else {
        res.json(categories);
      }
    }).sort({ order: "asc" });
  });

  //Delete

  router.route("/delete/:id").delete((req, res, next) => {
    Slider.findByIdAndRemove(req.params.id, (error, data) => {
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
    let data = new Slider(req.body);

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
  routePrefix: "/Slider",
  //routePrefix: `/${config.version}/auth`
};
