// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Loginuser = () => {
//   return (
//     <section className="vh-100">
//       <div className="container-fluid h-custom">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-md-9 col-lg-6 col-xl-5">
//             <img
//               src="https://chapmanselectrical.co.uk/wp-content/uploads/2020/03/tv.jpg"
//               className="img-fluid"
//               alt="Sample"
//             />
//           </div>
//           <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//             <form>
              

//               <div className="form-outline mb-4">
//                 <input
//                   type="email"
//                   id="form3Example3"
//                   className="form-control form-control-lg"
//                   placeholder="Enter a valid email address"
//                 />
               
//               </div>

//               <div className="form-outline mb-3">
//                 <input
//                   type="password"
//                   id="form3Example4"
//                   className="form-control form-control-lg"
//                   placeholder="Enter password"
//                 />
                
//               </div>

//               <div className="text-center text-lg-start mt-4 pt-2">
//                 <button
//                   type="button"
//                   className="btn btn-primary btn-lg"
//                   style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
//                 >
//                   Login
//                 </button>
//                 <p className="small fw-bold mt-2 pt-1 mb-0">
//                   Don't have an account?{' '}
//                   <a href="#!" className="link-danger">
//                     Register
//                   </a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Loginuser;


import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Loginuser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8080/loginuser/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.status === 200) {
        localStorage.setItem('UserEmail', formData.email);
      }
      navigate("/home");
    } catch (error) {
      console.error('There was an error signing up!', error);
      alert("There was an error in sign up!,please check carefully..")
    }
    
  };

  const handleLogin = async () => {
    
    try {
      const response = await axios.post('http://localhost:8080/loginuser/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        localStorage.setItem('UserEmail', formData.email);
       
      }
      
      navigate("/home");
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert("There was an error in login!,please check carefully..")
    }
    
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
      <h1>Find Your Home Appliance Technician</h1>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            
            <img
              src="https://chapmanselectrical.co.uk/wp-content/uploads/2020/03/tv.jpg"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2 d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  onClick={handleLogin}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  onClick={handleSignup}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loginuser;