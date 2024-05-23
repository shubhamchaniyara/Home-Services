// import React, { useState, useEffect } from 'react';
// import { Container, Form, Button, Card, Collapse } from 'react-bootstrap';
// import { FaFilter } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Loginworker.css';
// import axios from 'axios';

// const Home = () => {
//   const [formData, setFormData] = useState({
//     category: '',
//     city: '',
//   });
//   const [tasks, setTasks] = useState([]);
//   const [filterVisible, setFilterVisible] = useState(false);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async (category = '', city = '') => {
//     try {
//       let url = 'http://localhost:8080/fetchworker';
//       if (category || city) {
//         url += '?';
//         if (category) url += `category=${category}&`;
//         if (city) url += `city=${city}`;
//       }
//       const response = await axios.get(url);
//       setTasks(response.data); // Update tasks state with fetched data
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching tasks", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchTasks(formData.category, formData.city);
//   };

//   const toggleFilter = () => {
//     setFilterVisible(!filterVisible);
//   };

//   return (
//     <Container className="form-container">
//       <h1>Task Management</h1>
//       <Button variant="outline-primary" onClick={toggleFilter} className="mb-3">
//         <FaFilter /> Filter
//       </Button>
//       <Collapse in={filterVisible}>
//         <div>
//           <Form onSubmit={handleSubmit} className="custom-form">
//             <Form.Group controlId="formCategory">
//               <Form.Control
//                 as="select"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="custom-input"
//               >
//                 <option value="">Select a category</option>
//                 <option value="AC Technician">AC Technician</option>
//                 <option value="Refrigerator Technician">Refrigerator Technician</option>
//                 <option value="TV Technician">TV Technician</option>
//                 <option value="Washing Machine Technician">Washing Machine Technician</option>
//                 <option value="RO Technician">RO Technician</option>
//                 <option value="Electrician">Electrician</option>
//                 <option value="Plumber">Plumber</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formCity">
//               <Form.Control
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Enter city"
//                 className="custom-input"
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Apply Filter
//             </Button>
//           </Form>
//         </div>
//       </Collapse>

//       <div>
//         <h2>Filtered Tasks</h2>
//         <div className="d-flex flex-wrap">
//           {tasks.length > 0 ? (
//             tasks.map((task) => (
//               <Card key={task._id} style={{ width: '18rem', margin: '10px' }}>
//                 <Card.Body>
//                   <Card.Title>{task.firstName} {task.lastName}</Card.Title>
//                   <Card.Text>
//                     <strong>Email:</strong> {task.email}<br />
//                     <strong>Category:</strong> {task.Category}<br />
//                     <strong>City:</strong> {task.City}<br />
//                     <strong>Number:</strong> {task.Number}
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             ))
//           ) : (
//             <p>No tasks found.</p>
//           )}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Collapse } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa'; // Make sure this import is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loginworker.css';
import axios from 'axios';

const Home = () => {
  const [formData, setFormData] = useState({
    category: '',
    city: '',
  });
  const [tasks, setTasks] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async (category = '', city = '') => {
    try {
      let url = 'http://localhost:8080/fetchworker';
      if (category || city) {
        url += '?';
        if (category) url += `category=${category}&`;
        if (city) url += `city=${city}`;
      }
      const response = await axios.get(url);
      setTasks(response.data); // Update tasks state with fetched data
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTasks(formData.category, formData.city);
  };

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <Container className="form-container">
      <h1>Task Management</h1>
      <Button variant="outline-primary" onClick={toggleFilter} className="mb-3">
        <FaFilter /> Filter
      </Button>
      <Collapse in={filterVisible}>
        <div>
          <Form onSubmit={handleSubmit} className="custom-form">
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
              Apply Filter
            </Button>
          </Form>
        </div>
      </Collapse>

      <div>
        <h2>Filtered Workers</h2>
        <div className="d-flex flex-wrap">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Card key={task._id} style={{ width: '18rem', margin: '10px' }}>
                <Card.Body>
                  <Card.Title>{task.firstName} {task.lastName}</Card.Title>
                  <Card.Text>
                    <strong>Email:</strong> {task.email}<br />
                    <strong>Category:</strong> {task.Category}<br />
                    <strong>City:</strong> {task.City}<br />
                    <strong>Number:</strong> {task.Number}
                  </Card.Text>
                  <Button variant="primary" className="mr-2 mb-2">Email</Button>
                  <Button variant="secondary" className="ml-2 mb-2">Chat</Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No tasks found.</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;


