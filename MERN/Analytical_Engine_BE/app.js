const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/usersRoutes");
const HttpError = require("./models/http-errors");

const app = express();

app.use(body_parser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  next(new HttpError("No route found", 404));
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occurred!" });
});
