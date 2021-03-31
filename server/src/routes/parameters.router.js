import express from "express";

import Parameters from "../models/parameters";

//import path from "path";

const route = () => {
  const router = new express.Router();

  router.route("/").get((req, res) => {
    Parameters.findOne(function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

  //Id li kaydı buluyor....
  router.route("/:id").get(function (req, res) {
    let id = req.params.id;
    Parameters.findById(id, function (err, data) {
      res.json(data);
    });
  });

  router.route("/update/:id").post((req, res, next) => {
    Parameters.findByIdAndUpdate(
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

  router.route("/addbrand").post((req, res, next) => {
    // console.log("AddBrand", req.body);
    Parameters.findOneAndUpdate(
      { _id: { $exists: true } },
      {
        $push: req.body,
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

  //Burası calismiyor testlere devam...
  router.route("/addtype").post((req, res, next) => {
    //console.log("AddTYpe", req.body.category);

    /*
    var result = Parameters.findOne({ "category.catname": "Car2" })
      .updateOne({ $addToSet: { "category.$.types": "Arno2" } })
      .exec();
    res.json(result);
*/

    Parameters.findOne({
      _id: { $exists: true },
      "category.catname": req.body.category,
    })
      .updateOne(
        {
          //$set: req.body,
          $addToSet: { "category.$.types": req.body.type },
          //$set: req.body,
        },
        (error, data) => {
          if (error) {
            return next(error);
          } else {
            res.json(data);
          }
        }
      )
      .exec();
  });

  router.route("/deltype").post((req, res, next) => {
    // console.log("DelTYpe", req.body);
    Parameters.findOne({
      _id: { $exists: true },
      "category.catname": req.body.category,
    }).updateOne(
      {
        $pull: { "category.$.types": req.body.type },
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

  router.route("/updatecategory/:oldname").post((req, res, next) => {
    //console.log("Update", req.body);
    Parameters.findOneAndUpdate(
      { _id: { $exists: true }, category: { catname: req.params.oldname } },
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

  router.route("/delbrand").post((req, res, next) => {
    // console.log("AddBrand", req.body);
    Parameters.findOneAndUpdate(
      { _id: { $exists: true } },
      {
        $pull: req.body,
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

  /*
  router.route("/delbrand").post((req, res, next) => {
    console.log("Brand", req.body);
    Parameters.findOneAndUpdate(
      { _id: { $exists: true } },
      {
        //$pull: req.body,
        $pull: req.body,
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
*/
  router.route("/delete/:id").delete((req, res, next) => {
    Parameters.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
  });
  /*
  router.route("/addbrand").post((req, res) => {
    console.log("Param", req.body);
    Parameters.findOneAndUpdate(
      //{ _id: "5f32c7c3b653aff7663a80a1" },
      { _id: { $exists: true } },
      {
        $set: req.body,
      },
      function (err) {
        console.log("err");
      }
    );
  });
*/
  router.route("/add").post((req, res) => {
    let data = new Parameters(req.body);
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
  routePrefix: "/Parameters",
};
