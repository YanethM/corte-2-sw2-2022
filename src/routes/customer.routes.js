const express = require("express");
const customer_routes = express.Router();
const customer_model = require("../models/customer.model");

customer_routes.post("/customer", (req, res) => {
  const new_customer = customer_model(req.body);
  new_customer
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

customer_routes.get("/", (req, res) => {
  customer_model
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

customer_routes.get("/:customerId", (req, res) => {
  const { customerId } = req.params;
  customer_model
    .findOne({ _id: customerId })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

customer_routes.put("/:customerId", (req, res) => {
  const { customerId } = req.params;
  const { user_name, contact} = req.body
  customer_model
    .updateOne({ _id: customerId }, { $set: { user_name, contact } })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

customer_routes.delete("/:customerId", (req, res) => {
  const { customerId } = req.params;
  customer_model
    .deleteOne({ _id: customerId })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

module.exports = customer_routes;
