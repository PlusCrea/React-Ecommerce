import express from "express";

const route = () => {
  const router = new express.Router();

  // Upload Endpoint
  //app.post("/upload", (req, res) => {
  router.route("/add").post(function (req, res) {
    //return res.status(500).send("err");

    if (req.files === null) {
      return res.status(400).json({ msg: "No file uploaded" });
    }

    const file = req.files.file;

    var dir = __dirname.replace("server\\src\\routes", "");

    file.mv(`${dir}client\\public\\uploads\\${file.name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({
        fileName: file.name,
        filePath: `/uploads/${file.name}`,
      });
    });
  });

  return router;
};

export default {
  route,
  routePrefix: "/file",
  //routePrefix: `/${config.version}/auth`
};
