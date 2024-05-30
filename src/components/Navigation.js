// import React from 'react';
// import { Navbar, Nav, Container} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// const Navigation = () => {
//   return (
//     <Navbar expand="lg" bg="light" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Toggle aria-controls="navbarSupportedContent">
//           <FontAwesomeIcon icon={faBars} />
//         </Navbar.Toggle>
//         <Navbar.Collapse id="navbarSupportedContent">
//           <Navbar.Brand href="#">
//             <img
//               src="https://tse1.mm.bing.net/th?id=OIP.t5Ul933v6D7nqYT0oQ9FJQHaEh&pid=Api&rs=1&c=1&qlt=95&w=163&h=99"
//               height="50"
//               alt="MDB Logo"
//               loading="lazy"
//             />
//           </Navbar.Brand>
//           <Nav className="me-auto mb-2 mb-lg-0">
//             <Nav.Link href="#">Dashboard</Nav.Link>
//             <Nav.Link href="#">Team</Nav.Link>
//             <Nav.Link href="#">Projects</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
        
//       </Container>
//     </Navbar>
//   );
// };

// export default Navigation;


import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#f8f9fa' }}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarSupportedContent">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Navbar.Brand href="#">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.t5Ul933v6D7nqYT0oQ9FJQHaEh&pid=Api&rs=1&c=1&qlt=95&w=163&h=99"
              height="50"
              alt="MDB Logo"
              loading="lazy"
            />
          </Navbar.Brand>
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/home" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/userhistory" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Records</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div class="d-flex align-items-center">
            
      
        </div>
    
      </Container>
    </Navbar>
  );
};

export default Navigation;
