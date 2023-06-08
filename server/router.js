const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("./connect");
const user = require("./user");
const order = require("./order_schema");

router.use(authenticate);
router.post("/add-order", (req, res) => {
  const orders = req.body;
  order.insertOne(orders, (error, data) => {
    if (error) res.status(404).send("Error!!");
    res.status(200).send("Order placed");
  });
});

router.get("/get-order", (req, res) => {});

function authenticate(req, res, next) {
  const Bearer = req.headers.Authorization;
  if (typeof Bearer !== "undefined") {
    const token = Bearer.split(" ");
    jwt.verify(token[1], process.env.KEY, (error, data) => {
      if (error) res.status(404).send("Error!!");
      next();
    });
  }
}

module.exports = router;
