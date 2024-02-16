import headerimg from '../../asset/thumb.png';
import briefcaseimg from '../../asset/briefcase.svg';
import timeimg from '../../asset/time.svg';
import industryimg from '../../asset/industry.svg';
import joblevelimg from '../../asset/job-level.svg';
import salaryimg from '../../asset/salary.svg';
import experienceimg from '../../asset/experience.svg';
import jobtypeimg from '../../asset/job-type.svg';
import deadlineimg from '../../asset/deadline.svg';
import updateimg from '../../asset/updated.svg';
import locationimg from '../../asset/location.svg';
import companylogo from '../../asset/avatar.png';
import './Applyjob.css';
function Applyjob() {

    return (
        <div className="applyjob">
            <div className="header">
                <div className="img-container">
                    <img src={headerimg} alt="img not found" />
                </div>
                <div className="title-container">
                    <div className="title">
                        <h3>Senior Full Stack Engineer, Creator Success Full Time</h3>
                        <div>
                            <span style={{ 'background': `url(${briefcaseimg}) no-repeat 0 2px` }} className="briefcase">Fulltime</span>
                            <span style={{ 'background': `url(${timeimg}) no-repeat 0 2px` }} className="time">3 mins ago</span>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="apply-btn">Apply now</button>
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
                                            Mechanical / Auto / Automotive, Civil / Construction
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
                                            Experienced (Non - Manager)
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
                                            $800 - $1000
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
                                            1 - 2 years
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
                                            Permanent
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
                                            1/2/2024
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
                                        <span>Updated</span>
                                        <strong>
                                            10/2/2024
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
                                            Dallas, Texas Remote Friendly
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-company">

                        </div>
                        <div className="media-container">

                        </div>
                    </div>
                    <div className="col2">
                        <div className="address-card">
                            <div className="address-title">
                                <div>
                                    <img src={companylogo} alt="image not found" />
                                </div>
                                <div >
                                    <span>AliThemes</span>
                                    <span className="address-location"><img src={locationimg} alt="image not found" /> New York,Us.</span>
                                </div>
                            </div>
                            <div className="address-container">
                                <iframe
                                    title="Embedded Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.413292258672!2d77.9624324!3d10.955567299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2847d35ff6ab%3A0x564660af0ef61a8!2sVSB%20Engineering%20College!5e0!3m2!1sen!2sin!4v1708086070363!5m2!1sen!2sin"
                                    width="200"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <ul>
                                   <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                                   <li>Phone: (123) 456-7890</li>
                                   <li>Email: contact@Evara.com</li>
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