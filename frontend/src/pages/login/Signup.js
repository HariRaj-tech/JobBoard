import React, { isValidElement, useState, useContext } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import spaceShip from "../../assets/spaceship.svg";
import bottomimg from "../../assets/loginbottom.svg";
import googleIcon from "../../assets/icon-google.svg";
import { alertContext } from "../../components/context/Context";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

export default function Signup() {
  const { showAlert } = useContext(alertContext);
  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    role: "user", // Default role is 'user'
    firstName: "",
    lastName: "",
    userEmail: "",
    userLocation: "",
    userContactNumber: "",
    userSkills: [],
    userLanguages: [],
    userAbout: "",
    userPassword: "",
    userConfirmPassword: "",
    resume: null,
    image: null,
    companyName: "",
    ownerName: "",
    companyAddress: "",
    companyEmail: "",
    contactEmail: "",
    contactNumber: "",
    companyPassword: "",
    companyConfirmPassword: "",
    about: "",
  });

  var inputFields = [
    { name: "firstName", label: "First Name *" },
    { name: "lastName", label: "Last Name *" },
    { name: "userEmail", label: "Email *", type: "email" },
    { name: "userLocation", label: "Location *" },
    { name: "userContactNumber", label: "Contact Number *" },
    { name: "userPassword", label: "Password *", type: "password" },
    {
      name: "userConfirmPassword",
      label: "confirmPassword *",
      type: "password",
    },
  ];
  if (formData.role === "company") {
    inputFields = [
      { name: "companyName", label: "Company Name *" },
      { name: "ownerName", label: "Owner Name *" },
      { name: "companyAddress", label: "Company Address *" },
      { name: "companyEmail", label: "Company Email Address *", type: "email" },
      { name: "contactNumber", label: "Contact Number *" },
      { name: "contactEmail", label: "Contact Email *" },
      { name: "companyPassword", label: "Password *", type: "password" },
      {
        name: "companyConfirmPassword",
        label: "confirmPassword *",
        type: "password",
      },
    ];
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors({});
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillsChange = (tags) => {
    setFormData((formData) => ({ ...formData, userSkills: tags }));
  };

  const handleLanguagesChange = (tags) => {
    setFormData((formData) => ({ ...formData, userLanguages: tags }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (formData.role === "user") {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.userEmail ||
        !formData.userPassword ||
        !formData.userConfirmPassword ||
        !formData.userLocation ||
        !formData.userContactNumber ||
        !formData.userAbout ||
        !formData.userSkills.length > 0 ||
        !formData.userLanguages.length > 0 ||
        !formData.image ||
        !formData.resume
      ) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        showAlert("Please fill in all fields");
        return;
      }
      if (formData.userPassword !== formData.userConfirmPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          userPassword: "password and confirm password must be same",
        }));

        return;
      } else {
        const isVaildPassword = passwordValidation(formData.userPassword);

        if (!isVaildPassword) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            userPassword: isVaildPassword
              ? ""
              : "password must contain more than 8 character",
          }));

          return;
        }
      }
    } else if (formData.role === "company") {
      if (
        !formData.companyName ||
        !formData.ownerName ||
        !formData.companyAddress ||
        !formData.companyEmail ||
        !formData.companyPassword ||
        !formData.companyConfirmPassword ||
        !formData.contactNumber ||
        !formData.contactEmail ||
        !formData.about
      ) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        showAlert("Please fill in all fields");
        return;
      }
      if (formData.companyPassword !== formData.companyConfirmPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          companyPassword: "password and confirm password must be same",
        }));
      } else {
        const isVaildPassword = passwordValidation(
          formData.companyConfirmPassword
        );
        setErrors((prevErrors) => ({
          ...prevErrors,
          companyPassword: isVaildPassword
            ? ""
            : "password must contain more than 8 character",
        }));

        if (!isVaildPassword) return;
      }
    }

    try {
      let response;
      if (formData.role === "user") {
        const formDataToSend = new FormData();
        formDataToSend.append("firstName", formData.firstName);
        formDataToSend.append("lastName", formData.lastName);
        formDataToSend.append("email", formData.userEmail);
        formDataToSend.append("password", formData.userPassword);
        formDataToSend.append("userContactNumber", formData.userContactNumber);
        formDataToSend.append("userLocation", formData.userLocation);
        formDataToSend.append("userLanguages", formData.userLanguages);
        formDataToSend.append("userSkills", formData.userSkills);
        formDataToSend.append("userAbout", formData.userAbout);
        formDataToSend.append("image", formData.image);
        formDataToSend.append("resume", formData.resume);

        const response = await axios.post(
          "http://localhost:8080/api/users/signup",
          formDataToSend,

          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Response:", response.data);
        // response = await axios.post("http://localhost:8080/api/users/signup", {
        // firstName: formData.firstName,
        // lastName: formData.LastName,
        // email: formData.userEmail,
        // password: formData.userPassword,
        // userContactNumber: formData.userContactNumber,
        // userLocation: formData.userLocation,
        // userLanguages: formData.userLanguages,
        // userSkills: formData.userSkills,
        // userAbout: formData.userAbout,
        //   resume: formData.resume,
        // });
      } else if (formData.role === "company") {
        axios
          .post("http://localhost:8080/api/companies/signup/", {
            name: formData.companyName,
            ownerName: formData.ownerName,
            address: formData.companyAddress,
            email: formData.companyEmail,
            password: formData.companyPassword,
            contactNumber: formData.contactNumber,
            contactEmail: formData.contactEmail,
            about: formData.about,
          })
          .then((response) => {
            console.log("Created");
          });
      }

      showAlert("Account created successfully");
      console.log(formData.resume);
      navigate("/login");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch (error) {
      showAlert(error.response.data);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <div className="login-container1">
          <div className="text-center">
            <p style={{ color: "#3c65f5" }} className="font-sm">
              Register
            </p>
            <h2>Start for free Today</h2>
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
            <div className="from-group">
              <input
                type="radio"
                name="role"
                value="user"
                checked={formData.role === "user"}
                onChange={handleInputChange}
                required
              />
              <label className="ml-1.5">User</label>
              <input
                type="radio"
                name="role"
                value="company"
                onChange={handleInputChange}
                checked={formData.role === "company"}
                required
                className="ml-5"
              />
              <label className="ml-1.5">Company</label>
            </div>
            {inputFields.map((field, i) => (
              <div key={i} className="from-group">
                <label className="form-label">{field.label}</label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.placeholder || ""}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required
                  className={`form-input shadow-sm bg-gray-50 border border-[#e0e6f6] text-gray-900 rounded-lg block w-full p-2.5 ${
                    errors[field.name] ? "border-red-500 " : ""
                  } `}
                />
                {errors[field.name] && (
                  <p className="text-red-500">{errors[field.name]}</p>
                )}
              </div>
            ))}
            {formData.role === "company" && (
              <div className="form-group mb-6">
                <label className="form-label">About Company *</label>
                <textarea
                  name="about"
                  value={formData["about"]}
                  onChange={handleInputChange}
                  required
                  className={`form-input shadow-sm bg-gray-50 border border-[#e0e6f6] text-gray-900 rounded-lg block w-full p-2.5 ${
                    errors["about"] ? "border-red-500 " : ""
                  } `}
                  cols="30"
                  rows="5"
                />
                {errors["about"] && (
                  <p className="text-red-500">{errors["about"]}</p>
                )}
              </div>
            )}

            {/* user fields */}
            {formData.role === "user" && (
              <>
                <div className="form-group mb-6">
                  <label className="form-label">About yourself *</label>
                  <textarea
                    name="userAbout"
                    value={formData["userAbout"]}
                    onChange={handleInputChange}
                    required
                    className={`form-input shadow-sm bg-gray-50 border border-[#e0e6f6] text-gray-900 rounded-lg block w-full p-2.5 ${
                      errors["userAbout"] ? "border-red-500 " : ""
                    } `}
                    cols="30"
                    rows="5"
                  />
                  {errors["userAbout"] && (
                    <p className="text-red-500">{errors["userAbout"]}</p>
                  )}
                </div>

                <div className="form-group mb-6">
                  <label className="form-label">Skills *</label>
                  <TagsInput
                    className={`form-input shadow-sm bg-gray-50 border border-[#e0e6f6] text-gray-900 rounded-lg block w-full p-2.5 ${
                      errors["userSkills"] ? "border-red-500 " : ""
                    } `}
                    value={formData.userSkills}
                    name="userSkills"
                    onChange={handleSkillsChange}
                    inputProps={{
                      placeholder: "Enter skills",
                      style: { width: "240px" },
                    }}
                    required
                  />
                  {errors["userSkills"] && (
                    <p className="text-red-500">{errors["userSkills"]}</p>
                  )}
                </div>

                <div className="form-group mb-6">
                  <label className="form-label">Languages *</label>
                  <TagsInput
                    className={`form-input shadow-sm bg-gray-50 border border-[#e0e6f6] text-gray-900 rounded-lg block w-full p-2.5 ${
                      errors["userLanguages"] ? "border-red-500 " : ""
                    } `}
                    value={formData.userLanguages}
                    name="userLanguages"
                    onChange={handleLanguagesChange}
                    inputProps={{
                      placeholder: "Enter Languages",
                      style: { width: "240px" },
                    }}
                    required
                  />
                  {errors["userLanguages"] && (
                    <p className="text-red-500">{errors["userLanguages"]}</p>
                  )}
                </div>
                <div className="form-group mb-6">
                  <label className="form-label">Image*</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="form-input border-0 text-gray-900 rounded-lg block w-full p-2.5 shadow-sm bg-gray-50"
                    accept=".jpeg,.jpg,.png"
                  />
                </div>
                <div className="form-group mb-6">
                  <label className="form-label">Resume*</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleResumeChange}
                    className="form-input border-0 text-gray-900 rounded-lg block w-full p-2.5 shadow-sm bg-gray-50"
                    accept=".pdf,.doc,.docx,.jpeg,.jpg,.png"
                  />
                </div>
              </>
            )}
            <div className="form-group flex mt-5 justify-between font-sm">
              <label className="form-label cursor-pointer">
                <input type="checkbox" className="form-input cursor-pointer" />
                Agree our terms and policy
              </label>
              <span className="cursor-pointer">Lean more</span>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className=" w-full  px-4 py-3 bg-[#05264e] text-white font-bold rounded-md hover:bg-[#3c65f5]  focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Sign up
            </button>
            <div className="text-center mt-4 text-[#6c757d] text-sm">
              Already have an account?
              <span className="text-[#05264e] hover:text-[#3c65f5]">
                Sign in
              </span>
            </div>
          </form>
        </div>
        <div className="img1 hidden absolute md:block">
          <img
            className="max-w-[100%] img-ani"
            src={spaceShip}
            alt="spaceship image"
          />
        </div>
        <div className="img2">
          <img className="max-w-full" src={bottomimg} alt="image" />
        </div>
      </div>
    </div>
  );
}

function passwordValidation(password) {
  //   if (password.length < 8) {
  //     return false;
  //   }
  //   let countUpperCase = 0;
  //   let countLowerCase = 0;
  //   let countDigit = 0;
  //   let countSpecialCharacters = 0;
  //   const specialChars = [
  //     "!",
  //     "@",
  //     "#",
  //     "$",
  //     "%",
  //     "^",
  //     "&",
  //     "*",
  //     "(",
  //     ")",
  //     "_",
  //     "-",
  //     "+",
  //     "=",
  //     "[",
  //     "{",
  //     "]",
  //     "}",
  //     ":",
  //     ";",
  //     "<",
  //     ">",
  //   ];
  //   for (let i = 0; i < password.length; i++) {
  //     if (specialChars.includes(password[i])) {
  //       countSpecialCharacters++;
  //     } else if (!isNaN(password[i] * 1)) {
  //       countDigit++;
  //     } else {
  //       if (password[i] === password[i].toUpperCase()) {
  //         countUpperCase++;
  //       }
  //       if (password[i] === password[i].toLowerCase()) {
  //         countLowerCase++;
  //       }
  //     }
  //   }

  //   if (
  //     countLowerCase === 0 ||
  //     countUpperCase === 0 ||
  //     countDigit === 0 ||
  //     countSpecialCharacters === 0
  //   ) {
  //     return false;
  //   }
  return true;
}
