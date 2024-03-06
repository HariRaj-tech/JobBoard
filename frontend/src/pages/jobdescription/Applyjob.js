import headerimg from "../../assets/thumb.png";
import briefcaseimg from "../../assets/briefcase.svg";
import industryimg from "../../assets/industry.svg";
import joblevelimg from "../../assets/job-level.svg";
import salaryimg from "../../assets/salary.svg";
import experienceimg from "../../assets/experience.svg";
import jobtypeimg from "../../assets/job-type.svg";
import deadlineimg from "../../assets/deadline.svg";
import updateimg from "../../assets/updated.svg";
import locationimg from "../../assets/location.svg";
import companylogo from "../../assets/avatar.png";
import fb from "../../assets/fb.svg";
import x from "../../assets/x.svg";
import reddit from "../../assets/rd.svg";
import wa from "../../assets/wa.svg";
import "./Applyjob.css";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { alertContext } from "../../components/context/Context";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Applyjob() {
  const [jobInfo, setJobInfo] = useState([]);
  const navigate = useNavigate();
  const { showAlert } = useContext(alertContext);
  const location = useLocation();
  const jobId = new URLSearchParams(location.search).get("jobId");
  const userId = localStorage.getItem("id");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/job/${userId}/${jobId}`
        );

        if (response.status === 200) {
          // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          setJobInfo(response.data);
          console.log("Job Given");
        } else {
          showAlert("Login kr pehle");
          console.error("jobFetch failed:", response.statusText);
        }
      } catch (error) {
        showAlert("Login Before Applying to job");
        navigate("/login");
      }
    }

    fetchData();
  }, [userId, jobId]);

  const [loading, setLoading] = useState(false); // State to track loading status
  const [applied, setApplied] = useState(false); // State to track if job is applied

  const jobData = {
    company: "Address",
    title: "Senior Full Stack Engineer, Creator Success Full Time",
    type: "Fulltime",
    industry: "Mechanical / Auto / Automotive, Civil / Construction",
    level: "Experienced (Non - Manager)",
    salary: "$800 - $1000",
    experience: "1 - 2 years",
    deadline: "1/2/2024",
    skills: ["React js", "Node js", "python"],
    location: "Dallas, Texas",
    address: "205 North Michigan Avenue, Suite 810 Chicago, 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@Evara.com",
    jobDescription:
      "A portfolio demonstrating well thought through and polished end to end customer journeys. 5+ years of industry experience in interactive design and / or visual design. Excellent interpersonal skills. Aware of trends inmobile, communications, and collaboration. Ability to create highly polished design prototypes, mockups, and other communication artifacts. The ability to scope and estimate efforts accurately and prioritize tasks and goals independently. History of impacting shipping products with your work. A Bachelor's Degree in Design (or related field) or equivalent professional experience. Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch.",
  };

  const handleApplyClick = async () => {
    setLoading(true); // Show loading UI
    setTimeout(() => {
      setLoading(false); // Hide loading UI after a delay
      setApplied(true); // Mark the job as applied
      showAlert("Job applied successfully");
      navigate("/jobinfo");
    }, 2000); // Simulating a 2-second loading time
  };

  return (
    <div className="applyjob">
      <div className="header">
        <div className="img-container">
          <img src={headerimg} alt="img not found" />
        </div>
        <div className="title-container">
          <div className="title">
            <h3>{jobInfo.title}</h3>
            <div>
              <span
                style={{ background: `url(${briefcaseimg}) no-repeat 0 2px` }}
                className="briefcase"
              >
                {jobInfo.type}
              </span>
            </div>
          </div>
          <div className="btn-container">
            <button
              className={`apply-btn ${applied ? "applied" : ""} ${
                loading ? "loading" : ""
              }`}
              onClick={handleApplyClick}
              disabled={loading || applied} // Disable button during loading or after job is applied
            >
              {loading ? "Applying..." : applied ? "Applied" : "Apply now"}
            </button>
          </div>
        </div>
      </div>
      <div className="info-container">
        <div className="row">
          <div className="col1">
            <div className="job-overview">
              <h5>Employment Information</h5>
              <div className="table-row">
                <div className="col">
                  <div>
                    <img src={industryimg} alt="image not found" />
                  </div>

                  <div className="content">
                    <span>Company</span>
                    <strong>{jobInfo.company && jobInfo.company.name}</strong>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <img src={joblevelimg} alt="image not found" />
                  </div>
                  <div className="content">
                    <span>Industry</span>
                    <strong>{jobInfo.industry}</strong>
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div className="col">
                  <div>
                    <img src={salaryimg} alt="image not found" />
                  </div>
                  <div className="content">
                    <span>Salary</span>
                    <strong>{jobInfo.salary}</strong>
                    <strong className="ml-1">L.P.A</strong>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <img src={experienceimg} alt="image not found" />
                  </div>
                  <div className="content">
                    <span>Experience</span>
                    <strong>{jobInfo.experience}</strong>
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div className="col">
                  <div>
                    <img src={jobtypeimg} alt="image not found" />
                  </div>
                  <div className="content">
                    <span>Job type</span>
                    <strong>{jobInfo.type}</strong>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <img src={deadlineimg} alt="image not found" />
                  </div>
                  <div className="content">
                    <span>Deadline</span>
                    <strong>{jobInfo.deadline}</strong>
                  </div>
                </div>
              </div>
              <div className="table-row">
                <div className="col">
                  <div>
                    <img src={updateimg} alt="image not found" />
                  </div>
                  <div className="content">
                    <span>Skills</span>
                    <strong>
                      {jobInfo.skills &&
                        jobInfo.skills.map((skill, index) => (
                          <span key={index}>{skill}</span>
                        ))}
                    </strong>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <img src={locationimg} alt="image not found" />
                  </div>
                  <div className="content">
                    <span>Location</span>
                    <strong>{jobInfo.location}</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-company">
              <h3 className="text-xl">Job description</h3>
              <p>{jobInfo.description}</p>
            </div>
            <div className="col1-footer">
              <span>{jobInfo.company && jobInfo.company.name}</span>
            </div>
            <div className="media-container">
              <div className="media">
                <h5 style={{ fontSize: "16px", fontWeight: "600" }}>
                  Share this
                </h5>
                <span className="media-icon">
                  <img src={fb} alt="facebook" />
                </span>
                <span className="media-icon">
                  <img src={x} alt="facebook" />
                </span>
                <span className="media-icon">
                  <img src={reddit} alt="facebook" />
                </span>
                <span className="media-icon">
                  <img src={wa} alt="facebook" />
                </span>
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="address-card">
              <div className="address-title">
                <div>
                  <img src={companylogo} alt="image not found" />
                </div>
                <div>
                  <span>{jobInfo.company && jobInfo.company.name}</span>
                  <span className="address-location">
                    <img src={locationimg} alt="image not found" />{" "}
                    {jobInfo.location}
                  </span>
                </div>
              </div>
              <div className="address-container">
                <ul>
                  <li>Address: {jobInfo.company && jobInfo.company.address}</li>
                  <li>Phone: {jobInfo.company && jobInfo.company.phone}</li>
                  <li>Email: {jobInfo.company && jobInfo.company.email}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applyjob;
