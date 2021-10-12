const express = require("express");
const Joi = require("@hapi/joi");
const {
  insertItem,
  getItems,
  updateQuantity,
  insertEmployee,
} = require("./db");

const router = express.Router();

const itemSchema = Joi.object().keys({
  name: Joi.string(),
  quantity: Joi.number().integer().min(0),
});

const employeeSchema = Joi.object().keys({
  name: Joi.string(),
  empid: Joi.string(),
  location: Joi.string(),
});

router.post("/item", (req, res) => {
  const item = req.body;
  const result = itemSchema.validate(item);
  if (result.error) {
    console.log(result.error);
    res.status(400).end();
    return;
  }
  insertItem(item)
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});
router.post("/employee", (req, res) => {
  const item = req.body;
  const result = employeeSchema.validate(item);
  if (result.error) {
    console.log(result.error);
    res.status(400).end();
    return;
  }
  insertEmployee(item)
    .then(() => {
      res.status(200);
      res.send(item).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/items", (req, res) => {
  getItems()
    .then((items) => {
      items = items.map((item) => ({
        id: item._id,
        quantity: item.quantity,
        name: item.name,
      }));
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.put("/item/:id/quantity/:quantity", (req, res) => {
  const { id, quantity } = req.params;
  updateQuantity(id, parseInt(quantity))
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;
