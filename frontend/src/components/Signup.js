import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
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
        alert("Passwords do not match");
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
        alert("Passwords do not match");
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
    <div className="container mx-auto px-4 py-8 bg-[#C6DCBA] h-screen">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Create a new account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="user"
              name="role"
              value="user"
              checked={formData.role === "user"}
              onChange={handleInputChange}
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
              checked={formData.role === "company"}
              onChange={handleInputChange}
              className="ml-4 mr-2"
            />
            <label htmlFor="company" className="text-sm font-medium">
              Company
            </label>
          </div>
          {formData.role === "user" && (
            <div>
              <div className="mb-2">
                <label htmlFor="userName" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="userEmail"
                  className="block text-sm font-medium"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="userPassword"
                  className="block text-sm font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="userPassword"
                  name="userPassword"
                  value={formData.userPassword}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="userConfirmPassword"
                  className="block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="userConfirmPassword"
                  name="userConfirmPassword"
                  value={formData.userConfirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>
            </div>
          )}

          {formData.role === "company" && (
            <div>
              <div className="mb-2">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName" // Add name attribute
                  value={formData.companyName} // Bind value to state
                  onChange={handleInputChange} // Bind onChange to update state
                  placeholder="Enter your company name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="ownerName"
                  className="block text-sm font-medium"
                >
                  Owner Name
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  placeholder="Enter your owner name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="companyAddress"
                  className="block text-sm font-medium"
                >
                  Company Address
                </label>
                <textarea
                  id="companyAddress"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleInputChange}
                  placeholder="Enter your company address"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="companyEmail"
                  className="block text-sm font-medium"
                >
                  Company Email Address
                </label>
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  placeholder="Enter your company email address"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="companyPassword"
                  className="block text-sm font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="companyPassword"
                  name="companyPassword"
                  value={formData.companyPassword}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="companyConfirmPassword"
                  className="block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="companyConfirmPassword"
                  name="companyConfirmPassword"
                  value={formData.companyConfirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
