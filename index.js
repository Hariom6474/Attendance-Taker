const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const port = 3000;

const sequelize = require("./util/database");
const userRoutes = require("./routes/user");
const Class = require("./models/class");
const Students = require("./models/students");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRoutes);

Class.hasMany(Students);
Students.belongsTo(Class);

sequelize
  //   .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("app is listening to port ", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
