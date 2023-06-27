const db = require("../models");
const moment = require("moment");
const Product = db.product;

//Add Product
exports.addProduct = async (req, res) => {
  try {
     await Product.create({
      date: moment().format("DD/MM/YYYY"),
      product_name: req.body.product_name,
      quantity: req.body.quantity,
      unit_price: req.body.unit_price,
      total_amount: Number(req.body.quantity * req.body.unit_price),
      status: req.body.status
    });
    return res
      .status(200)
      .json({ status: "true", message: "Product added successfully!!" });
  } catch (error) {
    res.send(error);
    console.log("error", error);
  }
};

// Retrieve Top 5 Products as per dates from the database.
exports.getAllProduct = (req, res) => {
  const date = req.body.date;
  if (!date) {
    res.status(500).send("Please enter date");
  } else {
    Product.aggregate([
      {
        $match: {
          status: "paid",
          date: date,
        },
      },
      {
        $sort: { _id: -1 },
      },
      {
        $limit: 5,
      },
    ])
    .then((data) => {
      res.status(200).json({Message: "Top 5 selling product list as per dates", Statuscode:200, Data:data});
     })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving data.",
        });
      });
  }
};

// Retrieve Today selling Products from the database.
exports.getTodayProduct = (req, res) => {
  Product.aggregate([
    {
      $match: {
        status: "paid",
        date: moment().format("DD/MM/YYYY"),
      },
    },
  ])
  .then((data) => {
    res.status(200).json({Message: "Today selling product list", Statuscode:200, Data:data});
   })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
