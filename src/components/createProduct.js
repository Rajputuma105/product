// Import Modules
import React, { useState } from "react";
import axios from "axios";
import ProductForm from "./productForm";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [formValues] = useState({
    product_name: "",
    quantity: "",
    unit_price: "",
    status: "",
  });
  // onSubmit handler
  const onSubmit = (productObject) => {
    axios
      .post("http://localhost:4000/addProduct", productObject)

      .then((res) => {
        if (res.status === 200) alert("Product Added successfully");
        else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Return form
  return (
    <div className="table-wrapper">
      <ProductForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Add Product
      </ProductForm>
      <Form>
        {/* Redirecting back to home page */}
        <Link className="d-grid gap-2" to="/">
          <Button variant="info">Home</Button>
        </Link>
      </Form>
    </div>
  );
};
export default AddProduct;
