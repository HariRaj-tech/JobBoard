import React, { useState, useEffect } from 'react'
import Jobcard from '../../components/Jobcard'
import image from '../../Jobs-image.png'
import companies from '../../assets/tempdata'


export default function Home(props) {

    const [field, setField] = useState(null);
    const [filteredCompanies, setFilteredCompanies] = useState([]);

    const filterCompanies = (field) => {
        if (!field) return companies;
        return companies.filter((company) => company.field === field);
    };

    useEffect(() => {
        const filteredCompanies = filterCompanies(field, companies);
        setFilteredCompanies(filteredCompanies);
    }, [field]);

    const handleFieldChange = (e) => {
        const fieldValue = e.target.value;
        setField(fieldValue);
    }



    return (
        <div className='container bg-[#D7E4C0]'>

            <div className="container mx-auto px-4 pt-8 mb-9">
                <div className="text-5xl font-bold text-center text-grey-500">The Easiest Way to Get Your New Job</div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 mt-8">

                    <div className="grid grid-cols-1  w-96 mt-11">
                        <div className="bg-gray-100 p-4 rounded shadow-md">
                            <h3 className="text-lg font-bold mb-2">Job Seekers</h3>
                            <p>Each month, more than 3 million job seekers turn to Job Board in their search for work, making over 140,000 applications every single day.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded shadow-md mt-8">
                            <h3 className="text-lg font-bold mb-2">Employers</h3>
                            <p>With over number of active job listings, Job Board connects you with a vast pool of talented candidates.</p>
                        </div>
                    </div>
                    <div className="container">
                        <img src={image} alt="" className="object-fit w-9/12 rounded-xl shadow-2xl shadow-blue-700 hover:rotate-6" />
                    </div>

                </div>

            </div>


            <p className='container mx-auto text-4xl font-bold text-center my-1 '>Jobs of the day</p>
            <p className='text-xl my-1 text-center'>Search and connect with the right candidates faster</p>

            <form action="" className='container mx-auto max-w-lg my-5'>
                <div className="container flex items-center ">
                    <input
                        type="radio"
                        id="software"
                        name="field"
                        value="software"
                        checked={field === 'software'}
                        onChange={handleFieldChange}
                        className="mr-2"
                    />
                    <label htmlFor="user" className="text-sm font-medium mr-4">Software</label>
                    <input
                        type="radio"
                        id="sales"
                        name="field"
                        value="sales"
                        checked={field === 'sales'}
                        onChange={handleFieldChange}
                        className="ml-4 mr-2"
                    />
                    <label htmlFor="company" className="text-sm font-medium mr-4">Sales</label>
                    <input
                        type="radio"
                        id="humanresource"
                        name="field"
                        value="humanresource"
                        checked={field === 'humanresource'}
                        onChange={handleFieldChange}
                        className="ml-4 mr-2"
                    />
                    <label htmlFor="company" className="text-sm font-medium mr-4">Human Resource</label>
                    <input
                        type="radio"
                        id="finance"
                        name="field"
                        value="finance"
                        checked={field === 'finance'}
                        onChange={handleFieldChange}
                        className="ml-4 mr-2"
                    />
                    <label htmlFor="company" className="text-sm font-medium mr-4">Finance</label>
                    <input
                        type="radio"
                        id="management"
                        name="field"
                        value="management"
                        checked={field === 'management'}
                        onChange={handleFieldChange}
                        className="ml-4 mr-2"
                    />
                    <label htmlFor="company" className="text-sm font-medium mr-4">Management</label>
                </div>

            </form>


            <div className="container mx-auto my-7 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

                {filteredCompanies.map((company) => (
                    <div key={company.name} className="">
                        <Jobcard
                            name={company.name}
                            location={company.location}
                            designation={company.designation}
                            time={company.time}
                            about={company.about}
                            skills={company.skills}
                            salary={company.salary}
                        />
                    </div>
                ))}

            </div>


            {/* footer */}
            <div className="container mx-auto text-center border-t-2">

                <h2 className='font-bold text-xl mt-5 '>Job Board</h2>
                <p>JobBoard is the best resource to discover and connect with employers and employees worldwide.</p>
                <div className="container mx-auto my-5 flex justify-evenly border-b-2 pb-3 ">

                    <div>
                        <h1 className='font-bold'>Resources</h1>
                        <ul className='text-md'>
                            <li><a href='#'>About us</a></li>
                            <li><a href='#'>Our Team</a></li>
                            <li><a href='#'>Products</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>


                    <div>
                        <h1 className='font-bold'>Community</h1>
                        <ul className='text-md'>
                            <li><a href='#'>Feature</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Credit</a></li>
                            <li><a href='#'>FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-bold'>Quick links</h1>
                        <ul className='text-md'>
                            <li><a href='#'>iOS</a></li>
                            <li><a href='#'>Android</a></li>
                            <li><a href='#'>Microsoft</a></li>
                            <li><a href='#'>Desktop</a></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-bold'>More</h1>
                        <ul className='text-md'>
                            <li><a href='#'>Privacy</a></li>
                            <li><a href='#'>Help</a></li>
                            <li><a href='#'>Terms</a></li>
                            <li><a href='#'>FAQ</a></li>
                        </ul>
                    </div>

                </div>

                <p className='pb-5'>Copyright © 2022. JobBox all right reserved</p>

            </div>

        </div>
    )
}