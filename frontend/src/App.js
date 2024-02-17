import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Companydetails from './components/Companydetails';
import Applyjob from './components/JobPages/Applyjob';
import Profile from './components/Profile';
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
            <Route  path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </Router >
    </>
  );
}

export default App;
