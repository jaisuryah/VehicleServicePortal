import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <span>Follow us on:</span>
          <a href="#" className="social-icon"><FaFacebook style={{ marginLeft: '10px', color: '#3b5998' }} /></a>
          <a href="#" className="social-icon"><FaTwitter style={{ marginLeft: '10px', color: '#1da1f2' }} /></a>
          <a href="#" className="social-icon"><FaInstagram style={{ marginLeft: '10px', color: '#c32aa3' }} /></a>
        </div>
        <div className="legal">
          <span>&copy; 2023 QuickService Booking Portal  </span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="contact-info">
          <p>Contact us:</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;