import React from 'react'
import Jobcard from './Jobcard'
import image from '../Jobs-image.png'


export default function Home() {
    return (
        <>

            <div class="container mx-auto px-4 my-8">
                <div class="text-5xl font-bold text-center text-grey-500">The Easiest Way to Get Your New Job</div>

                <div class="grid grid-cols-2  gap-4 mt-8 ">
                    <div className="container w-96 ml-60 mt-11">
                        <div class="bg-gray-100 p-4 rounded shadow-md">
                            <h3 class="text-lg font-bold mb-2">Job Seekers</h3>
                            <p>Each month, more than 3 million job seekers turn to Job Board in their search for work, making over 140,000 applications every single day.</p>
                        </div>
                        <div class="bg-gray-100 p-4 rounded shadow-md mt-8">
                            <h3 class="text-lg font-bold mb-2">Employers</h3>
                            <p>With over number of active job listings, Job Board connects you with a vast pool of talented candidates.</p>
                        </div>
                    </div>
                    <div className="container">
                        <img src={image} alt="" className="object-fit w-9/12 rounded-xl shadow-2xl shadow-blue-700 hover:rotate-6" />
                    </div>

                </div>

            </div>


            <p className='container mx-auto text-4xl font-bold text-center my-1'>Jobs of the day</p>
            <p className='text-xl my-1 text-center'>Search and connect with the right candidates faster</p>
            <div className="container mx-auto my-7 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div className="">
                    <Jobcard />
                </div>
                <div className="">
                    <Jobcard />
                </div>
                <div className="">
                    <Jobcard />
                </div>
                <div className="">
                    <Jobcard />
                </div>
                <div className="">
                    <Jobcard />
                </div>
                <div className="">
                    <Jobcard />
                </div>
                <div className="">
                    <Jobcard />
                </div>
                <div className="">
                    <Jobcard />
                </div>
            </div>


        </>
    )
}
