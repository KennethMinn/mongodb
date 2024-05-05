const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test_mongo").then(() => {
  console.log("connect to db");
});
