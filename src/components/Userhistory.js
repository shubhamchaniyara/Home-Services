// import React, { useState, useEffect } from 'react';
// import { Container, Table } from 'react-bootstrap';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Userhistory = () => {
//   const [userDetails, setUserDetails] = useState([]);
//   const useremail = localStorage.getItem('UserEmail');

//   useEffect(() => {
//     fetchUserhistory(useremail);
//   }, [useremail]);

//   const fetchUserhistory = async (useremail) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/home/fetchuserhistory/${useremail}`);
//       setUserDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching user requests", error);
//     }
//   };

//   return (
//     <Container>
//       <h1>User History</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>worker Email</th>
//             <th>Category</th>
//             <th>status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userDetails.map((detail, index) => (
//             <tr key={index}>
//               <td>{detail.workeremail}</td>
//               <td>{detail.category}</td>
//               <td>{detail.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default Userhistory;

import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Userhistory = () => {
  const [userDetails, setUserDetails] = useState([]);
  const useremail = localStorage.getItem('UserEmail');

  useEffect(() => {
    fetchUserhistory(useremail);
  }, [useremail]);

  const fetchUserhistory = async (useremail) => {
    try {
      const response = await axios.get(`https://homebackend.vercel.app/home/fetchuserhistory/${useremail}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error("Error fetching user requests", error);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Accepted':
        return 'table-success';
      case 'Declined':
        return 'table-danger';
      case 'Pending':
        return 'table-warning';
      default:
        return '';
    }
  };

  return (
    <Container>
      <h1 className="my-4">User Records</h1>
      <Table striped bordered hover>
        <thead className="thead-dark">
          <tr>
            <th>Worker Email</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((detail, index) => (
            <tr key={index} className={getStatusClass(detail.status)}>
              <td>{detail.workeremail}</td>
              <td>{detail.category}</td>
              <td>{detail.status.charAt(0).toUpperCase() + detail.status.slice(1)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Userhistory;
