import { React } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const ProductForm = (props) => {
  const validationSchema = Yup.object().shape({
    date: Yup.string(),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field
              name="date"
              type="text"
              placeholder="Enter date DD/MM/YYYY "
              className="form-control"
            />
            <ErrorMessage
              name="date"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>

          <Button variant="danger" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductForm;
