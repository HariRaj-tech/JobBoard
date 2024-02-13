import React, { useState } from 'react'

export default function Login() {

    const [role, setRole] = useState('user');

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }

    return (
        <div className='container mt-4 login-class'>
            <h2>Login</h2>

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

                {role === 'user' ? (<div className="mb-3">
                    <label htmlFor="email" className="form-label">User Email address</label>
                    <input type="email" className="form-control" id="email" name="email" />
                </div>) :

                    (<div className="mb-3">
                        <label htmlFor="email" className="form-label">Company Email address</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>)}

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
