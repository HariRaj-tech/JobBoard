import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import companyimg from "../../assets/companyimg.png";
import axios from "axios";
import brand from "../../assets/brand.png";
import { useNavigate } from "react-router-dom";

export default function Temppage() {
  const [companyData, setCompanyData] = useState({});
  const [jobsData, setJobsData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        if (localStorage.getItem("id")) {
          const id = localStorage.getItem("id");
          const response = await axios.get(
            `http://localhost:8080/api/companies/${id}`
          );
          if (response.status === 200) {
            const data = response.data;
            setCompanyData(data);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            console.log(data);
          }
        }
      } catch (error) {
        console.error("Error fetching Company details:", error);
      }
    }

    async function fetchJobs() {
      try {
        if (localStorage.getItem("id")) {
          const id = localStorage.getItem("id");
          const response = await axios.get(
            `http://localhost:8080/api/companies/jobs/${id}`
          );
          if (response.status === 200) {
            const data = response.data;
            setJobsData(data.jobs);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            console.log(data);
          }
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    }

    fetchData();
    fetchJobs();
  }, []);

  // console.log(jobsData);
  // console.log(jobsData.length);

  const date = new Date(companyData.createdAt);
  const memberSince = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const handleClick = (jobId) => {
    navigate(`/applicantspage?jobId=${jobId}`);
  };

  return (
    <div className="container">
      <div className="container mx-auto w-full">
        <div className="container mt-10">
          <img className="rounded-2xl" src={companyimg} alt="" />
        </div>
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div>
            <h1 className="text-3xl font-bold">{companyData.name}</h1>
          </div>
          <div className="flex items-center">
            {/* <Link className="text-white text-lg bg-blue-600 p-2 rounded-lg hover:bg-blue-800 mr-10">View Older Jobs</Link> */}
            <Link
              to="/postnewjob"
              className="text-white text-lg bg-blue-600 p-2 rounded-lg hover:bg-blue-800 "
            >
              Post New Job
            </Link>
          </div>
        </div>
      </div>

      <div className="flex mt-4 mb-4 sm:flex-row flex-col-reverse">
        <div className="flex flex-col md:w-3/4">
          <div className="">
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <p
              className="pr-5"
              dangerouslySetInnerHTML={{ __html: companyData.about }}
            />
          </div>
          <div className="mt-4 sm:mr-11">
            <h2 className="text-lg font-bold">Recently posted Jobs</h2>

            {jobsData.length > 0 ? (
              jobsData.map((job) => {
                return (
                  <>
                    <div className="mt-5 border-2 border-gray-200 bg-[#f8faff] p-4 hover:-translate-y-3 hover:bg-[#fff] hover:border-[#b4c0e0] rounded-lg">
                      <div className="flex flex-col" key={job.id}>
                        <div className="flex justify-between flex-wrap">
                          <div className="flex">
                            <div className="">
                              <img src={brand} alt="" />
                            </div>
                            <div className="flex flex-col ml-5">
                              <h5 className="font-bold text-lg">
                                {companyData.name}
                              </h5>
                              <p>
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
                          <h3 className="font-bold text-2xl ">{job.title}</h3>
                          <p className="mt-2 font-sm text-gray-600">
                            <i className="fa-solid fa-briefcase mr-2" />
                            {job.type}
                            <i className="fas fa-tasks mr-2 ml-10 mb-3" />
                            {job.skills.map((skill) => {
                              return (
                                <p className="mt-2 inline-block h-fit bg-gray-200 p-1 rounded text-xs text-gray-500 mr-2">
                                  {skill}
                                </p>
                              );
                            })}
                          </p>
                          <p
                            className="mt-2 font-md"
                            dangerouslySetInnerHTML={{
                              __html: job.description,
                            }}
                          >
                            {/* {job.description && job.description.length > 50
                              ? job.description.substring(0, 500) + "..."
                              : job.description + "..."} */}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="mt-3 text-xl gap-1 font-bold text-blue-600 flex items-center">
                              <i className="fa-solid fa-indian-rupee-sign mr-2" />
                              {job.salary}{" "}
                              <span className="text-[13px] mt-1">L.P.A</span>
                            </p>
                            <div
                              className="btn btn-apply mr-5 text-xl text-blue-600 "
                              onClick={() => handleClick(job.id)}
                            >
                              View Applicants
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <div className="font-bold text-3xl text-red-600 mt-3">
                No jobs posted
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start md:w-1/4 border border-1 pl-5 py-6 h-fit">
          <div className="text-xl font-bold ">Company Information</div>
          <div className="row">
            <div className="font-bold">
              <i className="fa-solid fa-tag mr-2"></i>Name
            </div>
            <div className="ml-6">{companyData.name}</div>
          </div>
          <div className="row">
            <div className="font-bold">
              <i className="fa-solid fa-user-tag mr-2"></i>Owner Name
            </div>
            <div className="ml-7">{companyData.owner_name}</div>
          </div>
          <div className="row">
            <div className="font-bold">
              <i className="fa-solid fa-clock mr-2"></i>Member Since
            </div>
            <div className="ml-6">{memberSince}</div>
          </div>
          <div className="row">
            <div className="font-bold">
              <i className="fa-solid fa-map-location-dot mr-2"></i>Address
            </div>
            <div className="ml-6">{companyData.address}</div>
          </div>
          <div className="row">
            <div className="font-bold">
              <i className="fa-solid fa-phone mr-2"></i>Phone
            </div>
            <div className="ml-6">{companyData.contact_number}</div>
          </div>
          <div className="row">
            <div className="font-bold">
              <i className="fa-solid fa-envelope mr-2"></i>Email
            </div>
            <div className="ml-6">{companyData.contact_email}</div>
          </div>
        </div>
      </div>

      {/* footer */}
      {/* <div className="flex justify-center items-center text-2xl mb-3">
        <Link>
          <i className="fa-brands fa-facebook mr-3"></i>
        </Link>
        <Link>
          <i className="fa-brands fa-x-twitter mr-3"></i>
        </Link>
        <Link>
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>

      <div className="container mx-auto text-center border-t-2">
        <h2 className="font-bold text-xl mt-3 ">Job Board</h2>
        <p>
          JobBoard is the best resource to discover and connect with employers
          and employees worldwide.
        </p>
        <div className="container mx-auto my-5 flex justify-evenly border-b-2 pb-3 ">
          <div>
            <h1 className="font-bold">Resources</h1>
            <ul className="text-md list-none">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold">Community</h1>
            <ul className="text-md list-none">
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Credit</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold">Quick links</h1>
            <ul className="text-md list-none">
              <li>
                <a href="#">iOS</a>
              </li>
              <li>
                <a href="#">Android</a>
              </li>
              <li>
                <a href="#">Microsoft</a>
              </li>
              <li>
                <a href="#">Desktop</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold">More</h1>
            <ul className="text-md list-none">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex justify-center items-center text-2xl'>
                    <a href="#"><i className="fa-brands fa-facebook mr-3"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter mr-3"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>

        <p className="pb-5">Copyright © 2022. JobBox all right reserved</p>
      </div> */}
    </div>
  );
}
