import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductForm from "./topSellForm.js";
import { Table } from "react-bootstrap";
const ProductsList = (props) => {
  const [products, setProducts] = useState([]);
  const [formValues] = useState({ date: "" });

  const onSubmit = (productObject) => {
    axios
      .post("http://localhost:4000/getTopSellProducts", productObject)
      .then((res) => {
        setProducts(res.data);
        console.log("Data" + res.data);
        // props.history.push("/");
      })
      .catch((err) => alert("Something went wrong", err));
  };

  const DataTable = () => {
    return products.map((res, i) => {
      return (
        <tr>
          <td>{res.date}</td>
          <td>{res.product_name}</td>
          <td>{res.quantity}</td>
          <td>${res.unit_price}</td>
          <td>${res.total_amount}</td>
          <td>{res.status}</td>
        </tr>
      );
    });
  };

  // Return form
  return (
    <div className="table-wrapper">
      <ProductForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Enter
      </ProductForm>
      <Form>
        {/* Redirecting back to home page */}
        <Link className="d-grid gap-2" to="/">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Amount</th>
            <th>Satus</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default ProductsList;
