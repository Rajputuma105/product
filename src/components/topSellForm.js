import { React} from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import { FormGroup, FormControl, Button } from "react-bootstrap";
import { FormGroup, Button } from "react-bootstrap";
//import { Link, useNavigate } from 'react-router-dom';
//import { v4 as uuid } from 'uuid';
//import DatePicker from "react-datepicker";

//import "react-datepicker/dist/react-datepicker.css";

const ProductForm = (props) => {
    
  const validationSchema = Yup.object().shape({
    date: Yup.string(),
  });
  console.log(props);
  //const [startDate, setStartDate] = useState(new Date());
  //const handleStartChange = date => setStartDate(date);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>

          <Field name="date" type="text" placeholder="Enter date MM/DD/YYYY "
				className="form-control" />
			<ErrorMessage
			name="date"
			className="d-block invalid-feedback"
			component="span"
			/>
            {/* <DatePicker
             showTimeSelect
              selected={startDate}
              onChange={handleStartChange}
              name="date"
              dateFormat="MM/dd/yyyy"
              isClearable
              //type="text"
             // placeholder="Enter date"
              className="form-control"
            />

            
            <ErrorMessage
              name="date"
              className="d-block invalid-feedback"
              component="span"
            /> */}
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
