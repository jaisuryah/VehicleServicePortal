import React, { useState } from 'react';
import './style1.css'

function Login()
 {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="logincontainer">
      <nav className="navbar">
        <div className='brandnameletter'>QuickService</div>
        <div className="Brand">Services</div>
        <div className="Brand">Community</div>
        <div className="Brand">Tools</div>
        <div className="Brand">
          <select className="dropdown">
            <option className="a">Coimbatore</option>
            <option className="a">Salem</option>
            <option className="a">Erode</option>
            <option className="a">Chennai</option>
            <option className="a">Trichy</option>
          </select>
        </div>
        <div className="Brand"></div>
      </nav>

      <div className='container'>
      <form className="login-form" onSubmit={handleSubmit}>
      <center>
          <h2>Login</h2>
          <table style={{marginTop:'40px'}}>
            <tbody>
              <tr>
                <td><label>Email   </label></td>
                <td><input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} /></td>
              </tr>
              <tr>
                <td><label>Password </label></td>
                <td><input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} /></td>
              </tr>
              </tbody>
              </table>
              </center>
              <input type="checkbox" required></input>
              <label>Accept the terms and conditions</label>
              <br></br>
          <button type="submit" className='button2'>Login</button>
          </form>
  
      </div>
    </div>
  );
}

export default Login;
