import React from 'react';
import './Login.css';
import google from './google.png';
import facebook from './facebook.png';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import validation from './LoginValidation';
import back from './lback.mp4';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));

    if (values.email && values.password) {
      setIsLoggedIn(true);
    }
  };

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <video autoPlay loop muted className="vid">
        <source src={back} type="video/mp4" />
      </video>

      <div className="big-container">
        <div className="form login">
          <div className="form-content">
            <center>
              <div>
                <div className="brandnameletter">QuickService</div>
              </div>
              <h1 style={{ marginTop: '50px' }}> Login </h1>
              <form action="" onSubmit={handleSubmit} style={{ marginTop: '50px' }}>
                <div className="field input-field">
                  <input type="email" placeholder="Email" className="input" onChange={handleInput} name="email"
                  style={{ borderColor: errors.email? 'red' : '',paddingBottom:'20px',padding:'20px' }} />
                </div>
                <span className="display">
                  <p>{errors.email}</p>
                </span>

                <div className="password-input-login">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={handleInput}
                    name="password"
                    style={{ borderColor: errors.password ? 'red' : '' }}
                  />
                  <button type="button" className="password-toggle-login" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <IconButton sx={{ p: 0 }}>
                        <VisibilityIcon sx={{ position: 'absolute', right: '10px', backgroundColor: 'white' }} />
                      </IconButton>
                    ) : (
                      <IconButton sx={{ p: 0 }}>
                        <VisibilityOffIcon sx={{ position: 'absolute', right: '10px', backgroundColor: 'white' }} />
                      </IconButton>
                    )}
                  </button>
                </div>
                <span className="display">
                  <p>{errors.password}</p>
                </span>

                <div className="form-link">
                  <a href="#" className="forgot-pass">
                    Forgot password?
                  </a>
                </div>
                <div className="field button-field">
                  {values.email && values.password && isLoggedIn ? (
                    <Link to="/Home">
                      <button type="submit">Login</button>
                    </Link >
                  ) : (
                    <button type="submit" onClick={handleSubmit}>
                      Login
                    </button>
                  )}
                </div>
              </form>

              <div className="form-link">
                <Link to="/SignUp">
                  <span>
                    Don't have an account? <a href="#" className="link signup-link">Sign-Up</a>
                  </span>
                </Link>
              </div>

              <div className="line"></div>

              <div className="login-options">
                <Button
                  variant="outlined"
                  startIcon={<img src={facebook} alt="Google Icon" style={{ width: '20px', height: '20px' }} />}
                  style={{ borderColor: 'black', color: 'black', margin: '10px' }}
                >
                  Continue with Facebook
                </Button>
                <br></br>
                <Button
                  variant="contained"
                  startIcon={<img src={google} alt="Google Icon" style={{ width: '20px', height: '20px' }} />}
                  style={{ borderColor: 'black', color: 'white', margin: '10px' }}
                >
                  Continue with Google
                </Button>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
