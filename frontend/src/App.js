import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/login/Login.js';
import Signup from './pages/login/Signup.js';
import Home from './pages/home/Home.js';
import Companydetails from './pages/recruiters/Companydetails.js';
import Applyjob from './pages/jobdescription/Applyjob.js';
import About from './pages/about/About.js';
import Companyhomepage from './pages/recruiters/Companyhomepage.js'
import Postnewjob from './pages/recruiters/Postnewjob.js';
import FindJob from './pages/findJob/findJob.js';
import Footer from './components/Footer.js';
function App() {
  return (
    <>
      <Router>
        
        <div className="app">
          <Navbar/>
          <Routes>
            <Route
              path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/companydetails" element={<Companydetails />} />
            <Route path="/apply" element={<Applyjob />} />
            <Route path="/companyhomepage" element={<Companyhomepage />} />
            <Route path="/postnewjob" element={<Postnewjob />} />
            <Route path="/findJob" element={<FindJob />} />
          </Routes>
          <Footer/>
        </div>
       
      </Router >
    </>
  );
}

export default App;
