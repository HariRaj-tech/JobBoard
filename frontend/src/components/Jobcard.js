import React from 'react'
import image from '../images.jpeg'
import { Link } from 'react-router-dom'


export default function Jobcard(props) {


    return (

        <div className="container mx-auto p-2 w-80 border-black border-2 bg-[#F3F8FF] rounded-xl hover:scale-105 hover:bg-[#A1EEBD] hover:shadow-3xl hover:shadow-emerald-900/100">
            <div className="flex items-center justify-start mb-4">
                <img src={image} alt=".." className="object-contain w-14 h-15 border-2 rounded-xl" />
                <div className='mx-8'>
                    <p className="text-2xl font-bold text-black">{props.name}</p>
                    <p className="text-sm text-gray-500 "><i className="fa-solid fa-location-dot mr-2" />{props.location}</p>
                </div>
            </div>
            <div className="mb-4">
                <h5 className="text-xl font-bold text-black">{props.designation}</h5>
                <div className="text-sm text-gray-500"><i className="fa-solid fa-briefcase mr-2" />{props.time}</div>
            </div>
            <div className="mb-4">
                <p className="text-gray-700 line-clamp-4">{props.about}</p>
            </div>
            <div className="mb-4">
                {props.skills.map((skill) => {
                    return <span className="inline-block bg-gray-200 p-1 rounded text-xs text-gray-500 mr-2">{skill}</span>
                })}
            </div>
            <div className="flex justify-start">
                <span className="text-2xl font-bold text-black"><i className="fa-solid fa-indian-rupee-sign mr-2" />{props.salary}</span>
                <Link to="/jobid" className="inline-block mx-auto px-4 py-2 bg-blue-500 text-white font-bold text-center rounded">Apply Now</Link>
            </div>
        </div>

    )
}
