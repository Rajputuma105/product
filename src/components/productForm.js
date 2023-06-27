import React from 'react'
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import { FormGroup, FormControl, Button } from "react-bootstrap";
import { FormGroup, Button } from "react-bootstrap";
//import { Link, useNavigate } from 'react-router-dom';
//import { v4 as uuid } from 'uuid';

const ProductForm = (props) => {
	
const validationSchema = Yup.object().shape({
	product_name: Yup.string(),
	quantity: Yup.number(),
	unit_price: Yup.number(),
    status: Yup.string(),
});
console.log(props);
return (
	
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
		<Field name="product_name" type="text" placeholder="Enter Product Name"
				className="form-control" />
			<ErrorMessage
			name="product_name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="quantity" type="number" placeholder="Add Quantity"
				className="form-control" />
			<ErrorMessage
			name="quantity"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="unit_price" type="number" placeholder="Add Unit Price"
				className="form-control" />
			<ErrorMessage
			name="unit_price"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
       
        <FormGroup>
			<Field name="status" type="text" placeholder="Add Status"
				className="form-control" />
			<ErrorMessage
			name="status"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default ProductForm;
