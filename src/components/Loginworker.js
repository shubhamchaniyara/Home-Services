// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import * as formik from 'formik';
// import * as yup from 'yup';

// function Loginworker() {
//   const { Formik } = formik;

//   const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     username: yup.string().required(),
//     city: yup.string().required(),
//     state: yup.string().required(),
//     zip: yup.string().required(),
//     terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
//   });

//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         firstName: 'Mark',
//         lastName: 'Otto',
//         username: '',
//         city: '',
//         state: '',
//         zip: '',
//         terms: false,
//       }}
//     >
//       {({ handleSubmit, handleChange, values, touched, errors }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="4" controlId="validationFormik01">
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 onChange={handleChange}
//                 isValid={touched.firstName && !errors.firstName}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormik02">
//               <Form.Label>Last name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 onChange={handleChange}
//                 isValid={touched.lastName && !errors.lastName}
//               />

//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="6" controlId="validationFormik03">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={values.city}
//                 onChange={handleChange}
//                 isInvalid={!!errors.city}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik04">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 value={values.state}
//                 onChange={handleChange}
//                 isInvalid={!!errors.state}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.state}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik05">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Zip"
//                 name="zip"
//                 value={values.zip}
//                 onChange={handleChange}
//                 isInvalid={!!errors.zip}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>
//           <Form.Group className="mb-3">
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               feedbackType="invalid"
//               id="validationFormik0"
//             />
//           </Form.Group>
//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default Loginworker;


// import React, { useState } from 'react';
// import { Container, Form, Button } from 'react-bootstrap';

// const Loginworker = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     number: '',
//     category: '',
//     city: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log(formData);
//   };

//   return (
//     <Container>
//       <h1>My Form</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formFirstname">
//           <Form.Label>First Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="firstname"
//             value={formData.firstname}
//             onChange={handleChange}
//             placeholder="Enter first name"
//           />
//         </Form.Group>

//         <Form.Group controlId="formLastname">
//           <Form.Label>Last Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="lastname"
//             value={formData.lastname}
//             onChange={handleChange}
//             placeholder="Enter last name"
//           />
//         </Form.Group>

//         <Form.Group controlId="formEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//           />
//         </Form.Group>

//         <Form.Group controlId="formNumber">
//           <Form.Label>Number</Form.Label>
//           <Form.Control
//             type="text"
//             name="number"
//             value={formData.number}
//             onChange={handleChange}
//             placeholder="Enter number"
//           />
//         </Form.Group>

//         <Form.Group controlId="formCategory">
//           <Form.Label>Category</Form.Label>
//           <Form.Control
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             placeholder="Enter category"
//           />
//         </Form.Group>

//         <Form.Group controlId="formCity">
//           <Form.Label>City</Form.Label>
//           <Form.Control
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="Enter city"
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default Loginworker;


import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loginworker.css';
import axios from 'axios';

const Loginworker = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password:'',
    number: '',
    category: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/loginworker/addworker', formData , {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        localStorage.setItem('adminEmail', formData.email);
        console.log('Admin logged in and email stored:', formData.email);
      }
      console.log(formData,response);
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        number: '',
        category: '',
        city: '',
      });
    } catch (error) {
      console.error("Error saving task ", error);
      console.log("2");
    }
    console.log(formData);
    
  };

  return (
    <Container className="form-container">
      <h1>My Form</h1>
      <Form onSubmit={handleSubmit} className="custom-form">
        <Form.Group controlId="formFirstname">
          <Form.Control
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Enter first name"
            className="custom-input"
          />
        </Form.Group>

        <Form.Group controlId="formLastname">
          <Form.Control
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter last name"
            className="custom-input"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="custom-input"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="custom-input"
          />
        </Form.Group>

        <Form.Group controlId="formNumber">
          <Form.Control
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter number"
            className="custom-input"
            maxLength="10"
            minLength="10"
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Control
            as="select"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="custom-input"
          >
            <option value="">Select a category</option>
            <option value="AC Technician">AC Technician</option>
            <option value="Refrigerator Technician">Refrigerator Technician</option>
            <option value="TV Technician">TV Technician</option>
            <option value="Washing Machine Technician">Washing Machine Technician</option>
            <option value="RO Technician">RO Technician</option>
            <option value="Electrician">Electrician</option>
            <option value="Plumber">Plumber</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Control
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
            className="custom-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Loginworker;
