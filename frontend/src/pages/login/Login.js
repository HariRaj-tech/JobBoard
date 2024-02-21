import React, { useState,useEffect} from "react";
import axios from 'axios';
import './Login.css';
import googleIcon from '../../assets/icon-google.svg';
import airBallon from '../../assets/air-balloon.svg';
import bottomimg from '../../assets/loginbottom.svg';

export default function Login() {
  const [errors,setErrors] = useState({});
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const inputFields = [
    { name: 'email', label: 'Username or Email address *'},
    { name: 'password', label: 'Password *',type:'password'}
  ];

  const handleChange = (e) => {
    const { name, value,checked, type } = e.target;
    // Basic validation for the username/email field
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);

      //Username must be at least 3 characters
      const validUsername = value.length >= 5; 
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: isValidEmail || validUsername ? '' : 'Invalid email or username format',
      }));
    }

    setLoginData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requiredFields = ["email", "password"];

    for (const field of requiredFields) {
      if (!loginData[field]) {
        
        return;
      }
    }

    try {
      const data = await axios.post("http://localhost:8080/api/user/login", loginData);

      if (data.status === 200) {
        alert("Loged in successfully");
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
            <p style={{"color":"#3c65f5"}} className="font-sm">Welcome back !</p>
            <h2>Member Login</h2>
            <p style={{"color":"#6c757d","marginBottom":"30px"}} className="font-sm ">Access to all features. No credit card required.</p>
            <button className="google-login"><img src={googleIcon} alt="google-icon"/><strong>Sign in with Google</strong></button>
            <div className="divider">
              <span>Or continue with</span>
            </div>
          </div>
            <form className="login-form">
              {inputFields.map((field, i) => (
                  <div key={i} className="from-group">
                      <label className="form-label">
                          {field.label}
                      </label>
                      <input
                          type={field.type  || "text"}
                          name={field.name}
                          placeholder={field.placeholder ||""}
                          value={loginData[field.name]}
                          onChange={handleChange}
                          required
                          className={`form-input shadow-sm bg-gray-50 border border-[#e0e6f6] text-gray-900 rounded-lg block w-full p-2.5 ${
                              errors[field.name]  ? 'border-red-500 ' :''
                          } `}
                      />
                      {errors[field.name]  && <p className="text-red-500">{errors[field.name]}</p>}
                  </div>
              ))}
              <div className="form-group flex justify-between font-sm">
                  <label className="form-label cursor-pointer"><input type="checkbox" className="form-input cursor-pointer" />Remenber me</label>
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
                  Don't have an Account?<span className="text-[#05264e] hover:text-[#3c65f5]">Sign up</span>
              </div>
          </form>
        </div>
        <div className="img1 hidden absolute md:block"><img className="max-w-[100%] img-ani" src={airBallon} alt="air-balloon image"/></div>
        <div className="img2"><img className="max-w-full" src={bottomimg} alt="image"/></div>
      </div>
    </div>
  );
}


// function passwordvalidation(password) {
//   if (password.length < 8) {
//     return false;
//   }
//   let countUpperCase = 0;
//   let countLowerCase = 0;
//   let countDigit = 0;
//   let countSpecialCharacters = 0;
//   const specialChars = [
//     '!',
//     '@',
//     '#',
//     '$',
//     '%',
//     '^',
//     '&',
//     '*',
//     '(',
//     ')',
//     '_',
//     '-',
//     '+',
//     '=',
//     '[',
//     '{',
//     ']',
//     '}',
//     ':',
//     ';',
//     '<',
//     '>',
//   ];
//   for (let i = 0; i < password.length; i++) {
//     if (specialChars.includes(password[i])) {
//       countSpecialCharacters++
//     } else if (!isNaN(password[i] * 1)) {
//       countDigit++
//     } else {
//       if (password[i] == password[i].toUpperCase()) {
//         countUpperCase++
//       }
//       if (password[i] == password[i].toLowerCase()) {
//         countLowerCase++
//       }
//     }
//   }

//   if (countLowerCase == 0 || countUpperCase == 0 || ) {
//     return false;
//   }

//   if (countUpperCase == 0) {
//     // invalid form, 0 upper case characters
//     alert('Invalid Form, 0 upper case characters in password')
//     return
//   }

//   if (countDigit == 0) {
//     // invalid form, 0 digit characters
//     alert('Invalid Form, 0 digit characters in password')
//     return
//   }

//   if (countSpecialCharacters == 0) {
//     // invalid form, 0 special characters characters
//     alert('Invalid Form, 0 special characters in password')
//     return
//   }
// }
// {/* <div className="flex items-center mb-2">
//                         <input
//                             type="radio"
//                             id="user"
//                             name="role"
//                             value="user"
//                             checked={role === 'user'}
//                             onChange={handleRoleChange}
//                             className="mr-2"
//                         />
//                         <label htmlFor="user" className="text-sm font-medium">User</label>
//                         <input
//                             type="radio"
//                             id="company"
//                             name="role"
//                             value="company"
//                             checked={role === 'company'}
//                             onChange={handleRoleChange}
//                             className="ml-4 mr-2"
//                         />
//                         <label htmlFor="company" className="text-sm font-medium">Company</label>
//                     </div> */}
//           {/* {role === 'user' && (
//                         <div>
//                             <div className="mb-2">
//                                 <label htmlFor="userEmail" className="block text-sm font-medium">
//                                     Email address
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="userEmail"
//                                     placeholder="Enter your email address"
//                                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
//                                 />
//                             </div>
//                             <div className="mb-2">
//                                 <label htmlFor="userPassword" className="block text-sm font-medium">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     id="userPassword"
//                                     placeholder="Enter your password"
//                                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
//                                 />
//                             </div>
//                         </div>
//                     )}
//                     {role === 'company' && (
//                         <div>
//                             <div className="mb-2">
//                                 <label htmlFor="companyEmail" className="block text-sm font-medium">
//                                     Company email address
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="companyEmail"
//                                     placeholder="Enter your company email address"
//                                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
//                                 />
//                             </div>
//                             <div className="mb-2">
//                                 <label htmlFor="companyPassword" className="block text-sm font-medium">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     id="companyPassword"
//                                     placeholder="Enter your password"
//                                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
//                                 />
//                             </div>
//                         </div>
//                     )} */}


