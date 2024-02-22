import React, { useState } from "react";
import axios from "axios";
import './Login.css';
import spaceShip from '../../assets/spaceship.svg';
import bottomimg from '../../assets/loginbottom.svg';
import googleIcon from '../../assets/icon-google.svg';
import { Link } from "react-router-dom";
export default function Signup() {

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        role: "user", // Default role is 'user'
        userName: "",
        userEmail: "",
        userPassword: "",
        userConfirmPassword: "",
        companyName: "",
        ownerName: "",
        companyAddress: "",
        companyEmail: "",
        companyPassword: "",
        companyConfirmPassword: "",
    });

    var inputFields = [
        { name: 'fullName', label: 'FullName *' },
        { name: 'userEmail', label: 'Email *',type:'email' },
        { name: 'userName', label: 'Username *'},
        { name: 'userPassword', label: 'Password *', type: 'password' },
        { name: 'userConfirmPassword', label: 'confirmPassword *', type: 'password' }
    ];
    if(formData.role === 'company') {
        inputFields = [
            { name: 'companyName', label: 'Company Name *' },
            {name: 'ownerName', label: 'Owner Name *'},
            {name: 'companyAddress', label: 'Company Address *'},
            {name: 'companyEmail', label: 'Company Email Address *'},
            { name: 'companyPassword', label: 'Password *', type: 'password' },
            { name: 'companyConfirmPassword', label: 'confirmPassword *', type: 'password' }
        ]
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (formData.role === "user") {
            if (
                !formData.userName ||
                !formData.userEmail ||
                !formData.userPassword ||
                !formData.userConfirmPassword
            ) {
                alert("Please fill in all fields");
                return;
            }
            if (formData.userPassword !== formData.userConfirmPassword) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    userPassword: 'password and confirm password must be same'
                }));
                return;
            }else {
                const isVaildPassword = passwordValidation(formData.userPassword);
                console.log(isVaildPassword);
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    userPassword: isVaildPassword ? '' :'password must contain more than 8 character'
                }));
                return;
            }
        } else if (formData.role === "company") {
            if (
                !formData.companyName ||
                !formData.ownerName ||
                !formData.companyAddress ||
                !formData.companyEmail ||
                !formData.companyPassword ||
                !formData.companyConfirmPassword
            ) {
                alert("Please fill in all fields");
                return;
            }
            if (formData.companyPassword !== formData.companyConfirmPassword) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    cpmpanyPassword: 'password and confirm password must be same'
                }));
                return;
            }else {
                const isVaildPassword=passwordValidation(formData.userPassword);
                console.log(isVaildPassword);
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    companyPassword: isVaildPassword ? '' :'password must contain more than 8 character'
                }));
                return;
            }
        }

        try {
            let response;
            if (formData.role === "user") {
                response = await axios.post("http://localhost:8080/api/user/signup", {
                    name: formData.userName,
                    email: formData.userEmail,
                    password: formData.userPassword,
                });
            } else if (formData.role === "company") {
                response = await axios.post(
                    "http://localhost:8080/api/company/signup",
                    {
                        companyName: formData.companyName,
                        ownerName: formData.ownerName,
                        companyAddress: formData.companyAddress,
                        companyEmail: formData.companyEmail,
                        password: formData.companyPassword, 
                    }
                );
            }
            console.log("Form data submitted:", response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="main-container">
            <div className="login-container">
                <div className="login-container1">
                    <div className="text-center">
                        <p style={{ "color": "#3c65f5" }} className="font-sm">Register</p>
                        <h2>Start for free Today</h2>
                        <p style={{ "color": "#6c757d", "marginBottom": "30px" }} className="font-sm ">Access to all features. No credit card required.</p>
                        <button className="google-login"><img src={googleIcon} alt="google-icon" /><strong>Sign in with Google</strong></button>
                        <div className="divider">
                            <span>Or continue with</span>
                        </div>
                    </div>
                    <form className="login-form">
                        <div className="from-group">
                            <input
                                type="radio"
                                name="role"
                                value="user"
                                checked={formData.role === "user"}
                                onChange={handleInputChange}
                                required
                            />
                            <label className="ml-1.5">
                                User
                            </label>
                            <input
                                type="radio"
                                name="role"
                                value="company"
                                onChange={handleInputChange}
                                checked={formData.role === "company"}
                                required
                                className="ml-1.5"
                            />
                            <label className="ml-1.5">
                                Company
                            </label>
                        </div>
                        {inputFields.map((field, i) => (
                            <div key={i} className="from-group">
                                <label className="form-label">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type || "text"}
                                    name={field.name}
                                    placeholder={field.placeholder || ""}
                                    value={formData[field.name]}
                                    onChange={handleInputChange}
                                    required
                                    className={`form-input shadow-sm bg-gray-50 border border-[#e0e6f6] text-gray-900 rounded-lg block w-full p-2.5 ${errors[field.name] ? 'border-red-500 ' : ''
                                        } `}
                                />
                                {errors[field.name] && <p className="text-red-500">{errors[field.name]}</p>}
                            </div>
                        ))}
                        <div className="form-group flex justify-between font-sm">
                            <label className="form-label cursor-pointer"><input type="checkbox" className="form-input cursor-pointer" />Agree our terms and policy</label>
                            <span className="cursor-pointer">Lean more</span>
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className=" w-full  px-4 py-3 bg-[#05264e] text-white font-bold rounded-md hover:bg-[#3c65f5]  focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            Sign in
                        </button>
                        <div className="text-center mt-4 text-[#6c757d] text-sm">
                            Already have an account?<span className="text-[#05264e] hover:text-[#3c65f5]"><Link to="/login">Sign in</Link></span>
                        </div>
                    </form>
                </div>
                <div className="img1 hidden absolute md:block"><img className="max-w-[100%] img-ani" src={spaceShip} alt="spaceship image" /></div>
                <div className="img2"><img className="max-w-full" src={bottomimg} alt="image" /></div>
            </div>
        </div>
    );
}


function passwordValidation(password) {
    if (password.length < 8) {
      return false;
    }
    let countUpperCase = 0;
    let countLowerCase = 0;
    let countDigit = 0;
    let countSpecialCharacters = 0;
    const specialChars = [
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '_',
      '-',
      '+',
      '=',
      '[',
      '{',
      ']',
      '}',
      ':',
      ';',
      '<',
      '>',
    ];
    for (let i = 0; i < password.length; i++) {
      if (specialChars.includes(password[i])) {
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        countDigit++
      } else {
        if (password[i] === password[i].toUpperCase()) {
          countUpperCase++
        }
        if (password[i] === password[i].toLowerCase()) {
          countLowerCase++
        }
      }
    }
  
    if (countLowerCase === 0 || countUpperCase === 0 || countDigit === 0 || countSpecialCharacters === 0) {
      return false;
    }
    return true;
}