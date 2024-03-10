import React, { useEffect, useState, useContext } from "react";
import brand from "../../assets/brand.png";
import downloadicon from "../../assets/downloadicon.svg";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { alertContext } from "../../components/context/Context";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Userprofile from "../profile/Userprofile";

export default function Applicantspage() {
  const [applicants, setApplicants] = useState([]);
  const [job, setJob] = useState([]);
  const navigate = useNavigate();
  const { showAlert } = useContext(alertContext);
  const location = useLocation();
  const jobId = new URLSearchParams(location.search).get("jobId");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/jobs/${jobId}/applications`
        );

        if (response.status === 200) {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          setApplicants(response.data);
          console.log(response.data);
          console.log("User Given");
        } else {
          showAlert("Login kr pehle");
          console.error("UserFetch failed:", response.statusText);
        }
      } catch (error) {
        showAlert("NO Error");
      }
    }

    fetchData();
  }, [jobId]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/jobs/${jobId}`
        );

        if (response.status === 200) {
          // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          setJob(response.data);
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          // console.log(response.data);
          console.log("User Given");
        } else {
          showAlert("Login kr pehle");
          console.error("UserFetch failed:", response.statusText);
        }
      } catch (error) {
        showAlert("Error");
      }
    }

    fetchData();
  }, [jobId]);

  const handleResumeClick = async (userId) => {
    try {
      await fetch(`http://localhost:8080/api/users/resume/${userId}/`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.buffer.data);
          const uint8Array = new Uint8Array(data.buffer.data);
          const blob = new Blob([uint8Array]);
          const resumeUrl = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = resumeUrl;

          link.setAttribute("download", "resume.pdf");
          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          window.URL.revokeObjectURL(resumeUrl);
        });
    } catch (e) {
      console.error(e);
    }
  };
  const handleChange = (userId) => {
    navigate(`/userprofile?userId=${userId}`);
  };
  return (
    <div className="container">
      <div className="container mx-auto">
        <div className="mt-5 border-2 rounded-lg border-gray-200 bg-[#f8faff] p-4 ">
          <div className="flex flex-col">
            <div className="flex justify-between flex-wrap">
              <div className="flex">
                <div className="">
                  <img src={brand} alt="" />
                </div>
                <div className="flex flex-col ml-5">
                  <h5 className="font-bold text-2xl ">
                    {job.company && job.company.name}
                  </h5>
                  <p className="font-sm">
                    <i className="fa-solid fa-location-dot mr-2"></i>
                    {job.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-row-reverse">
                <img
                  src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/flash.aea6c8a8.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-3 ml-3">
              <h3 className="font-bold text-xl ">{job.title}</h3>
              <p className="mt-2 font-sm text-gray-600">
                <i className="fa-solid fa-briefcase mr-2" />
                {job.type}

                <i className="fas fa-tasks mr-2 ml-10 mt-3" />

                {job?.skills &&
                  job.skills.map((skill) => {
                    return (
                      <p className="inline-block text-sm h-fit bg-gray-200 p-1 rounded text-gray-500 mr-2">
                        {skill}
                      </p>
                    );
                  })}
              </p>
              <div className="mt-3 mb-3"></div>
              <p
                className="mt-2 font-md"
                dangerouslySetInnerHTML={{ __html: job.description }}
              ></p>
              <p className="mt-3 text-xl font-bold text-blue-600">
                <i className="fa-solid fa-indian-rupee-sign mr-2" />
                {job.salary} <span className="text-[13px]">L.P.A</span>
              </p>
            </div>
          </div>
        </div>

        <div className="font-bold text-3xl my-3">Job Applicants</div>
        <div className="flex flex-col">
          <Table className="striped-columns">
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((person, i) => (
                <tr key={person.id}>
                  <td>{i + 1}</td>
                  <td>
                    <button
                      className="btn-apply font-md"
                      onClick={() => handleChange(person.id)}
                    >
                      {person.first_name} {person.last_name}
                    </button>
                  </td>
                  <td>{person.email}</td>
                  <td>{person.contact_no}</td>
                  <td>
                    <button
                      onClick={() => handleResumeClick(person.id)}
                      className="download-btn"
                      style={{
                        background: `url(${downloadicon}) no-repeat 24px 17px, #3c65f5`,
                        width: "150px",
                        height: "50px",
                        lineHeight: "0px",
                      }}
                    >
                      Resume
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* {applicants.map((person, i) => {
            return (
              <div className="flex flex-row text-lg justify-start mt-1 mb-2">
                <p className="mr-2">{i + 1}.</p>
                <p className="basis-1/5">
                  {person.first_name + " " + person.last_name}
                </p>
                <p className="basis-1/5">{person.email}</p>
                <p className="basis-1/5">{person.contact_no}</p>
                <button
                  onClick={() => handleResumeClick(person.id)}
                  style={{
                    background: ` url(${downloadicon}) no-repeat 24px 17px,#3c65f5`,
                    width: "150px",
                    height: "50px",
                    lineHeight: "0px",
                  }}
                  className="download-btn"
                >
                  Resume
                </button>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
