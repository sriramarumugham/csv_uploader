
const express = require("express");

const path = require("path");

const multer = require("multer");

const bodyParser = require("body-parser");

const File = require("./model/file");

const csv = require("csvtojson");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});

const uploads = multer({ storage: storage });

const expressLayouts = require("express-ejs-layouts");

const app = express();

const PORT = process.env.PORT || 8000;

const db = require("./config/mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "public")));

app.use(expressLayouts);

app.use(express.static("assets"));

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (req, res) {
  File.deleteMany({}, function (err, data) {
    if (err) {
      console.log("Erron in deleting", err);
      return;
    }
    console.log(data);
  });
  return res.render("home");
});

app.post("/file-upload", uploads.single("csv"), function (req, res) {
  csv()
    .fromFile(req.file.path)
    .then((resobj) => {
      File.insertMany(resobj, (err, data) => {
        if (err) {
          console.log("error", err);
          return;
        }
        console.log(data);
      });
      res.render("csv", { csv: resobj });
      res.redirect("back");
    });
});

app.listen(PORT, function (err) {
  if (err) {
    console.log("Couldnt start the express app");
    return;
  }
  console.log("Express app running on port", PORT);
});
