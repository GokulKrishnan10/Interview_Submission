const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const User = require("./user");
const Order = require("./order_schema");
const bcrypt = require("bcryptjs");
const router = require("./router");
app.use(express.json());
app.use("/protected", router);

app.get("/name/:id", (req, res) => {
  res.status(200).send(`<h1>Hello, ${req.params.id}</h1>`);
});
app.get("/", (req, res) => {
  res.status(200).send(`<h1>Hello, Welcome to server</h1>`);
});
app.post("/add-user", (req, res) => {
  const form = req.body;
  console.log("Logged here", form);
  bcrypt.hash(form["password"], parseInt(process.env.SALT), (error, hash) => {
    if (error) return;
    const user = {
      email: form["email"],
      password: hash,
      phonenumber: form["phonenumber"],
    };
    console.log("Logged here2", user);
    const userdata = new User({ ...user });
    userdata
      .save()
      .then((data) => res.status(200).send("Sucessfully inserted"))
      .catch((error) => res.status(404).send("Error inserting user"));
  });
});

app.post("/login-user", (req, res) => {
  const user = {
    email: req.body["email"],
  };
  User.find(user)
    .then((data) => {
      if (data.length === 0) res.status(404).send("Error!!");
      bcrypt.compare(
        req.body["password"],
        data[0]["password"],
        (error, isMatch) => {
          if (error) res.status(404).send("Unauthorized Error!!");
          if (isMatch) {
            const jwtToken = jwt.sign({ ...data[0] }, process.env.KEY);
            res.status(200).json(jwtToken);
          }
        }
      );
    })
    .catch((error) => res.status(404).send("Error!!"));
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
