import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';


const Signin = () => {
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


  const handleLogin = async () => {
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8080/loginworker/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        localStorage.setItem('adminEmail', formData.email);
        console.log('Admin logged in and email stored:', formData.email);
      }
      console.log(response.data);
      navigate("/admin");
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
    console.log(formData);
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
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
                <Link to="/loginworker" className="btn btn-link text-black">
                  Don't have an account? Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;