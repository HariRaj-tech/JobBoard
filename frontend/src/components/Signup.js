import React, { useState } from 'react'

export default function Signup() {

    const [role, setRole] = useState('user');

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }

    return (
        <div className='container mt-3'>
            <h2>Create a new account</h2>
            <div >
                <input
                    className='mx-2 my-2'
                    type="radio"
                    id="user"
                    name="role"
                    value="user"
                    checked={role === 'user'}
                    onChange={handleRoleChange}
                />
                <label htmlFor="user">User</label>
            </div>
            <div>
                <input
                    className='mx-2 my-2'
                    type="radio"
                    id="company"
                    name="role"
                    value="company"
                    checked={role === 'company'}
                    onChange={handleRoleChange}
                />
                <label htmlFor="company">Company</label>
            </div>

            <form className='my-2'>


                {role === 'user' ? <><div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" />
                </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">User Email address</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password" minLength={5} requried />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="cpassword" id="cpassword" minLength={5} requried />
                    </div></> :

                    <><div className="mb-3">
                        <label htmlFor="name" className="form-label">Company Name</label>
                        <input type="text" className="form-control" id="name" name="name" />
                    </div>
                        <div className="mb-3">
                            <label htmlFor="ownerName" className="form-label">Owner Name</label>
                            <input type="text" className="form-control" id="ownerName" name="ownerName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Company Address</label>
                            <input type="text" className="form-control" id="address" name="address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Company Email address</label>
                            <input type="email" className="form-control" id="email" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id="password" minLength={5} requried />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name="cpassword" id="cpassword" minLength={5} requried />
                        </div>
                    </>}


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
