import React, { useState } from 'react'

export default function Postnewjob() {


    const [jobDetails, setJobDetails] = useState({
        industry: '',
        designation: '',
        experience: '',
        salary: '',
        location: '',
        deadline: '',
        skills: [],
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobDetails({
            ...jobDetails,
            [name]: value,
        });
    };

    const handleSkillsChange = (e) => {
        const skillsArray = e.target.value.split(',').map((skill) => skill.trim());
        setJobDetails({
            ...jobDetails,
            skills: skillsArray
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !jobDetails.industry ||
            !jobDetails.designation ||
            !jobDetails.experience ||
            !jobDetails.salary ||
            !jobDetails.location ||
            !jobDetails.deadline ||
            jobDetails.skills.length === 0
        ) {
            alert('Please fill in all required fields and enter at least one skill.');
            return;
        }

        alert("job posted successfully");
    };

    return (
        <div className='container mx-auto px-4 py-8 h-screen'>
            <div className="max-w-md mx-auto">
                <h4 className='text-center'>Post New Job</h4>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>

                    <div className=''>
                        <label htmlFor="industry" className='block text-gray-700 text-sm font-bold mb-2'>Industry *</label>
                        <input type="text" name="industry" id="industry" onChange={handleInputChange} required className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8" />
                    </div>
                    <div className=''>
                        <label htmlFor="designation" className='block text-gray-700 text-sm font-bold mb-2'>Designation *</label>
                        <input type="text" name="designation" id="designation" onChange={handleInputChange} required className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8" />
                    </div>
                    <div className="">
                        <label htmlFor="skills" className="block text-gray-700 text-sm font-bold mb-2">
                            Skills required * (comma-separated)
                        </label>
                        <input
                            type="text"
                            name="skills"
                            id="skills"
                            onChange={handleSkillsChange}
                            required
                            className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8"
                        />
                    </div>
                    <div className=''>
                        <label htmlFor="experience" className='block text-gray-700 text-sm font-bold mb-2'>Experience (in years) *</label>
                        <input type="number" name="experience" id="experience" onChange={handleInputChange} required className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8" />
                    </div>
                    <div className=''>
                        <label htmlFor="salary" className='block text-gray-700 text-sm font-bold mb-2'>Salary (in lakhs) *</label>
                        <input type="text" name="salary" id="salary" onChange={handleInputChange} required className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8" />
                    </div>
                    <div className=''>
                        <label htmlFor="location" className='block text-gray-700 text-sm font-bold mb-2'>Location *</label>
                        <input type="text" name="location" id="location" onChange={handleInputChange} required className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8" />
                    </div>
                    <div className=''>
                        <label htmlFor="deadline" className='block text-gray-700 text-sm font-bold mb-2'>Deadline *</label>
                        <input type="date" name="deadline" id="deadline" onChange={handleInputChange} required className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8" />
                    </div>

                    <div className='text-center'>
                        <input type="submit" name="post" value="submit" id="post" className="text-white text-lg bg-blue-600 p-2 rounded-lg hover:bg-blue-800 hover:cursor-pointer " />
                    </div>
                </form>
            </div>
        </div>
    )
}
