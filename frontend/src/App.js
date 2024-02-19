import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/login/Login.js';
import Signup from './pages/login/Signup.js.js';
import Home from './pages/home/Home.js';
import Companydetails from './pages/recruiters/Companydetails.js';
import Applyjob from './pages/jobdescription/Applyjob.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="app">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login/> } />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/companydetails" element={<Companydetails />} />
            <Route exact path="/apply" element={<Applyjob />} />
        </Routes>
      </div>
    </Router >
    </>
  );
}

export default App;
