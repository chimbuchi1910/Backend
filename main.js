const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
connectDB();
const contentRoute = require("./routes/Content");
const bodyparser = require("body-parser");

const Port = process.env.Port;

// let productInfo = [
//   {
//     id: 1,
//     firstName: "Emma",
//     lastName: "Bichoy",
//     title: "title 1",
//     age: 76,
//   },
//   {
//     id: 2,
//     firstName: "Deborah",
//     lastName: "Python",
//     title: "title 2",
//     age: 45,
//   },
//   {
//     id: 3,
//     firstName: "TT",
//     lastName: "Chigo",
//     title: "title 3",
//     age: 21,
//   },
//   {
//     id: 4,
//     firstName: "Python",
//     lastName: "Deborah",
//     title: "title 3",
//     age: 32,
//   },
// ];

// app.get("/", (req, res) => {
//   res.send("Hello and Welcome to Whoba-ogo");
// });
// app.get("/get", (req, res) => {
//   res.json(productInfo);
// });

app.use(bodyparser.json());
app.use("/Content", contentRoute);
app.listen(Port, () => console.log(`Server running on port ${Port}`));
