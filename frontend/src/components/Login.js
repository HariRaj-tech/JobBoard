import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "user", // Default role is 'user'
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

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
        alert(
          `Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`
        );
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
    <div className="container mx-auto px-4 py-8 bg-[#C6DCBA] h-screen">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
        <form className="space-y-4">
          <div className="flex items-center mb-2">
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
          <div>
            <div className="mb-2">
              <label htmlFor="userEmail" className="block text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="userEmail"
                placeholder="Enter your email address"
                value={loginData.email}
                onChange={handleChange}
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
                name="password"
                id="userPassword"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleChange}
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
