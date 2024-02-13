import React from 'react'
import Jobcard from './Jobcard'


export default function Home() {
    return (
        <>
            <h1 className='text-center my-3'>Jobs of the day</h1>
            <p className='text-center'>Search and connect with the right candidates faster</p>
            <div className="container ">
                <div className="row">
                    <div className="col-md-3 my-3">
                        <Jobcard />
                    </div>
                    <div className="col-md-3 my-3">
                        <Jobcard />
                    </div>
                    <div className="col-md-3 my-3">
                        <Jobcard />
                    </div>
                    <div className="col-md-3 my-3">
                        <Jobcard />
                    </div>
                    <div className="col-md-3 my-3">
                        <Jobcard />
                    </div>
                    <div className="col-md-3 my-3">
                        <Jobcard />
                    </div>
                    <div className="col-md-3 my-3">
                        <Jobcard />
                    </div>
                    <div className="col-md-3 my-3">
                        <Jobcard />
                    </div>

                </div>
            </div>

        </>
    )
}
