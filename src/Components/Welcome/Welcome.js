import React from 'react';
import { useUser } from '../SignUp/UserContext';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import garage from './garage.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Welcome.css';
import ResponsiveAppBar from '../NavBar/Navbar';
import insta from './insta.png';
  
  const WelcomePage = () => {
  const { userName } = useUser();
  return (
    <div  className='Welcome-container'>
    <img src={garage} alt='' className='garageimg'/>
        <ResponsiveAppBar/>
      <main>
        <section className="welcome-section">
          <h1 className='brandnameletterWel'>QuickService</h1>
          <h1 style={{color:'white',fontSize:'100px',textShadow:'10px 5px 5px black'}}>Welcome {userName}!</h1>
        <Link to = '/Home' > <button className='button0'>Book Service Now</button></Link>
        </section>
      </main>
      <footer>
      <div className="social-icons">
        <a href="whatsapp.com"><WhatsAppIcon style={{color:"green"}}/></a>
        <a href="facebook.com"><FacebookIcon style={{color: 'blue'}}/></a>
        <a href="twitter.com"><TwitterIcon style={{color: '#1DA1F2'}}/></a>
        <a href="instagram.com"><img src={insta} alt='' style={{height:"30px", width:"40px",marginLeft:"-10px", marginBottom:"-3px"}}></img></a>
        <p><b>Follow us on social media </b>
        <b>Copy &copy; 2023 QuickService </b></p>
        <p><b>privacy policy & terms and conditions</b></p>

      </div>
      </footer>
    </div>
  );
};

export default WelcomePage;