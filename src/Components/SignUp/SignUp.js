import React, { useState } from 'react';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';
import PersonIcon from './Person.png';
import google from './google.png';
import facebook from './facebook.png';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link} from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import image from './car2.jpg';
import './SignUp.css';

function SignUp() {
  const { setUserName } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [state, setStatee] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  

  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleStateChange = (e) => {
    setStatee(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  
  const validatePassword = (password) => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return pattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }
  
    if (!state.trim()) {
      validationErrors.state = 'State is required';
    }
  
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      validationErrors.password = 'must have 1 caps,1 lower,1 num (atleast 8 char)';
    }

    if (!confirmPassword.trim()) {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords don't match";
    }
    if (!phone.trim()) {
      validationErrors.phone = 'Phone Number is required';
    } else {

      const phonePattern = /^(?:\+91)?[6-9]\d{9}$/;
      if (!phonePattern.test(phone)) {
        validationErrors.phone = 'Invalid phone number';
      }
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0 && email && password && confirmPassword)
    {
      setUserName(name);
    console.log('Form submitted successfully');
    navigate('/WelcomePage');
    }
  };


  return (
    <div className="signup-container">
    <img src={image} className='bgimg' alt=''/>
      <div className="form-container">
        <form className="sign-form" onSubmit={handleSubmit} >
          <center>
            <div><div className='brandnameletter'>QuickService Sign-Up</div></div>

            <table style={{ marginTop: '40px' }}>
              <tbody>
                <tr>
                  <td><label>Name</label></td>
                  <td>
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Enter your name"
                      style={{ borderColor: errors.name ? 'red' : '' }}
                      className='inputs'
                    />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                  </td>
                </tr>
                <tr>
                  <td><label>Email</label></td>
                  <td>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email"
                      className='inputs'
                      style={{ borderColor: errors.email ? 'red' : '' }}
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                  </td>
                </tr>
                <tr>
                  <td><label>Password</label></td>
                  <td>
                    <div className="password-input">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                        className='inputs'
                        style={{ borderColor: errors.password ? 'red' : '' }}
                      />
                      <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
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
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                  </td>
                </tr>
                <tr>
                  <td><label>Confirm Password</label></td>
                  <td>
                    <div className="password-input">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        placeholder="Confirm your password"
                        className='inputs'
                        style={{ borderColor: errors.confirmPassword ? 'red' : '' }}
                      />
                      <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
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
                    {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
                  </td>
                </tr>
                <tr>
                  <td><label>State</label></td>
                  <td>
                    <input
                      type="text"
                      value={state}
                      onChange={handleStateChange}
                      placeholder="Enter your state"
                      style={{ borderColor: errors.state ? 'red' : '' }}
                      className='inputs'
                    />
                    {errors.state && <span style={{ color: 'red' }}>{errors.state}</span>}
                  </td>
                </tr>
                <tr>
                  <td><label>Phone Number</label></td>
                  <td>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="Enter your phone number"
                      pattern='[0-9]'
                      style={{ borderColor: errors.phone ? 'red' : '' }}
                      className='inputs'
                    />
                    {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                  </td>
                </tr>
              </tbody>
            </table>
      <Link to='/WelcomePage'>
      <Button
        variant="contained"
        onClick={handleSubmit}
        startIcon={<img src={PersonIcon} alt="Person Icon" style={{ width: "20px", height: "20px", color: 'white' }} />}
        style={{ backgroundColor: 'black', color: 'white', margin: '10px' }}
      >
        Sign-Up
      </Button>
    </Link>
              
            <div class="form-link">
              <span>Already have an account? <Link to='/'><a href="#" class="link signup-link">Login-Now</a></Link></span>
            </div>
            <div class="line"></div>
            <div className="login-options">
              <Button variant="outlined" startIcon={<img src={facebook} alt="Google Icon" style={{ width: "20px", height: "20px" }} />} style={{ borderColor: 'black', color: 'black', margin: '10px' }}>
                Sign Up with Facebook
              </Button>
              <Button variant="contained" startIcon={<img src={google} alt="Google Icon" style={{ width: "20px", height: "20px" }} />} style={{ borderColor: 'black', color: 'white', margin: '10px' }}>
                Sign Up with Google
              </Button>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
