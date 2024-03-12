import "./Profile.css";
import banner from "../../assets/userprofilebanner.png";
import profile from "../../assets/candidate-profile.png";
import locationicon from "../../assets/location.svg";
import downloadicon from "../../assets/downloadicon.svg";
import briefcaseimg from "../../assets/briefcase.svg";
import salary from "../../assets/salary.svg";
import location from "../../assets/location.svg";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { TbMessageLanguage } from "react-icons/tb";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function Userprofile() {
  const [userInfo, setUserInfo] = useState({});
  const [imageData, setImageData] = useState(null);
  const location = useLocation();
  const userId = localStorage.getItem("id");
  const [userRole, setUserRole] = useState(true);

  const user = new URLSearchParams(location.search).get("userId");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (user) {
          setUserRole(false);
          const response = await axios.get(
            `http://localhost:8080/api/users/${user}/`
          );
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

          setUserInfo(response.data);
        } else {
          const response = await axios.get(
            `http://localhost:8080/api/users/${userId}/`
          );
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

          setUserInfo(response.data);
        }
      } catch (error) {
        console.error("Error fetching User:", error);
      }
    };

    if (user) {
      fetch(`http://localhost:8080/api/users/image/${user}`, {
        method: "GET",
        headers: {
          "Content-Type": "image/jpeg",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const uint8Array = new Uint8Array(data.buffer.data);
          const blob = new Blob([uint8Array], { type: "image/jpeg" });
          const imageUrl = URL.createObjectURL(blob);
          setImageData(imageUrl);
        })
        .catch((error) => console.error("Error fetching image:", error));
    } else {
      fetch(`http://localhost:8080/api/users/image/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "image/jpeg",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const uint8Array = new Uint8Array(data.buffer.data);
          const blob = new Blob([uint8Array], { type: "image/jpeg" });
          const imageUrl = URL.createObjectURL(blob);
          setImageData(imageUrl);
        })
        .catch((error) => console.error("Error fetching image:", error));
    }

    fetchUser();
  }, []);

  const handleResumeClick = async () => {
    try {
      if (user) {
        fetch(`http://localhost:8080/api/users/resume/${user}/`)
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
      } else {
        fetch(`http://localhost:8080/api/users/resume/${userId}/`)
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
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="userprofile">
      <div>
        <div className="container">
          <div className="img-container">
            <img
              className="w-full h-full rounded-s-2xl"
              src={banner}
              alt="userprofile banner"
            />
          </div>
          <div className="relative w-[90%] m-auto pt-6">
            <div className="absolute -top-[90px] left-2">
              {imageData && (
                <img
                  className="rounded-2xl"
                  style={{ width: "100px", height: "100px" }}
                  src={imageData}
                  alt="User"
                />
              )}
              {!imageData && (
                <img
                  className="rounded-2xl"
                  src={profile}
                  alt="candidate profile"
                />
              )}
            </div>
            <div className="md:flex items-center justify-between">
              <div className="md:w-[66.6%]">
                <div className="flex gap-3">
                  <h5 className="text-[18px] ml-5">
                    {userInfo.first_name + " " + userInfo.last_name}{" "}
                  </h5>
                  {/* {userInfo.location && (
                    <span
                      style={{
                        background: `url(${locationicon}) no-repeat 0 3px`,
                      }}
                      className="inline-block px-4 "
                    >
                      {userInfo.location}
                    </span>
                  )} */}
                </div>

                {/* <p className="my-2">
                                    UI/UX Designer. Front end Developer
                                </p> */}
              </div>
              <div className="md:w-[33.3%] md:text-right text-left">
                <button
                  onClick={handleResumeClick}
                  style={{
                    background: `url(${downloadicon}) no-repeat 24px 17px,#3c65f5`,
                  }}
                  className="download-btn"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-[#dee2e6] pt-3 pb-3"></div>
        </div>
      </div>
      <div className="mt-10">
        <div className="container">
          <div className="row">
            <div className="col1">
              <div>
                <h4 className="mb-4">About Me</h4>
                <p
                  className="mb-4 text-[16px] leading-8"
                  dangerouslySetInnerHTML={{ __html: userInfo.about }}
                />

                {/* <h4 className="mb-4">Work Experience</h4>
                                <ul className="pl-3 mb-4">
                                    <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                    <li>5+ years of industry experience in interactive design and / or visual design</li>
                                </ul> */}
                <div className="border-t-[1px/] border-[#e0e6f7] py-5 mt-4 "></div>
              </div>
            </div>
            <div className="col2">
              <div className="address-card">
                <div className="address-title">
                  <h4>Overview</h4>
                </div>
                <div className="address-container py-4 border-b-[1px] border-[#e0e6f7]">
                  {/* <div className='flex items-start gap-3 mb-4'>
                                        <img className="w-[20px]" src=briefcaseimg alt="exp" />
                                        <div>
                                            <span className='block text-[16px]'>
                                                Experience
                                            </span>
                                            <span className='block font-bold'>12 years</span>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-3 mb-4'>
                                        <img className="w-[20px]" src=salary alt="exp" />
                                        <div>
                                            <span className='block text-[16px]'>
                                                Expected Salary
                                            </span>
                                            <span className='block font-bold'>$26k - $30k</span>
                                        </div>
                            </div> */}
                  <div className="flex items-start gap-3 mb-4">
                    <TbMessageLanguage style={{ fontSize: "25px" }} />
                    <div>
                      <span className="block text-[16px]">Language</span>
                      <span className="block font-bold">
                        {userInfo.languages?.join(", ")}
                      </span>
                    </div>
                    <br></br>
                  </div>
                  <div className="flex items-start gap-3 mb-4">
                    <i className="fa fa-tasks mr-2" />
                    <div>
                      <span className="block text-[16px]">Skills</span>
                      <span className="block font-bold">
                        {userInfo.skills?.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <ul>
                    {userInfo.location && (
                      <li className="flex items-baseline gap-3">
                        <i
                          className="fa-solid fa-location-dot"
                          aria-hidden="true"
                        ></i>
                        {userInfo.location}
                      </li>
                    )}
                    {userInfo.contact_no && (
                      <li className="flex items-baseline gap-3">
                        <CiPhone /> Phone: {userInfo.contact_no}
                      </li>
                    )}
                    <li className="flex items-baseline gap-3">
                      <MdOutlineEmail /> Email: {userInfo.email}
                    </li>
                  </ul>
                  {userRole == 1 && (
                    <Link to="/editprofile">
                      <button
                        style={{
                          padding: "18px",
                          background: `#3c65f5`,
                        }}
                        className="download-btn mt-3"
                      >
                        <i className="fas fa-user-edit mr-3 "></i>
                        Edit Profile
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
