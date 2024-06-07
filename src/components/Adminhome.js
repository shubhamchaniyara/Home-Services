// import React, { useState, useEffect } from 'react';
// import { Container, Table, Button } from 'react-bootstrap';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Admin = () => {
//   const [userDetails, setUserDetails] = useState([]);

//   useEffect(() => {
//     fetchUserDetails();
//   }, [userDetails]);

//   const fetchUserDetails = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/fetchuser');
//       setUserDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching user details", error);
//     }
//   };

//   const handleUpdateStatus = async (id, status) => {
//     try {
//       await axios.post('http://localhost:8080/updateUserStatus', { id, status });
//       //setUserDetails(prevDetails => prevDetails.filter(detail => detail._id !== id));
//     } catch (error) {
//       console.error("Error updating status", error);
//     }
//   };

//   return (
//     <Container>
//       <h1>User Requests</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Address</th>
//             <th>Task Email</th>
//             <th>User Email</th>
//             <th>Username</th>
//             <th>status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userDetails.map((detail, index) => (
//             <tr key={index}>
//               <td>{detail.address}</td>
//               <td>{detail.workeremail}</td>
//               <td>{detail.userEmail}</td>
//               <td>{detail.username}</td>
//               <td>{detail.status}</td>
//               <td>
//                 <Button
//                   variant="success"
//                   onClick={() => handleUpdateStatus(detail._id, 'Accepted')}
//                 >
//                   Accept
//                 </Button>{' '}
//                 <Button
//                   variant="danger"
//                   onClick={() => handleUpdateStatus(detail._id, 'Declined')}
//                 >
//                   Decline
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default Admin;


// import React, { useState, useEffect } from 'react';
// import { Container, Table, Button, Form } from 'react-bootstrap';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Admin = () => {
//   const [admins, setAdmins] = useState([]);
//   const [selectedAdmin, setSelectedAdmin] = useState('');
//   const [userDetails, setUserDetails] = useState([]);

//   useEffect(() => {
//     fetchAdmins();
//   }, []);

//   useEffect(() => {
//     if (selectedAdmin) {
//       fetchUserRequests(selectedAdmin);
//     }
//   }, [selectedAdmin]);

//   const fetchAdmins = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/loginworker/getAllAdmins');
//       setAdmins(response.data);
//     } catch (error) {
//       console.error("Error fetching admins", error);
//     }
//   };

//   const fetchUserRequests = async (adminEmail) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/home/fetchuser/${adminEmail}`);
//       setUserDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching user requests", error);
//     }
//   };

//   const handleUpdateStatus = async (id, status) => {
//     try {
//       await axios.post('http://localhost:8080/home/updateUserStatus', { id, status });
//       setUserDetails(prevDetails => prevDetails.filter(detail => detail._id !== id));
//     } catch (error) {
//       console.error("Error updating status", error);
//     }
//   };

//   return (
//     <Container>
//       <h1>Admin Panel</h1>
//       <Form.Group controlId="adminSelect">
//         <Form.Label>Select Admin</Form.Label>
//         <Form.Control
//           as="select"
//           value={selectedAdmin}
//           onChange={(e) => setSelectedAdmin(e.target.value)}
//         >
//           <option value="">Select an admin</option>
//           {admins.map((admin, index) => (
//             <option key={index} value={admin.email}>
//               {admin.firstName} {admin.lastName} ({admin.email})
//             </option>
//           ))}
//         </Form.Control>
//       </Form.Group>
//       {userDetails.length > 0 && (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Address</th>
//               <th>Task Email</th>
//               <th>User Email</th>
//               <th>Username</th> 
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userDetails.map((detail, index) => (
//               <tr key={index}>
//                 <td>{detail.address}</td>
//                 <td>{detail.taskEmail}</td>
//                 <td>{detail.userEmail}</td>
//                 <td>{detail.username}</td>
//                 <td>
//                   <Button
//                     variant="success"
//                     onClick={() => handleUpdateStatus(detail._id, 'Accepted')}
//                   >
//                     Accept
//                   </Button>{' '}
//                   <Button
//                     variant="danger"
//                     onClick={() => handleUpdateStatus(detail._id, 'Declined')}
//                   >
//                     Decline
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Container>
//   );
// };

// export default Admin;


import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
  const [userDetails, setUserDetails] = useState([]);
  const adminEmail = localStorage.getItem('adminEmail'); 
  useEffect(() => {
    if (adminEmail) {
      fetchUserRequests(adminEmail);
    }
  }, [adminEmail]);

  const fetchUserRequests = async (adminEmail) => {
    try {
      const response = await axios.get(`http://localhost:8080/home/fetchuser/${adminEmail}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error("Error fetching user requests", error);
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      await axios.post('http://localhost:8080/home/updateUserStatus', { id, status });
      setUserDetails(prevDetails => prevDetails.filter(detail => detail._id !== id));
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  return (
    <Container>
      <h1>Admin Panel</h1>
      {userDetails.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Address</th>
              <th>User Email</th>
              <th>Username</th>
              <th>Actions</th>
              <th>currentStatus</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((detail, index) => (
              <tr key={index}>
                <td>{detail.address}</td>
                <td>{detail.userEmail}</td>
                <td>{detail.username}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => handleUpdateStatus(detail._id, 'Accepted')}
                  >
                    Accept
                  </Button>{' '}
                  <Button
                    variant="danger"
                    onClick={() => handleUpdateStatus(detail._id, 'Declined')}
                  >
                    Decline
                  </Button>
                </td>
                <td>{detail.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No user requests found for the logged-in admin.</p>
      )}
    </Container>
  );
};

export default Admin;
