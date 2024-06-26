import React, { useState, useEffect } from "react";
import axios from "axios";
import "../findJob/style.css";
import "../findJob/findJob.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //Fetching user Details for name in home page
  const [userDetails, setUserDetails] = useState({ first_name: "" });
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        if (localStorage.getItem("id")) {
          const id = localStorage.getItem("id");
          const response = await axios.get(
            `http://localhost:8080/api/users/${id}`
          );
          if (response.status === 200) {
            const data = response.data;
            setUserDetails(data);
            console.log(data);
          }
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
    fetchData();
  }, []);

  //Jobs to show in home
  const [jobData, setJobdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let res;
        const JobsResponse = await axios.get("http://localhost:8080/api/jobs/");
        res = JobsResponse.data;

        setJobdata(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
    fetchData();
  }, []);

  //when click view details goes to another page
  const handleClick = (jobId) => {
    navigate(`/jobinfo?jobId=${jobId}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container mt-100" style={{ marginTop: "10% !important" }}>
        <div className="heroRow row">
          <div className="col-md-5">
            <div className="left container px-5">
              {/* heading */}
              {localStorage.getItem("id") && (
                <div className="text-5xl font-bold text-grey-500 text-start mb-6">
                  Hi{" "}
                  <span className="text-blue-600">
                    {userDetails.first_name}
                  </span>
                </div>
              )}
              <h1 className="heading-banner mt-5 wow animate__animated animate__fadeInUp">
                The
                <span className="color-brand-2"> Easiest Way </span>
                <br className="d-none d-lg-block" />
                to Get Your New Job
              </h1>
              {/* banner-image */}
              <div className="banner">
                Each month, more than 3 million job seekers turn to
                <br className="d-none d-lg-block" />
                website in their search for work, making over
                <br className="d-none d-lg-block" />
                applications every single day
                <br className="d-none d-lg-block" />
              </div>
            </div>
          </div>
          <div className="col-md-5 images images2 container">
            <div className="block-1 shape-1">
              <img
                className="img-responsive"
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/banner1.png"
                alt="jobBox"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Browse by category section */}
      <div className="container category">
        <h2 class="text-center mb-10" style={{ marginTop: "10% !important" }}>
          Browse by category
        </h2>
        <p className="text-center font-xs">
          Find the job that’s perfect for you. about 800+ new jobs everyday
        </p>
        <div className="row content-box justify-content-center gap-3 mt-5">
          <div className="col-md-2 category-col d-flex">
            <div>
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/lightning.svg"
                className="img-fluid"
                alt="img-logo-1"
              />
            </div>
            <div className="category-content">
              <h4>Management</h4>
              <p className="">
                965<span> Jobs Available</span>
              </p>
            </div>
          </div>
          <div className="col-md-2 category-col d-flex">
            <div>
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/lightning.svg"
                className="img-fluid"
                alt="img-logo-1"
              />
            </div>
            <div className="category-content">
              <h4>Finance</h4>
              <p className="">
                168<span> Jobs Available</span>
              </p>
            </div>
          </div>
          <div className="col-md-2 category-col d-flex">
            <div>
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/lightning.svg"
                className="img-fluid"
                alt="img-logo-1"
              />
            </div>
            <div className="category-content">
              <h4>Software</h4>
              <p className="">
                1856<span> Jobs Available</span>
              </p>
            </div>
          </div>
          <div className="col-md-2 category-col d-flex">
            <div>
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/lightning.svg"
                className="img-fluid"
                alt="img-logo-1"
              />
            </div>
            <div className="category-content">
              <h4>Human Resource</h4>
              <p className="">
                165<span> Jobs Available</span>
              </p>
            </div>
          </div>
          <div className="col-md-2 category-col d-flex">
            <div>
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/lightning.svg"
                className="img-fluid"
                alt="img-logo-1"
              />
            </div>
            <div className="category-content">
              <h4>Security Analyst</h4>
              <p className="">
                254<span> Jobs Available</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hiring Apply Now Banner */}
      <div className="section-box mb-30 ">
        <div className="container">
          <div className="box-hiring d-flex ">
            <div className="text-1 mt-3">
              <span className="text-we-are">WE ARE</span>
              <span className="text-hiring">HIRING</span>
            </div>
            <div className="text-2 mt-3">
              Let's Work Together <br /> &amp; Explore Opportunities
            </div>
            <div className="text-3 mt-3">
              <button type="button" className="btn btn-primary btn-apply">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Job of the day Section */}
      <div className="container mb-5 job-category">
        <h2 class="text-center mb-10">Jobs of the day</h2>
        <p className="text-center ">
          Search and connect with the right candidates faster.
        </p>
        <div className="row justify-content-center gap-3 mt-5">
          <div className="col-md-2 job-category-col d-flex">
            <div className="job-category-image">
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/lightning.svg"
                className="img-fluid"
                alt="img-logo-1"
              />
            </div>
            <div className="job-category-content">
              <h4>Management</h4>
            </div>
          </div>
          <div className="col-md-2 job-category-col d-flex">
            <div className="job-category-image">
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/lightning.svg"
                className="img-fluid"
                alt="img-logo-1"
              />
            </div>
            <div className="job-category-content">
              <h4>Finance</h4>
            </div>
          </div>
          <div className="col-md-2 job-category-col d-flex">
            <div className="job-category-image">
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/lightning.svg"
                className="img-fluid"
                alt="img-logo-1"
              />
            </div>
            <div className="job-category-content">
              <h4>Software</h4>
            </div>
          </div>
          <div className="col-md-2 job-category-col d-flex">
            <div className="job-category-image">
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/lightning.svg"
                className="img-fluid"
                alt="img-logo-1"
              />
            </div>
            <div className="job-category-content">
              <h4>Human Resource</h4>
            </div>
          </div>
          <div className="col-md-2 job-category-col d-flex">
            <div className="job-category-image">
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/lightning.svg"
                className="img-fluid"
                alt="img-logo-1"
              />
            </div>
            <div className="job-category-content">
              <h4>Marketing</h4>
            </div>
          </div>
        </div>
      </div>
      {/* JobCard only upto shown here for show */}
      <div className="row mt-100">
        {jobData.slice(0, 8).map((job) => (
          <div
            className="col-md-6 col-xl-3 col-lg-4 col-sm-12 col-12"
            key={job.id}
          >
            <div className="card">
              <div className="card-body hover-up">
                <div className="card-header d-flex">
                  <span className="flash" />
                  <div className="image-left">
                    <img src={job.logo_url} alt={`logo for job`} />
                  </div>
                  <div className="left-info-card">
                    <span className="job-name">
                      {job.company && job.company.name}
                    </span>
                    <br />
                    <span className="location-content">{job.location}</span>
                  </div>
                </div>
                <div className="card-content ">
                  <h6
                    className="mb-1"
                    style={{ fontWeight: 600, fontSize: 16 }}
                  >
                    {job.title}
                  </h6>
                  <span className="p-card mr-2">
                    <i className="fa-solid fa-briefcase mr-2" />
                    {job.type}
                  </span>
                  <span className="p-card mx-4">
                    <i
                      className="fas fa-business-time mr-2"
                      aria-hidden="true"
                    ></i>
                    {job.experience}
                  </span>
                  <p className=" py-3 p-card ">
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          job.description && job.description.length > 50
                            ? job.description.substring(0, 70) + "..."
                            : job.description + "...",
                      }}
                    ></p>
                  </p>
                  <div className="mt-30">
                    {job.skills.slice(0, 2).map((skill, index) => (
                      <a
                        key={index}
                        href="/"
                        className="btn btn-grey-small mr-1"
                      >
                        {skill}
                      </a>
                    ))}
                  </div>
                  <div className="mt-5 card-bottom">
                    <div className="row">
                      <div className="col-6 col-lg-6">
                        <span className="card-text-price">{job.salary}</span>
                        <span className="card-text-muted mx-1">L.P.A</span>
                      </div>
                      <div className="col-6 col-lg-6">
                        <div
                          className="btn btn-apply mx-4 "
                          onClick={() => handleClick(job.id)}
                        >
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* millions of jobs section */}
      <div className="container mt-100">
        <div className="row px-5">
          <div className="col-md-6">
            <div className="search-job-image">
              <img
                className="img-job-1"
                alt="JobBox"
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/img-chart.png"
              />
              <img
                className="img-job-2"
                alt="JobBox"
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/controlcard.png"
              />
              <img
                className="img-job-3"
                alt="JobBox"
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/img1.png"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-content">
              <span className="text-left-1">Millions Of Jobs.</span>
              <h2 className="text-left-2">
                Find The One That's
                <span className="text-right"> Right</span> For You
              </h2>
              <p className="text-p">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide. The right job is out there.
              </p>
              <div className="buttons">
                <a
                  className="btn btn-primary button-search px-3 py-2 hover-up"
                  href="/findJob"
                >
                  Search Jobs
                </a>
                <a href="/about" className="btn btn-link px-4 py-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*No of Cases etc section */}
      <div className="container mt-100 mb-50">
        <div className="row px-5">
          <div className="col-md-6 col-lg-3">
            <div className="text-center">
              <h1 className="count-h1">
                <span>25</span>
                <span>K+</span>
              </h1>
              <h5>Completed Cases</h5>
              <p className="font-sm count-p">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="text-center">
              <h1 className="count-h1">
                <span>80</span>
                <span>+</span>
              </h1>
              <h5>Happy Clients</h5>
              <p className="font-sm mt-10 count-p">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="text-center">
              <h1 className="count-h1">
                <span>17</span>
                <span>+</span>
              </h1>
              <h5>Our Office</h5>
              <p className="font-sm mt-10 count-p">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="text-center">
              <h1 className="count-h1">
                <span>86</span>
                <span>+</span>
              </h1>
              <h5>Skilled People</h5>
              <p className="font-sm mt-10 count-p">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
