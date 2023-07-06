import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
//import StudentTableRow from "./productListRow";

const ProductList = () => {
const [products, setProducts] = useState([]);

useEffect(() => {

	axios
	.get("http://localhost:4000/getTodayproducts")
	.then((res) => {
        setProducts(res.data);
        console.log("Data" + res.data);
      })
	// .then(({data}) => {
	// 	setProducts(data);
	// 	//console.log("Data" + data);
	// })
	.catch((error) => {
		console.log("Error", error);
	});
}, []);

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


return (
	<div className="table-wrapper">

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

export default ProductList;
