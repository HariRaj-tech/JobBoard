import headerimg from '../../assets/thumb.png';
import briefcaseimg from '../../assets/briefcase.svg';
import timeimg from '../../assets/time.svg';
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
import brandimg from '../../assets/brand.png';
import './Applyjob.css';
function Applyjob() {
    const data = [
        [brandimg,"UI / UX Designer fulltime"],
        [brandimg,"UI / UX Designer fulltime"],
        [brandimg,"UI / UX Designer fulltime"],
        [brandimg,"UI / UX Designer fulltime"],
        [brandimg,"UI / UX Designer fulltime"],
        [brandimg,"UI / UX Designer fulltime"]
    ]
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
                            <h4>Welcome to AliStudio Team</h4>
                            <p>The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.</p>
                            <p>The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>
                            <h4>Essential Knowledge, Skills, and Experience</h4>
                            <ul>
                                <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                <li>5+ years of industry experience in interactive design and / or visual design</li>
                                <li>Excellent interpersonal skills</li>
                                <li>Aware of trends inmobile, communications, and collaboration</li>
                                <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                                <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                                <li>History of impacting shipping products with your work</li>
                                <li>A Bachelor's Degree in Design (or related field) or equivalent professional experience</li>
                                <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                            </ul>
                            <h4>Preferred Experience</h4>
                            <ul>
                                <li>Designing user experiences for enterprise software / services</li>
                                <li>Creating and applying established design principles and interaction patterns</li>
                                <li>Aligning or influencing design thinking with teams working in other geographies</li>
                            </ul>
                            <h4>Product Designer</h4>
                            <p><strong>Product knowledge: </strong>Deeply understand the technology and features of the product area to which you are assigned.</p>
                            <p><strong>Research: </strong>Provide human and business impact and insights for products.</p>
                            <p><strong>Deliverables: </strong>Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.</p>
                            <p><strong>Communication: </strong>Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.</p>
                        </div>
                        <div className="col1-footer">
                            <span>AliThemes</span>
                        </div>
                        <div className="media-container">
                            <div>
                                <div>
                                    <button className="apply-btn" style={{"margin":"10px 10px"}}>Apply now</button>
                                    <button className="apply-btn" style={{"background":"#ffff","border": "1px solid #b4c0e0","color":"#4f5e64","font-size":"16px","line-height":"26px","font-weight": "700"}}>Save job</button>
                                </div>
                                <div className="media">
                                    <h5 style={{"font-size":"16px","font-weight": "600"}}>Share this</h5>
                                    <span className="media-icon"><img src={fb} alt="facebook"/></span>
                                    <span className="media-icon"><img src={x} alt="facebook"/></span>
                                    <span className="media-icon"><img src={reddit} alt="facebook"/></span>
                                    <span className="media-icon"><img src={wa} alt="facebook"/></span>
                                </div>
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
                                    <span>AliThemes</span>
                                    <span className="address-location"><img src={locationimg} alt="image not found" /> New York,Us.</span>
                                </div>
                            </div>
                            <div className="address-container">
                                <div>
                                    <iframe
                                        className="map"
                                        title="Embedded Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.413292258672!2d77.9624324!3d10.955567299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2847d35ff6ab%3A0x564660af0ef61a8!2sVSB%20Engineering%20College!5e0!3m2!1sen!2sin!4v1708086070363!5m2!1sen!2sin"
                                        width="200"
                                        height="200"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <ul>
                                    <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                                    <li>Phone: (123) 456-7890</li>
                                    <li>Email: contact@Evara.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="jobs-card">
                            <h5 style={{"font-size":"18px"}}>Similar jobs</h5>
                            <Card data={data}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Card({data}) {
    const style={
        "display": "inline-block",
        "width":" 100%",
        "padding-bottom": "20px"
    };
    return(
        <ul style={{"listStyle":"none"}}>
            {data.map((value,i)=><li key={i} style={style}> 
                <div className="jobcard-container" >
                    <div className="jobimage-1"><img style={{"max-width":"100%"}}src={value[0]} alt="image"/></div>
                    <div className="jobcard-2">
                        <h5>{value[1]}</h5>
                        <div>
                            <span style={{ 'background': `url(${briefcaseimg}) no-repeat 0 10px` }} className="briefcase">Fulltime</span>
                            <span style={{ 'background': `url(${timeimg}) no-repeat 0 10px` }} className="time">3 mins ago</span>
                        </div>
                        <div className="jobinfo">
                            <div style={{"display":"flex"}}>
                                <div><h6>$200/Hour</h6></div>
                                <div><span style={{ 'background': `url(${briefcaseimg}) no-repeat 0 10px` }} className="briefcase">Fulltime</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>)}
        </ul>
    );

}
export default Applyjob;