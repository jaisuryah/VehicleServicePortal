import React, { useState } from 'react';
import './style.css';

function SignUp()
 {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name, 'Email:', email, 'Password:', password);
    console.log('Age:', age, 'Country:', country, 'Gender:', gender);
    console.log('Address:', address, 'Phone:', phone);
  };

  return (

    <div className="signup-container">
    <nav className="navbar">
    <div className='brandnameletter'>QuickService</div>
        <div className="Brand">Services</div>
        <div className="Brand">Community</div>
        <div className="Brand">Tools</div>
        <div className="Brand">
        <select class="dropdown">
        <option class="a">Coimbatore</option>
        <option class="a">Salem</option>
        <option class="a">Erode</option>
        <option class="a">Chennai</option>
        <option class="a">Trichy</option>
         </select>
         </div>
         <div className="Brand"></div>
      </nav>
      <div className="form-container">

        <form className="sign-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <table>
          <tbody>
            <tr>
              <td><label>Name</label></td>
              <td><input type="text" value={name} onChange={handleNameChange} required/></td>
            </tr>
            <tr>
              <td><label>Email</label></td>
              <td><input type="email" value={email} onChange={handleEmailChange} required/></td>
            </tr>
            <tr>
              <td><label>Password</label></td>
              <td><input type="password" value={password} onChange={handlePasswordChange} required /></td>
            </tr>
            <tr>
              <td><label>Age</label></td>
              <td><input type="number" value={age} onChange={handleAgeChange} required/></td>
            </tr>
            <tr>
              <td><label>Country</label></td>
              <td><input type="text" value={country} onChange={handleCountryChange} required /></td>
            </tr>
            <tr>
              <td><label>Gender</label></td>
              <td>
                <label><input type="radio" value="Male" checked={gender === 'Male'} onChange={handleGenderChange} /> Male</label>
                <label><input type="radio" value="Female" checked={gender === 'Female'} onChange={handleGenderChange} /> Female</label>
              </td>
            </tr>
            <tr>
              <td><label>Address</label></td>
              <td><textarea value={address} onChange={handleAddressChange} required/></td>
            </tr>
            <tr>
              <td><label>Phone Number</label></td>
              <td><input type="tel" value={phone} onChange={handlePhoneChange} required/></td>
            </tr>
          </tbody>
        </table>
        <button type="submit"  className="button1">Sign Up</button>
      </form>
      </div>
      </div>
  );
}

export default SignUp;
