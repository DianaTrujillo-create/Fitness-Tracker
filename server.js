require("dotenv").config;
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const { MongoServerSelectionError } = require("mongodb");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: true, 
});

require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

app.listen(PORT, () => console.log('listening on port: ', PORT));