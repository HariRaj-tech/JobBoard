import React from 'react'
import image from '../images.jpeg'


export default function Jobcard() {
    return (
        <div className="card" >
            <div className="card-body" >
                <div className='container' >
                    <img src={image} className="card-img-top" alt="..." style={{ width: '60px', height: '60px', borderRadius: '5%' }} />
                    <div className='mx-3 my-2 d-inline-block'  >
                        <h5 className="card-title"  >Jman group</h5>
                        <h6 className="card-subtitle my-2 text-body-secondary"><i className="fa-solid fa-location-dot" /> Chennai</h6>
                    </div>
                </div>
                <h5 className='my-2'>Full Stack developer</h5>

                <p className="card-subtitle text-body-secondary"><i className="fa-solid fa-briefcase" /> Fulltime</p>
                <p className="card-text">JMAN is a “best of” consulting organisation, taking the best of specific disciplines and industries to deliver a unique offering that is fast, smart and useful to our client partners.</p>
                <ul className="list-inline" >
                    <li className="list-inline-item" style={{ border: '1px solid gray', borderRadius: '10%', backgroundColor: '#E1F0DA' }}>React js</li>
                    <li className="list-inline-item" style={{ border: '1px solid gray', borderRadius: '10%', backgroundColor: '#E1F0DA' }}>Node js</li>
                    <li className="list-inline-item" style={{ border: '1px solid gray', borderRadius: '10%', backgroundColor: '#E1F0DA' }}>System design</li>
                </ul>
                <div className='d-flex justify-content-between'>
                    <h5><i className="fa-solid fa-indian-rupee-sign" /> 5L</h5>
                    <a className='btn btn-primary mx-3'>Apply Now</a>
                </div>

            </div>
        </div>
    )
}
