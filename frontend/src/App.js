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
import About from './components/About';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login/> } />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/companydetails" element={<Companydetails />} />
        </Routes>
      </div>
    </Router >
    </>
  );
}

export default App;
