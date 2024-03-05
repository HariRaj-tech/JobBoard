import headerimg from '../../assets/thumb.png';
import briefcaseimg from '../../assets/briefcase.svg';
import industryimg from '../../assets/industry.svg';
import joblevelimg from '../../assets/job-level.svg';
import salaryimg from '../../assets/salary.svg';
import experienceimg from '../../assets/experience.svg';
import jobtypeimg from '../../assets/job-type.svg';
import deadlineimg from '../../assets/deadline.svg';
import updateimg from '../../assets/updated.svg';
import locationimg from '../../assets/location.svg';
import companylogo from '../../assets/avatar.png';
import fb from '../../assets/fb.svg';
import x from '../../assets/x.svg';
import reddit from '../../assets/rd.svg';
import wa from '../../assets/wa.svg';
import './Applyjob.css';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { alertContext } from '../../components/context/Context';

function Applyjob() {
    const navigate = useNavigate();
    const { showAlert } = useContext(alertContext);

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
        jobDescription: "A portfolio demonstrating well thought through and polished end to end customer journeys. 5+ years of industry experience in interactive design and / or visual design. Excellent interpersonal skills. Aware of trends inmobile, communications, and collaboration. Ability to create highly polished design prototypes, mockups, and other communication artifacts. The ability to scope and estimate efforts accurately and prioritize tasks and goals independently. History of impacting shipping products with your work. A Bachelor's Degree in Design (or related field) or equivalent professional experience. Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch."
    }

    const handleApplyClick = async () => {
        setLoading(true); // Show loading UI
        setTimeout(() => {
            setLoading(false); // Hide loading UI after a delay
            setApplied(true); // Mark the job as applied
            showAlert("Job applied successfully");
            navigate("/jobinfo");
        }, 2000); // Simulating a 2-second loading time
    }

    return (
        <div className="applyjob">
            <div className="header">
                <div className="img-container">
                    <img src={headerimg} alt="img not found" />
                </div>
                <div className="title-container">
                    <div className="title">
                        <h3>{jobData.title}</h3>
                        <div>
                            <span style={{ 'background': `url(${briefcaseimg}) no-repeat 0 2px` }} className="briefcase">{jobData.type}</span>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button 
                            className={`apply-btn ${applied ? 'applied' : ''} ${loading ? 'loading' : ''}`} 
                            onClick={handleApplyClick}
                            disabled={loading || applied} // Disable button during loading or after job is applied
                        >
                            {loading ? 'Applying...' : applied ? 'Applied' : 'Apply now'}
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
                                        <span>Industry</span>
                                        <strong>
                                            {jobData.industry}
                                        </strong>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <img src={joblevelimg} alt="image not found" />
                                    </div>
                                    <div className="content">
                                        <span>Job level</span>
                                        <strong>
                                            {jobData.level}
                                        </strong>
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
                                        <strong>
                                            {jobData.salary}
                                        </strong>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <img src={experienceimg} alt="image not found" />
                                    </div>
                                    <div className="content">
                                        <span>Experience</span>
                                        <strong>
                                            {jobData.experience}
                                        </strong>
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
                                        <strong>
                                            {jobData.type}
                                        </strong>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <img src={deadlineimg} alt="image not found" />
                                    </div>
                                    <div className="content">
                                        <span>Deadline</span>
                                        <strong>
                                            {jobData.deadline}
                                        </strong>
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
                                            {jobData.skills.map((skill, index) => (
                                                <span key={index}>{skill}{index !== jobData.skills.length - 1 ? ', ' : ''}</span>
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
                                        <strong>
                                            {jobData.location}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-company">
                            <h3 className='text-xl'>Job description</h3>
                            <p>{jobData.jobDescription}</p>
                        </div>
                        <div className="col1-footer">
                            <span>AliThemes</span>
                        </div>
                        <div className="media-container">
                            <div className="media">
                                <h5 style={{ "fontSize": "16px", "fontWeight": "600" }}>Share this</h5>
                                <span className="media-icon"><img src={fb} alt="facebook" /></span>
                                <span className="media-icon"><img src={x} alt="facebook" /></span>
                                <span className="media-icon"><img src={reddit} alt="facebook" /></span>
                                <span className="media-icon"><img src={wa} alt="facebook" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="address-card">
                            <div className="address-title">
                                <div>
                                    <img src={companylogo} alt="image not found" />
                                </div>
                                <div >
                                    <span>{jobData.company}</span>
                                    <span className="address-location"><img src={locationimg} alt="image not found" /> {jobData.location}</span>
                                </div>
                            </div>
                            <div className="address-container">
                                <ul>
                                    <li>{jobData.address}</li>
                                    <li>Phone: {jobData.phone}</li>
                                    <li>Email: {jobData.email}</li>
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
