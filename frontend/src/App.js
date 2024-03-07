import './App.css';
import React, { useState, createContext } from 'react'
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
import Userprofile from './pages/profile/Userprofile.js';
import Alert from './pages/about/Alert.js';
import { alertContext } from './components/context/Context.js';
import CompanyNavbar from './components/CompanyNavbar.js';
import Postedjob from './pages/recruiters/Postedjob.js';


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const [userRole, setUserRole] = useState("user");


  return (
    <>
      <Router>
        <alertContext.Provider value={{ alert, showAlert }}>
          {userRole === "user" ? <Navbar /> : <CompanyNavbar setUserRole={setUserRole} />}
          <div className="app">
            <Alert />
            <Routes>
              <Route
                path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login setUserRole={setUserRole} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/companydetails" element={<Companydetails />} />
              <Route path="/jobinfo" element={<Applyjob />} />
              <Route path="/companyhomepage" element={<Companyhomepage />} />
              <Route path="/postnewjob" element={<Postnewjob />} />
              <Route path="/findJob" element={<FindJob />} />
              <Route path="/userprofile" element={<Userprofile />} />
              <Route path='/postedjob' element={<Postedjob/>} />
            </Routes>
            {/* <Footer/> */}
          </div>
        </alertContext.Provider>
      </Router >
    </>
  );
}

export default App;
