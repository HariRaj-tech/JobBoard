import React from 'react';
import brand from '../../assets/brand.png'

export default function Applicantspage() {
   
    const job = {
        location: "banglore",
        title: "Full Stack dev",
        skills: ["nodejs", "reactjs", "python"],
        type: "Fulltime",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est iure praesentium consequuntur maiores temporibus incidunt excepturi corrupti voluptatibus, ducimus amet, fuga sunt. Alias, similique dolores obcaecati fugit sunt numquam.",
        salary: "5"
    }

    const applicants = [
        { name: "vikas", email: "sai@gmail.com", resume: "resume.pdf" },
        { name: "lovish", email: "lovish@gmail.com", resume: "resume.pdf" },
        { name: "chethan", email: "chethan@gmail.com", resume: "resume.pdf" },
        { name: "suresh", email: "suresh@gmail.com", resume: "resume.pdf" },
        { name: "hari", email: "hari@gmail.com", resume: "resume.pdf" },
        { name: "santosh", email: "santosh@gmail.com", resume: "resume.pdf" },
        { name: "shivkesh", email: "shivkesh@gmail.com", resume: "resume.pdf" },
    ]

    return (
        <div className='container'>
            <div className='container mx-auto'>
                <div className='mt-5 border-2 border-gray-200 bg-[#f8faff] p-4 '>
                    <div className="flex flex-col">
                        <div className='flex justify-between flex-wrap'>
                            <div className='flex'>
                                <div className=''>
                                    <img src={brand} alt="" />
                                </div>
                                <div className='flex flex-col ml-5'>
                                    <h5 className='font-bold text-lg'>Google</h5>
                                    <p><i className="fa-solid fa-location-dot mr-2"></i>{job.location}</p>
                                </div>
                            </div>
                            <div className='flex flex-row-reverse'>
                                <img src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/flash.aea6c8a8.svg" alt="" />
                                {job.skills.map((skill) => {
                                    return <p className='mt-3 inline-block h-fit bg-gray-200 p-1 rounded text-xs text-gray-500 mr-2'>{skill}</p>
                                })}
                            </div>
                        </div>
                        <div className='mt-3 ml-3'>
                            <h3 className='font-bold text-2xl '>{job.title}</h3>
                            <p className='mt-2 font-sm text-gray-600'><i className="fa-solid fa-briefcase mr-2" />{job.type}</p>
                            <p className='mt-2 font-md'>{job.description}</p>
                            <p className="mt-3 text-xl font-bold text-blue-600"><i className="fa-solid fa-indian-rupee-sign mr-2" />{job.salary} <span className='text-[13px]'>L.P.A</span></p>
                        </div>
                    </div>
                </div>

                <div className='font-bold text-3xl mt-3'>Job Applicants</div>
                <div className='flex flex-col'>

                    <div className='flex text-lg space-x-10'>

                        <p className=''>vikas</p>
                        <p>sai@gmail.com</p>
                        <button className='border-b-2 bg-blue-600 rounded-md p-[2px]'><i class="fa-solid fa-download"></i>resume</button>
                    </div>

                    {applicants.map((person) => {
                        return <div className='flex text-lg space-x-10'>

                            <p className=''>{person.name}</p>
                            <p>{person.email}</p>
                            <button className='border-b-2 bg-blue-600 rounded-md p-[2px]'><i class="fa-solid fa-download"></i>{person.resume}</button>
                        </div>
                    })}
                </div>
            </div>
        </div>

    )
}
