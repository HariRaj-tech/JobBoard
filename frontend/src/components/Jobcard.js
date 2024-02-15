import React from 'react'
import image from '../images.jpeg'
import { Link } from 'react-router-dom'


export default function Jobcard() {
    return (

        <div className="container mx-auto p-2 w-80 border-black border-2 bg-[#CDFADB] rounded-xl hover:scale-105 hover:bg-[#A1EEBD] hover:shadow-3xl hover:shadow-emerald-900/100">
            <div className="flex items-center justify-start mb-4">
                <img src={image} alt=".." className="object-contain w-14 h-15 border-2 rounded-xl" />
                <div className='mx-8'>
                    <p className="text-2xl font-bold text-black">Jman group</p>
                    <p className="text-sm text-gray-500 "><i className="fa-solid fa-location-dot mr-2" />Chennai, India</p>
                </div>
            </div>
            <div className="mb-4">
                <h5 className="text-xl font-bold text-black">Full Stack developer</h5>
                <div className="text-sm text-gray-500"><i className="fa-solid fa-briefcase mr-2" />Fulltime</div>
            </div>
            <div className="mb-4">
                <p className="text-gray-700">JMAN is a “best of” consulting organisation, taking the best of specific disciplines and industries to deliver a unique offering that is fast, smart and useful to our client partners.</p>
            </div>
            <div className="mb-4">
                {/* <span className="inline-block mr-2 text-sm text-gray-500">Skills:</span> */}
                <span className="inline-block bg-gray-200 p-1 rounded text-xs text-gray-500 mr-2">React js</span>
                <span className="inline-block bg-gray-200 p-1 rounded text-xs text-gray-500 mr-2">Node js</span>
                <span className="inline-block bg-gray-200 p-1 rounded text-xs text-gray-500">Python</span>
            </div>
            <div className="flex justify-start">
                <span className="text-2xl font-bold text-black"><i className="fa-solid fa-indian-rupee-sign mr-2" />5L</span>
                <Link to="/jobid" className="inline-block mx-auto px-4 py-2 bg-blue-500 text-white font-bold text-center rounded">Apply Now</Link>
            </div>
        </div>

    )
}
