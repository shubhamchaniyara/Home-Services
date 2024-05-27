import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Collapse, Modal } from 'react-bootstrap';
import { FaFilter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Home = () => {
  const [formData, setFormData] = useState({
    category: '',
    city: '',
  });
  const [tasks, setTasks] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState(null);

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
      setTasks(response.data);
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

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleChatClick = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleCardClick = (task) => {
    setSelectedTask(task);
    console.log(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTask(null);
  };

  const handleApplyClick = async () => {
    setShowMap(true);
  };

  const MapClickHandler = ({ setLocation }) => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        console.log(location);
        setLocation({ lat, lng });
      },
    });
    return null;
  };

  const handleSaveLocation = async () => {
    try {
      await axios.post('http://localhost:8080/apply', {
        taskId: selectedTask._id,
        userId: 'sampleUserId', // Replace with actual user ID
        location,
      });
      alert('Applied for the task!');
      setShowMap(false);
      handleCloseModal();
    } catch (error) {
      console.error('Error applying for task:', error);
      alert('Failed to apply for the task.');
    }
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
              <Card 
                key={task._id} 
                style={{ width: '18rem', margin: '10px', cursor: 'pointer' }} 
                onClick={() => handleCardClick(task)}
              >
                <Card.Body>
                  <Card.Title>{task.firstName} {task.lastName}</Card.Title>
                  <Card.Text>
                    <strong>Email:</strong> {task.email}<br />
                    <strong>Category:</strong> {task.Category}<br />
                    <strong>City:</strong> {task.City}<br />
                    <strong>Number:</strong> {task.Number}
                  </Card.Text>
                  <div className="button-group">
                    <Button 
                      variant="primary" 
                      className="mb-2 d-flex align-items-center mr-2" 
                      onClick={(e) => { e.stopPropagation(); handleEmailClick(task.email); }}
                    >
                      <FaEnvelope className="mr-2" /> Email
                    </Button>
                    <Button 
                      variant="success" 
                      className="mb-2 d-flex align-items-center" 
                      onClick={(e) => { e.stopPropagation(); handleChatClick(task.Number); }}
                    >
                      <FaWhatsapp className="mr-2" /> Chat
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No tasks found.</p>
          )}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        {selectedTask && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedTask.firstName} {selectedTask.lastName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><strong>Email:</strong> {selectedTask.email}</p>
              <p><strong>Category:</strong> {selectedTask.Category}</p>
              <p><strong>City:</strong> {selectedTask.City}</p>
              <p><strong>Number:</strong> {selectedTask.Number}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button 
                variant="primary" 
                className="d-flex align-items-center mr-2" 
                onClick={() => handleEmailClick(selectedTask.email)}
              >
                <FaEnvelope className="mr-2" /> Email
              </Button>
              <Button 
                variant="success" 
                className="d-flex align-items-center mr-2" 
                onClick={() => handleChatClick(selectedTask.Number)}
              >
                <FaWhatsapp className="mr-2" /> Chat
              </Button>
              <Button 
                variant="warning" 
                className="d-flex align-items-center" 
                onClick={handleApplyClick}
              >
                Apply
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <Modal show={showMap} onHide={() => setShowMap(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Select Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MapContainer 
            style={{ height: '400px' }} 
            center={[20.5937, 78.9629]} 
            zoom={5} 
          >
            <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             <MapClickHandler setLocation={setLocation} />
            {location && (
              <Marker position={[location.lat, location.lng]}>
                <Popup>Your selected location</Popup>
              </Marker>
            )}
          </MapContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMap(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveLocation}>
            Save Location
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Home;

