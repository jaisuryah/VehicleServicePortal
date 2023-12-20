import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import WelcomePage from './Components/Welcome/Welcome';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import { UserProvider } from './Components/SignUp/UserContext';
import AboutUs from './Components/AboutPage/About';

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/WelcomePage" element={<WelcomePage />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs/>} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
