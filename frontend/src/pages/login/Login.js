import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../assets/icon-google.svg";
import airBallon from "../../assets/air-balloon.svg";
import { alertContext } from "../../components/context/Context";
import bottomimg from "../../assets/loginbottom.svg";

export default function Login({setUserRole}) {
  const { showAlert } = useContext(alertContext);

  

  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "user", // Default role is 'user'
  });

  const inputFields = [
    { name: "email", label: "Username or Email address *" },
    { name: "password", label: "Password *", type: "password" },
  ];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    // Basic validation for the username/email field
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);

      //Username must be at least 5 characters
      const validUsername = value.length >= 5;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email:
          isValidEmail || validUsername
            ? ""
            : "Invalid email or username format",
      }));
    }

    setLoginData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requiredFields = ["email", "password", "role"];

    for (const field of requiredFields) {
      if (!loginData[field]) {
        return;
      }
    }

    try {
      let apiUrl;
      if (loginData.role === "user") {
        apiUrl = "http://localhost:8080/api/user/login";
      } else if (loginData.role === "company") {
        apiUrl = "http://localhost:8080/api/company/login";
      }

      const data = await axios.post(apiUrl, loginData);

      if (data.status === 200) {
        // alert("Loged in successfully");
        
        showAlert("Log in successfull");
        console.log(data);
        setUserRole(loginData.role);
        if (loginData.role === "user") {
          
          localStorage.setItem('id', data.data.id);
          navigate("/");
        }
        else if (loginData.role === "company") {
          localStorage.setItem('id', data.data.id);
          navigate("/companyhomepage");
        }
        console.log("Loged in");
      } else {
        alert("Put valid data");
        console.log("Login failed:", data.statusText);
      }
    } catch (err) {
      console.log("An error occured", err);
      alert("Put Valid Data");
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <div className="login-container1">
          <div className="text-center">
            <p style={{ color: "#3c65f5" }} className="font-sm">
              Welcome back !
            </p>
            <h2>Member Login</h2>
            <p
              style={{ color: "#6c757d", marginBottom: "30px" }}
              className="font-sm "
            >
              Access to all features. No credit card required.
            </p>
            {/* <button className="google-login">
              <img src={googleIcon} alt="google-icon" />
              <strong>Sign in with Google</strong>
            </button>
            <div className="divider">
              <span>Or continue with</span>
            </div> */}
          </div>

          <form className="login-form">
            <div className="flex items-center mt-2 mb-5">
              <input
                type="radio"
                id="user"
                name="role"
                value="user"
                checked={loginData.role === "user"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="user" className="text-sm font-medium">
                User
              </label>
              <input
                type="radio"
                id="company"
                name="role"
                value="company"
                checked={loginData.role === "company"}
                onChange={handleChange}
                className="ml-4 mr-2"
              />
              <label htmlFor="company" className="text-sm font-medium">
                Company
              </label>
            </div>
            {inputFields.map((field, i) => (
              <div key={i} className="from-group">
                <label className="form-label">{field.label}</label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder || ""}
                  value={loginData[field.name]}
                  onChange={handleChange}
                  required
                  className={`form-input shadow-sm bg-gray-50 border border-[#e0e6f6] text-gray-900 rounded-lg block w-full p-2.5 ${errors[field.name] ? "border-red-500 " : ""
                    } `}
                />
                {errors[field.name] && (
                  <p className="text-red-500">{errors[field.name]}</p>
                )}
              </div>
            ))}
            <div className="form-group flex justify-between font-sm">
              <label className="form-label cursor-pointer">
                <input type="checkbox" className="form-input cursor-pointer" />
                Remenber me
              </label>
              <span className="cursor-pointer">Forget Password</span>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className=" w-full  px-4 py-3 bg-[#05264e] text-white font-bold rounded-md hover:bg-[#3c65f5]  focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Sign in
            </button>
            <div className="text-center mt-4 text-[#6c757d] text-sm">
              Don't have an Account?
              <span className="text-[#05264e] hover:text-[#3c65f5]">
                Sign up
              </span>
            </div>
          </form>
        </div>
        <div className="img1 hidden absolute md:block">
          <img
            className="max-w-[100%] img-ani"
            src={airBallon}
            alt="air-balloon image"
          />
        </div>
        <div className="img2">
          <img className="max-w-full" src={bottomimg} alt="image" />
        </div>
      </div>
    </div>
  );
}
