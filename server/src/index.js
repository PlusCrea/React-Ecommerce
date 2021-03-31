import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import AppRouter from "./routes";
import fileUpload from "express-fileupload";

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.set("useCreateIndex", true);

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(fileUpload());
//app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
//app.use(bodyParser.json())

AppRouter(app);

// EJS File upload icin
//app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.send("Eğitimbudur Rest API");
});

app.listen(3300, () => console.log("Çalıştı.."));
