import React, { useState, useContext } from "react";
import { alertContext } from "../../components/context/Context";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../findJob/style.css";
import "../findJob/findJob.css";
import { useNavigate } from "react-router-dom";

const Postnewjob = () => {

  const { showAlert } = useContext(alertContext);

  const companyId = localStorage.getItem("id");
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: "",
    title: "",
    description: "",
    experience: "",
    type: "",
    industry: "",
    salary: "",
    deadline: "",
    skills: [],
    companyId: companyId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSkillsChange = (tags) => {
    setFormData((prevData) => ({ ...prevData, skills: tags }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate required fields
    const requiredFields = [
      "location",
      "title",
      "description",
      "experience",
      "type",
      "deadline",
      "industry",
      "salary",
      "skills",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        showAlert(
          `Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`
        );
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        return;
      }
    }

    try {
      console.log(formData.companyId);
      const response = await axios.post(
        "http://localhost:8080/api/jobs",
        formData
      );

      if (response.status === 200) {
        showAlert("Successfully registered your job");
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        navigate("/companyhomepage");
        console.log("Registration Complete");
      } else {
        console.error("Registration failed:", response.statusText);
      }
    } catch (err) {
      console.log("An error occured:", err);
    }
    // Add your form submission logic here
  };

  return (
    <>
      <section className="pt-100">
        <div className="container">
          <div className="login-register-cover justify-content-center">
            <div className="text-center">
              <div className="text-center">
                <p className="font-sm">Post The Job</p>
                <h2 className="mt-10">Make Hiring Effortless</h2>
                <p className="login-text-p">
                  Access to all features. No credit card required.
                </p>
              </div>

              <form className="mt-50 login-register mx-auto justify-content-center">
                <div className="row">
                  <div className="mb-3 col-lg-4 col-md-6 col-sm-12 form-group">
                    <label className=" form-label text-start">Job Title</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Full Stack Developer"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="mb-3 mx-auto col-lg-4 col-md-6 col-sm-12 form-group">
                    <label className=" form-label text-start">Location</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York, US"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                {/* <div className="row">
                  
                </div> */}
                <div className="row">
                  <div className="mb-3 col-lg-4 col-md-6 col-sm-12 form-group">
                    <label className=" form-label text-start">Experience</label>
                    <select
                      className="form-control"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                    >
                      <option>Select Experience</option>
                      <option>Entry Level</option>
                      <option>Internship</option>
                      <option>Associate</option>
                      <option>Mid Level</option>
                      <option>Director</option>
                      <option>Executive</option>
                    </select>
                  </div>
                  <div className="mb-3 mx-auto col-lg-4 col-md-6 col-sm-12 form-group">
                    <label className=" form-label text-start">Job Type</label>
                    <select
                      className="form-control"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option>Select Job Type</option>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Remote</option>
                      <option>Freelance</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-lg-4 col-md-6 col-sm-12 form-group">
                    <label className=" form-label text-start">Industry</label>
                    <select
                      className="form-control"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                    >
                      <option>Select Industry</option>
                      <option>Software</option>
                      <option>Management</option>
                      <option>Finance</option>
                      <option>Recruiting</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                  <div className="mb-3 mx-auto col-lg-4 col-md-6 col-sm-12 form-group">
                    <label className=" form-label text-start">Salary</label>
                    <input
                      className="form-control"
                      type="number"
                      step="0.1"
                      placeholder="Write in LPA"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-lg-4 col-md-6 col-sm-12 form-group">
                    <label className="form-label text-start">Job Skills*</label>
                    <TagsInput
                      className="form-control"
                      value={formData.skills}
                      name="skills"
                      onChange={handleSkillsChange}
                      inputProps={{
                        placeholder: "Enter skills",
                        style: { width: "240px" },
                      }}
                    />
                  </div>
                  <div className="mb-3 mx-auto col-lg-4 col-md-6 col-sm-12 form-group">
                    <label className=" form-label text-start">Deadline*</label>
                    <input
                      className="form-control"
                      type="date"
                      placeholder="24/01/2024"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 w-full form-group">
                    <label className=" form-label text-start">
                      Job Description
                    </label>
                    <textarea
                      className="form-control w-full"
                      placeholder="Describe your job in detail..."
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <Button
                  className="px-5 mb-50 mt-10 py-3 bg-[#3c65f5] text-white  rounded-md hover:bg-[#05264e]  focus:ring-4 focus:outline-none focus:ring-blue-300"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Post Job
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Postnewjob;
