import React from 'react'
import { Link } from 'react-router-dom';
import companyimg from '../../assets/companyimg.png'

export default function Companydetails() {

    const companyData = {
        name: 'AliThemes',
        // field: 'Finance',
        about: "The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography.This candidate will have experiences in working with numerous different design platforms such as digital and print forms.",
        // location: 'Chicago, US',
        ownerName:"lovish",
        // isRemoteFriendly: true,
        salaryRange: '$35k-$45k',
        memberSince: 'Jul 2012',
        lastJobsPosted: '4 days',
        address: '205 North Michigan Avenue, Suite 810 Chicago. 60601, USA',
        phone: '(123) 456-7890',
        email: 'contact@Evara.com',
    };


    const companySkills = [
        "A portfolio demonstrating well thought through and polished end to end customer journeys",
        "5 + years of industry experience in interactive design and / or visual design",
        "Excellent interpersonal skills",
        "Aware of trends in mobile, communications, and collaboration",
        "Ability to create highly polished design prototypes, mockups, and other communication artifacts",
        "The ability to scope and estimate efforts accurately and prioritize tasks and goals independently",
        "History of impacting shipping products with your work",
        "A Bachelor s Degree in Design(or related field) or equivalent professional experience in this company field",
        "Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch",
    ]

    return (
        <div className="container mx-auto px-4 h-screen">

            <div className=' container mt-10'>
                <img className='rounded-2xl' src={companyimg} alt="" />
            </div>
            <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <h1 className="text-3xl font-bold">{companyData.name}</h1>
                <div className="flex items-center">
                    <Link className="text-white text-lg bg-blue-600 p-2 rounded-lg hover:bg-blue-800 mr-10">View Older Jobs</Link>
                    <Link to="/postnewjob" className="text-white text-lg bg-blue-600 p-2 rounded-lg hover:bg-blue-800 ">Post New Job</Link>
                </div>
            </div>




            <div className='flex'>
                <div className="bg-white-100 p-4 rounded  w-2/3">
                    <h2 className="text-lg font-bold mb-2">About Us</h2>
                    <p>{companyData.about}</p>

                    {/* <h2 className="text-lg font-bold mb-2 mt-6">Essential Knowledge, Skills, and Experience</h2>
                    <ul className="list-disc ml-4 list-outside">
                        {companySkills.map((skill) => {
                            return <li>{skill}</li>
                        })}
                    </ul> */}
                </div>

                {/* Company Information */}
                <div className="bg-white-100 p-4 rounded  w-1/3 border border-gray-200 border-collapse">
                    <h2 className="text-lg font-bold mb-2">Company Information</h2>
                    <dl className="grid grid-cols-2 gap-4">
                        <dt className="font-bold"><i className="fa-solid fa-tag mr-2"></i>Name</dt>
                        <dd>{companyData.name}</dd>
                        {/* <dt className="font-bold"><i className="fa-solid fa-briefcase mr-2"></i>Field</dt>
                        <dd>{companyData.field}</dd> */}
                        <dt className="font-bold"><i className="fa-solid fa-location-dot mr-2"></i>Location</dt>
                        <dd>
                            {companyData.location},
                            {companyData.isRemoteFriendly && ' Remote Friendly'}
                        </dd>
                        {/* <dt className="font-bold"><i className="fa-solid fa-dollar-sign mr-2"></i>Salary</dt>
                        <dd>{companyData.salaryRange}</dd> */}
                        <dt className="font-bold"><i className="fa-solid fa-clock mr-2"></i>Member since</dt>
                        <dd>{companyData.memberSince}</dd>
                        {/* <dt className="font-bold"><i class="fa-solid fa-clock-rotate-left mr-2"></i>Last Jobs Posted</dt>
                        <dd>{companyData.lastJobsPosted}</dd> */}
                        <dt className="font-bold"><i class="fa-solid fa-map-location-dot mr-2"></i>Address</dt>
                        <dd>{companyData.address}</dd>
                        <dt className="font-bold"><i className="fa-solid fa-phone mr-2"></i>Phone</dt>
                        <dd>{companyData.phone}</dd>
                        <dt className="font-bold"><i className="fa-solid fa-envelope mr-2"></i>Email</dt>
                        <dd>{companyData.email}</dd>
                    </dl>
                </div>
            </div>


            <div className='flex justify-center items-center text-2xl mb-5'>
                <a href="#"><i className="fa-brands fa-facebook mr-3"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter mr-3"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>

            {/* footer */}
            <div className="container mx-auto text-center border-t-2">

                <h2 className='font-bold text-xl mt-5 '>Job Board</h2>
                <p>JobBoard is the best resource to discover and connect with employers and employees worldwide.</p>
                <div className="container mx-auto my-5 flex justify-evenly border-b-2 pb-3 ">

                    <div>
                        <h1 className='font-bold'>Resources</h1>
                        <ul className='text-md list-none'>
                            <li><a href='#'>About us</a></li>
                            <li><a href='#'>Our Team</a></li>
                            <li><a href='#'>Products</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>


                    <div>
                        <h1 className='font-bold'>Community</h1>
                        <ul className='text-md list-none'>
                            <li><a href='#'>Feature</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Credit</a></li>
                            <li><a href='#'>FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-bold'>Quick links</h1>
                        <ul className='text-md list-none'>
                            <li><a href='#'>iOS</a></li>
                            <li><a href='#'>Android</a></li>
                            <li><a href='#'>Microsoft</a></li>
                            <li><a href='#'>Desktop</a></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-bold'>More</h1>
                        <ul className='text-md list-none'>
                            <li><a href='#'>Privacy</a></li>
                            <li><a href='#'>Help</a></li>
                            <li><a href='#'>Terms</a></li>
                            <li><a href='#'>FAQ</a></li>
                        </ul>
                    </div>



                </div>

                {/* <div className='flex justify-center items-center text-2xl'>
                    <a href="#"><i className="fa-brands fa-facebook mr-3"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter mr-3"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div> */}

                <p className='pb-5'>Copyright © 2022. JobBox all right reserved</p>

            </div>
        </div>
    )
}
