import React, { useEffect, useState } from "react";
import axios from "axios";
import "./findJob.css";
import "./style.css";
import { useNavigate } from "react-router-dom";

const FindJob = () => {
  const [jobData, setJobdata] = useState([]);
  const [industryFilter, setIndustryFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState(null);
  const [locationFilter, setLocationFilter] = useState("");
  let navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    industry: 0,
    location: 0,
  });

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const searchResponse = await axios.get(
        "http://localhost:8080/api/job/search",
        {
          params: {
            industry:
              searchParams.industry === 0
                ? ""
                : e.target[0].options[searchParams.industry].text,
            location:
              searchParams.location === 0
                ? ""
                : e.target[1].options[searchParams.location].text,
          },
        }
      );
      // Handle the response data, e.g., update state with the fetched jobs
      let response = searchResponse.data.Jobs;
      // console.log("response", response);
      setJobdata(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  // console.log(jobData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        if (locationFilter) {
          // Make API call for location filter
          const locationResponse = await axios.get(
            `/jobs/location/${locationFilter}`
          );
          response = locationResponse.data.jobs;
        } else {
          const allJobsResponse = await axios.get(
            "http://localhost:8080/api/job/"
          );
          response = allJobsResponse.data;
        }

        if (industryFilter) {
          response = response.filter(
            (job) => job.industry.toLowerCase() === industryFilter.toLowerCase()
          );
        }

        if (salaryFilter !== null) {
          response = response.filter(
            (job) =>
              job.salary >= salaryFilter.min && job.salary <= salaryFilter.max
          );
        }

        if (experienceFilter) {
          response = response.filter(
            (job) =>
              job.experience.toLowerCase() === experienceFilter.toLowerCase()
          );
        }

        if (typeFilter) {
          response = response.filter(
            (job) => job.type.toLowerCase() === typeFilter.toLowerCase()
          );
        }

        setJobdata(Array.isArray(response) ? response : []);
      } catch (err) {
        console.log("Error Fetching Data", err);
      }
    };

    fetchData();
  }, [
    locationFilter,
    industryFilter,
    salaryFilter,
    experienceFilter,
    typeFilter,
  ]);

  const handleClick = (jobId) => {
    navigate(`/jobinfo?jobId=${jobId}`);
  };

  return (
    <>
      <div className="container">
        <div className="px-4 py-5 my-5 text-center box-banner">
          <h1 className="fw-bold box-banner-header">
            <span className="box-banner-header-22Jobs">22 Jobs</span>
            <span>Available Now</span>
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead box-banner-text mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap.
            </p>

            <div className="d-grid gap-2  justify-content-sm-center">
              <img
                className="box-banner-image1"
                src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg"
                alt=""
              />
              <div className="searchBar">
                <form className="d-block" onSubmit={handleSearch}>
                  <select
                    className="form-input m-2 col-lg-4 col-md-6 col-sm-12 col-auto box"
                    size={1}
                    aria-label="size 1 select example"
                    onChange={(e) =>
                      setSearchParams((prev) => ({
                        ...prev,
                        industry: parseInt(e.target.value),
                      }))
                    }
                  >
                    <option value={0}>Industry</option>
                    <option value={1}>Software</option>
                    <option value={2}>Finance</option>
                    <option value={3}>Technology</option>
                    <option value={4}>Management</option>
                    <option value={5}>Human Resources</option>
                    <option value={6}>Marketing</option>
                  </select>
                  <select
                    className="form-input  m-2 col-lg-4 col-md-6 col-sm-12 col-auto box"
                    size={1}
                    aria-label="size 1 select example"
                    onChange={(e) =>
                      setSearchParams((prev) => ({
                        ...prev,
                        location: parseInt(e.target.value),
                      }))
                    }
                  >
                    <option value={0}>Location</option>
                    <option value={1}>Bangalore</option>
                    <option value={2}>Punjab</option>
                    <option value={3}>Hyderabad</option>
                    <option value={4}>Chennai</option>
                    <option value={5}>Kolkata</option>
                    <option value={6}>Gurgaon</option>
                    <option value={7}>Noida</option>
                  </select>

                  <button
                    type="submit"
                    className="btn-primary m-2 btn-default col-auto font-sm button-box"
                  >
                    Search
                  </button>
                </form>
              </div>
              <img
                className="box-banner-image2"
                src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/left-job-head.15bb41c5.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="slidebar">
              <div className="slidebar-filter">
                <div className="filter-block head-border mb-3">
                  <h5>
                    Advance Filter
                    <a className="link-reset" href="/findJob">
                      Reset
                    </a>
                  </h5>
                </div>
                <div className="filter-block mb-30">
                  {/* <div className="form-group">
                    <select
                      className="form-control form-icons"
                      onChange={(e) => setLocationFilter(e.target.value)}
                      value={locationFilter}
                    >
                      <option value="">Select Location</option>
                      <option value="New York, US">New York, US</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Cityville, USA">Cityville, USA</option>
                      <option value="San Francisco, US">
                        San Francisco, US
                      </option>
                    </select>
                    <img
                      className="location-icon"
                      src="https://img.icons8.com/?size=512&id=3723&format=png"
                      alt=""
                    />
                  </div> */}
                </div>
                <div className="filter-block mb-20">
                  <h5 className="mt-5">Industry</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            defaultChecked
                            checked={industryFilter === ""}
                            onChange={(e) =>
                              setIndustryFilter(e.target.checked ? "" : "")
                            }
                          />
                          <span className="text-small">All</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={industryFilter === "Software"}
                            onChange={(e) =>
                              setIndustryFilter(
                                e.target.checked ? "Software" : ""
                              )
                            }
                          />
                          <span className="text-small">Software</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={industryFilter === "Management"}
                            onChange={(e) =>
                              setIndustryFilter(
                                e.target.checked ? "Management" : ""
                              )
                            }
                          />
                          <span className="text-small">Management</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={industryFilter === "Finance"}
                            onChange={(e) =>
                              setIndustryFilter(
                                e.target.checked ? "Finance" : ""
                              )
                            }
                          />
                          <span className="text-small">Finance</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={industryFilter === "Human Resources"}
                            onChange={(e) =>
                              setIndustryFilter(
                                e.target.checked ? "Human Resources" : ""
                              )
                            }
                          />
                          <span className="text-small">Human Resource</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={industryFilter === "Marketing"}
                            onChange={(e) =>
                              setIndustryFilter(
                                e.target.checked ? "Marketing" : ""
                              )
                            }
                          />
                          <span className="text-small">Marketing</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={industryFilter === "Technology"}
                            onChange={(e) =>
                              setIndustryFilter(
                                e.target.checked ? "Technology" : ""
                              )
                            }
                          />
                          <span className="text-small">Technology</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-20">
                  <h5 className="mt-5">Salary Range</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={!salaryFilter}
                            onChange={() => setSalaryFilter(null)}
                          />
                          <span className="text-small">All</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={
                              salaryFilter &&
                              salaryFilter.min === 0 &&
                              salaryFilter.max === 5
                            }
                            onChange={() => setSalaryFilter({ min: 0, max: 5 })}
                          />
                          <span className="text-small">Upto 5LPA</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={
                              salaryFilter &&
                              salaryFilter.min === 5 &&
                              salaryFilter.max === 10
                            }
                            onChange={() =>
                              setSalaryFilter({ min: 5, max: 10 })
                            }
                          />
                          <span className="text-small">5LPA - 10LPA</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={
                              salaryFilter &&
                              salaryFilter.min === 10 &&
                              salaryFilter.max === 30
                            }
                            onChange={() =>
                              setSalaryFilter({ min: 10, max: 30 })
                            }
                          />
                          <span className="text-small">10LPA - 30LPA</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={
                              salaryFilter &&
                              salaryFilter.min === 30 &&
                              salaryFilter.max === 50
                            }
                            onChange={() =>
                              setSalaryFilter({ min: 30, max: 50 })
                            }
                          />
                          <span className="text-small">30LPA - 50 LPA</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-20">
                  <h5 className="mt-5">Experience Level</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            defaultChecked
                            checked={experienceFilter === ""}
                            onChange={(e) =>
                              setExperienceFilter(e.target.checked ? "" : "")
                            }
                          />
                          <span className="text-small">All</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={experienceFilter === "Internship"}
                            onChange={(e) =>
                              setExperienceFilter(
                                e.target.checked ? "Internship" : ""
                              )
                            }
                          />
                          <span className="text-small">Internship</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={experienceFilter === "Entry Level"}
                            onChange={(e) =>
                              setExperienceFilter(
                                e.target.checked ? "Entry Level" : ""
                              )
                            }
                          />
                          <span className="text-small">Entry Level</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={experienceFilter === "Associate"}
                            onChange={(e) =>
                              setExperienceFilter(
                                e.target.checked ? "Associate" : ""
                              )
                            }
                          />
                          <span className="text-small">Associate</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={experienceFilter === "Mid Level"}
                            onChange={(e) =>
                              setExperienceFilter(
                                e.target.checked ? "Mid Level" : ""
                              )
                            }
                          />
                          <span className="text-small">Mid Level</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={experienceFilter === "Director"}
                            onChange={(e) =>
                              setExperienceFilter(
                                e.target.checked ? "Director" : ""
                              )
                            }
                          />
                          <span className="text-small">Director</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={experienceFilter === "Executive"}
                            onChange={(e) =>
                              setExperienceFilter(
                                e.target.checked ? "Executive" : ""
                              )
                            }
                          />
                          <span className="text-small">Executive</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-20">
                  <h5 className="mt-5">Job Type</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            defaultChecked
                            checked={typeFilter === ""}
                            onChange={(e) =>
                              setTypeFilter(e.target.checked ? "" : "")
                            }
                          />
                          <span className="text-small">All</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={typeFilter === "Full Time"}
                            onChange={(e) =>
                              setTypeFilter(e.target.checked ? "Full Time" : "")
                            }
                          />
                          <span className="text-small">Full Time</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={typeFilter === "Part Time"}
                            onChange={(e) =>
                              setTypeFilter(e.target.checked ? "Part Time" : "")
                            }
                          />
                          <span className="text-small">Part Time</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={typeFilter === "Remote Jobs"}
                            onChange={(e) =>
                              setTypeFilter(
                                e.target.checked ? "Remote Jobs" : ""
                              )
                            }
                          />
                          <span className="text-small">Remote Jobs</span>
                        </label>
                      </li>
                      <li>
                        <label className="filter-category-industry">
                          <input
                            type="checkbox"
                            checked={typeFilter === "Freelancer"}
                            onChange={(e) =>
                              setTypeFilter(
                                e.target.checked ? "Freelancer" : ""
                              )
                            }
                          />
                          <span className="text-small">Freelancer</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="row">
              {jobData.map((job) => (
                <div className="col-md-4" key={job.id}>
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
                          <span className="location-content">
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <div className="card-content ">
                        <h6 style={{ fontWeight: 600, fontSize: 16 }}>
                          {job.title}
                        </h6>
                        <span className="p-card mx-2">{job.type}</span>
                        <span className="p-card mx-4">{job.experience}</span>
                        <p className=" py-3 p-card ">
                          <p>
                            {job.description && job.description.length > 50
                              ? job.description.substring(0, 50) + "..."
                              : job.description + "..."}
                          </p>
                        </p>
                        <div className="mt-30">
                          {job.skills.map((skill, index) => (
                            <a
                              key={index}
                              href="/"
                              className="btn btn-grey-small mr-5"
                            >
                              {skill}
                            </a>
                          ))}
                        </div>
                        <div className="mt-5 card-bottom">
                          <div className="row">
                            <div className="col-6 col-lg-6">
                              <span className="card-text-price">
                                {job.salary}
                              </span>
                              <span className="card-text-muted mx-1">
                                L.P.A
                              </span>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FindJob;
