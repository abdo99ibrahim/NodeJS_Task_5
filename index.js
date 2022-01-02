require("dotenv").config({
  path: `${process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env"}`,
});

require("express-async-errors");
const mongoose = require("mongoose");

// app server to be started using express function
const express = require("express");

// import user router
const userRouter = require("./Routes/user");

// import todo router
const todoRouter = require("./Routes/todolist");

//import login user
const authRouter = require("./Routes/auth");
// call express function
// app represented as server
const { logger } = require("./middleware");

//Middleware
// take text of request body + parse into req.body(object)
const app = express();

app.use(express.json()); // parse text from http request body => assign on req.body
app.use(logger); // next is userRouter
app.use("/users", userRouter);
app.use("/todos", todoRouter);
app.use("/auth",authRouter)
// error handling middleware : take 4 parameter
app.use((err, req, res, next) => {
  // server logs
  res.status(500).json({ message: err.message });
});

// make database secure
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    // start backend server on port 3000
    // take port 3000, callback func
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
    console.log("success database");
  })
  .catch(() => {
    console.log("error connecting to mogodb");
  }); // return promise

/*console.log(result);*/

// to make todo collection ==>models بتعامل عن طريق ال
// models ==> javascript object represent database collection
// deal with database using models
