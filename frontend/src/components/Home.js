import React from 'react'
import Jobcard from './Jobcard'
import image from '../Jobs-image.png'


export default function Home() {
    return (
        <>
        
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
