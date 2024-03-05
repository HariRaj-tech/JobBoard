import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import companyimg from '../../assets/companyimg.png';
import axios from "axios";
import brand from '../../assets/brand.png'

export default function Temppage() {

    const [companyData, setCompanyData] = useState({
        // name: "AliThemes",
        // ownerName: "Sai Vikas",
        // about: "The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography.This candidate will have experiences in working with numerous different design platforms such as digital and print forms.",
        // memberSince: 'Jul 2012',
        // address: '205 North Michigan Avenue, Suite 810 Chicago. 60601, USA',
        // phone: '(123) 456-7890',
        // email: 'contact@Evara.com',
    });

    const jobCard = {
        title: "Full Stack developer",
        location: "London, Uk",
        jobType: "Fulltime",
        skills: ["nodejs", "Reactjs", "python"],
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae similique incidunt quaerat ea reiciendis assumenda fugit harum adipisci eaque fuga porro veniam ullam nobis molestiae possimus hic, perferendis velit architecto!",
        salary: "500000"
    };


    useEffect(() => {
        if (localStorage.getItem('id')) {
            const id = localStorage.getItem('id');
            axios.get(`http://localhost:8080/api/company/${id}`)
                .then(response => {
                    const data = response.data;
                    setCompanyData(data);
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error fetching user details:', error);
                })
        }
    }, [])

    const date = new Date(companyData.createdAt);
    const memberSince = date.toLocaleString('default', { month: 'long', year: 'numeric' });

    return (
        <div className='container'>
            <div className='container mx-auto w-full'>
                <div className='container mt-10'>
                    <img className='rounded-2xl' src={companyimg} alt="" />
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                    <div>
                        <h1 className="text-3xl font-bold">{companyData.name}</h1>
                    </div>
                    <div className="flex items-center">
                        <Link className="text-white text-lg bg-blue-600 p-2 rounded-lg hover:bg-blue-800 mr-10">View Older Jobs</Link>
                        <Link to="/postnewjob" className="text-white text-lg bg-blue-600 p-2 rounded-lg hover:bg-blue-800 ">Post New Job</Link>
                    </div>
                </div>
            </div>

            <div className='flex mt-4 mb-4 sm:flex-row flex-col-reverse'>
                <div className='flex flex-col md:w-3/4'>
                    <div className=''>
                        <h2 className="text-lg font-bold mb-2">About Us</h2>
                        <p className='pr-5'>{companyData.about}</p>
                    </div>
                    <div className='mt-4 sm:mr-11'>
                        <h2 className="text-lg font-bold">Recently posted Jobs</h2>
                        {/* card1 */}
                        {/* <Link to="/postnewjob"> */}
                        <div className='mt-3 border-2 border-gray-200 p-4'>
                            <div className="flex flex-col">
                                <div className='flex justify-between flex-wrap'>
                                    <div className='flex'>
                                        <div className=''>
                                            <img src={brand} alt="" />
                                        </div>
                                        <div className='flex flex-col ml-5'>
                                            <h5 className='font-bold text-lg'>{companyData.name}</h5>
                                            <p><i className="fa-solid fa-location-dot mr-2"></i>{jobCard.location}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row-reverse'>
                                        <img src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/flash.aea6c8a8.svg" alt="" />
                                        {jobCard.skills.map((skill) => {
                                            return <p className='mt-3 inline-block h-fit bg-gray-200 p-1 rounded text-xs text-gray-500 mr-2'>{skill}</p>
                                        })}
                                    </div>
                                </div>
                                <div className='mt-3 ml-3'>
                                    <h3 className='font-bold text-2xl '>{jobCard.title}</h3>
                                    <p className='mt-2 font-sm text-gray-600'><i className="fa-solid fa-briefcase mr-2" />{jobCard.jobType}</p>
                                    <p className='mt-2 font-md'>{jobCard.desc}</p>
                                    <p className="mt-3 text-xl font-bold text-blue-600"><i className="fa-solid fa-indian-rupee-sign mr-2" />{jobCard.salary}</p>
                                </div>
                            </div>
                        </div>
                        {/* </Link> */}


                        {/* card2 */}
                        <div className='mt-3 border-2 border-gray-200 p-4'>
                            <div className="flex flex-col">
                                <div className='flex justify-between flex-wrap'>
                                    <div className='flex'>
                                        <div className=''>
                                            <img src={brand} alt="" />
                                        </div>
                                        <div className='flex flex-col ml-5'>
                                            <h5 className='font-bold text-lg'>{companyData.name}</h5>
                                            <p><i className="fa-solid fa-location-dot mr-2"></i>{jobCard.location}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row-reverse'>
                                        <img src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/flash.aea6c8a8.svg" alt="" />
                                        {jobCard.skills.map((skill) => {
                                            return <p className='mt-3 inline-block h-fit bg-gray-200 p-1 rounded text-xs text-gray-500 mr-2'>{skill}</p>
                                        })}
                                    </div>
                                </div>
                                <div className='mt-3 ml-3'>
                                    <h3 className='font-bold text-2xl '>{jobCard.title}</h3>
                                    <p className='mt-2 font-sm text-gray-600'><i className="fa-solid fa-briefcase mr-2" />{jobCard.jobType}</p>
                                    <p className='mt-2 font-md'>{jobCard.desc}</p>
                                    <p className="mt-3 text-xl font-bold text-blue-600"><i className="fa-solid fa-indian-rupee-sign mr-2" />{jobCard.salary}</p>
                                </div>
                            </div>
                        </div>

                        {/* card3 */}
                        <div className='mt-3 border-2 border-gray-200 p-4'>
                            <div className="flex flex-col">
                                <div className='flex justify-between flex-wrap'>
                                    <div className='flex'>
                                        <div className=''>
                                            <img src={brand} alt="" />
                                        </div>
                                        <div className='flex flex-col ml-5'>
                                            <h5 className='font-bold text-lg'>{companyData.name}</h5>
                                            <p><i className="fa-solid fa-location-dot mr-2"></i>{jobCard.location}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row-reverse'>
                                        <img src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/flash.aea6c8a8.svg" alt="" />
                                        {jobCard.skills.map((skill) => {
                                            return <p className='mt-3 inline-block h-fit bg-gray-200 p-1 rounded text-xs text-gray-500 mr-2'>{skill}</p>
                                        })}
                                    </div>
                                </div>
                                <div className='mt-3 ml-3'>
                                    <h3 className='font-bold text-2xl '>{jobCard.title}</h3>
                                    <p className='mt-2 font-sm text-gray-600'><i className="fa-solid fa-briefcase mr-2" />{jobCard.jobType}</p>
                                    <p className='mt-2 font-md'>{jobCard.desc}</p>
                                    <p className="mt-3 text-xl font-bold text-blue-600"><i className="fa-solid fa-indian-rupee-sign mr-2" />{jobCard.salary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col items-start md:w-1/4 border border-1 pl-5 py-6 h-fit'>
                    <div className='text-xl font-bold '>Company Information</div>
                    <div className='row'>
                        <div className='font-bold'><i className="fa-solid fa-tag mr-2"></i>Name</div>
                        <div className='ml-6'>{companyData.name}</div>
                    </div>
                    <div className='row'>
                        <div className='font-bold'><i className="fa-solid fa-user-tag mr-2"></i>Owner Name</div>
                        <div className='ml-7'>{companyData.owner_name}</div>
                    </div>
                    <div className='row'>
                        <div className='font-bold'><i className="fa-solid fa-clock mr-2"></i>Member Since</div>
                        <div className='ml-6'>{memberSince}</div>
                    </div>
                    <div className='row'>
                        <div className='font-bold'><i className="fa-solid fa-map-location-dot mr-2"></i>Address</div>
                        <div className='ml-6'>{companyData.address}</div>
                    </div>
                    <div className='row'>
                        <div className='font-bold'><i className="fa-solid fa-phone mr-2"></i>Phone</div>
                        <div className='ml-6'>{companyData.contact_number}</div>
                    </div>
                    <div className='row'>
                        <div className='font-bold'><i className="fa-solid fa-envelope mr-2"></i>Email</div>
                        <div className='ml-6'>{companyData.contact_email}</div>
                    </div>
                </div>
            </div>


            {/* footer */}
            <div className='flex justify-center items-center text-2xl mb-3'>
                <Link ><i className="fa-brands fa-facebook mr-3"></i></Link>
                <Link ><i className="fa-brands fa-x-twitter mr-3"></i></Link>
                <Link><i className="fa-brands fa-linkedin"></i></Link>
            </div>

            <div className="container mx-auto text-center border-t-2">

                <h2 className='font-bold text-xl mt-3 '>Job Board</h2>
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
