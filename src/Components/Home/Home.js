import React, { useState } from 'react';
import './Home.css';
import how from './how.png';
import Faq from "react-faq-component";
import ResponsiveAppBar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import TestimonialsCarousel from '../carousal/Carousal';
const data = {
  title: "FAQs",
  rows: [
    
    {
      title: "How can I book a service for my car?",
      content: "You can easily book a service by filling out the form available on our website with your vehicle details and preferred date."
    },
    {
      title: "What types of services do you offer?",
      content: "We offer a range of services including oil change, tire rotation, brake service, diagnostics, and more. Contact us for specific service details."
    },
    {
      title: "What are your operating hours?",
      content: "Our service center operates from Monday to Friday, 8 AM to 6 PM, and on Saturdays from 9 AM to 4 PM."
    },
    {
      title: "Do you provide pick-up and drop-off services?",
      content: "Yes, we offer pick-up and drop-off services for your convenience. Please provide your location details while booking."
    },
    {
      title: "Can I reschedule my service appointment?",
      content: "Certainly! You can reschedule your appointment by contacting our support team at least 24 hours before your scheduled service time."
    },
    {
      title: "Are your technicians certified and experienced?",
      content: "Yes, our technicians are highly skilled, certified, and experienced in providing quality service for various car models."
    },
    {
      title: "What payment methods do you accept?",
      content: "We accept various payment methods including credit/debit cards, cash, and online payment options for your convenience."
    },
    {
      title: "Is there a warranty for the services provided?",
      content: "We provide a limited warranty on our services. Details regarding the warranty coverage will be provided upon request."
    },
    {
      title: "Can I track the status of my service?",
      content: "Yes, you can track the status of your service by logging into your account on our website or by contacting our support team."
    },
    {
      title: "How do I cancel my service appointment?",
      content: "To cancel your service appointment, please contact our support team at least 48 hours prior to the scheduled appointment."
    }
  ]
};


const styles = {

    bgColor:"whiteSmoke",
    titleTextColor: "black",
    rowTitleColor: "black",

};



const config = {
    animate: true,
};
const HomePage = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="home-page">

    <ResponsiveAppBar/>

    <header className='hed'>
    <h1 className='brandnameletternav' style={{marginTop:'60px'}}>Welcome to<h1 className='brandnameletternav'>QuickService</h1></h1>
    <h4>Book your car service hassle-free!</h4>
  </header>

  <div className='imgbar'>
  <h1 className='brr'>QuickService</h1>
  <div className='bannerdiv'>
  <h1 className='banner'>We Fix It...</h1>
  <h1 className='banner'>While You Rest</h1>
  <hr className='horiline'></hr>
  <a href='#service'><button className='button1' >Explore now</button></a>
  </div>
  </div>
  <main>
  <section className="booking">
  <section className="services" id='service'>
  <h1>Our Services</h1>
  <ul>
    <li>Oil Change</li>
    <li>Tire Rotation</li>
    <li>Engine Tune-up</li>
    <li>Transmission Service</li>
    <li>Wheel Alignment</li>
    <li>Battery Replacement</li>
    <li>Diagnostic Check-up</li>
    <li>Car Wash & Detailing</li>
    <li>Fuel System Cleaning</li>
    <li>Full Service</li>
    <li>Brake Service</li>

  </ul>
</section>
    <form onSubmit={handleSubmit} className="form-container-home">
    <center><h1>Book Now</h1></center>
        <table className="form-table">
          <tbody>
            <tr>
              <td><label htmlFor="vehicleType">Vehicle Type:</label></td>
              <td><input type="text" id="vehicleType" name="vehicleType" className="input-field-home" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="modelName">Model Name:</label></td>
              <td><input type="text" id="modelName" name="modelName" className="input-field-home" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="vehicleNumber">Vehicle Number:</label></td>
              <td><input type="text" id="vehicleNumber" name="vehicleNumber" className="input-field-home" required /></td>
              </tr>
              <tr>
              <td><label htmlFor="serviceRequired">Service Required:</label></td>
              <td>
                <select id="serviceRequired" name="serviceRequired" className="select-field" required>
                  <option value=""></option>
                  <option value="oilChange">Oil Change</option>
                  <option value="tireRotation">Tire Rotation</option>
                  <option value="EngineTune-up">Engine Tune-up</option>
                  <option value="TransmissionService">Transmission Service</option>
                  <option value="WheelAlignment">Wheel Alignment</option>
                  <option value="BatteryReplacement">Battery Replacement</option>
                  <option value="DiagnosticCheck-up">Diagnostic Check-up</option>
                  <option value="Car Wash & Detailing">Car Wash & Detailing</option>
                  <option value="Fuel System Cleaning">Fuel System Cleaning</option>
                  <option value="Full Service">Full Service</option>
                  <option value="Brake Service">Brake Service</option>
                </select>
              </td>
            </tr>
              <tr>
              <td><label htmlFor="package">Select Package:</label></td>
              <td>
                <select id="package" name="package" className="select-field" required>
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="date">Preferred Date:</label></td>
              <td><input type="date" id="date" name="date" className="date-field" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="pickupAddress">Pickup Location Address:</label></td>
              <td><textarea id="pickupAddress" name="pickupAddress" className="input-field-home" required /></td>
            </tr>
            <tr>
              <td colSpan="2"><button type="submit" className="submit-button">Book Service</button></td>
            </tr>
          </tbody>
        </table>
        </form>
        </section>
        <img src={how} alt='' style={{width:'100%'}}/>
    <section className="testimonials">
      <h2>Testimonials</h2>
      <TestimonialsCarousel/>
    </section>
    <Faq
    data={data}
    styles={styles}
    config={config}
    className="faqbar"
/>
  
  </main>
    <Footer/>
    </div>
  );
};

export default HomePage;
