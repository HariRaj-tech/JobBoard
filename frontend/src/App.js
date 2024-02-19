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
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="app">
          <Routes>
            <Route 
            path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login/> } />
            <Route path="/signup" element={<Signup />} />
            <Route path="/companydetails" element={<Companydetails />} />
            <Route path="/apply" element={<Applyjob />} />
        </Routes>
      </div>
    </Router >
    </>
  );
}

export default App;
