import React, { useState } from 'react'

export default function Signup() {

    const [role, setRole] = useState('user');

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }

    return (

        <div className="container mx-auto px-4 py-8 bg-[#C6DCBA] h-screen">
            <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Create a new account</h2>
                <form className="space-y-4">
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="user"
                            name="role"
                            value="user"
                            checked={role === 'user'}
                            onChange={handleRoleChange}
                            className="mr-2"
                        />
                        <label htmlFor="user" className="text-sm font-medium">User</label>
                        <input
                            type="radio"
                            id="company"
                            name="role"
                            value="company"
                            checked={role === 'company'}
                            onChange={handleRoleChange}
                            className="ml-4 mr-2"
                        />
                        <label htmlFor="company" className="text-sm font-medium">Company</label>
                    </div>
                    {role === 'user' && (
                        <div>
                            <div className="mb-2">
                                <label htmlFor="userName" className="block text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="userName"
                                    placeholder="Enter your first name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="userEmail" className="block text-sm font-medium">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="userEmail"
                                    placeholder="Enter your email address"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="userPassword" className="block text-sm font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="userPassword"
                                    placeholder="Enter your password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="userConfirmPassword" className="block text-sm font-medium">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="userConfirmPassword"
                                    placeholder="Confirm your password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                />
                            </div>
                        </div>
                    )}

                    {role === 'company' && (
                        <div>
                            <div className="mb-2">
                                <label htmlFor="companyName" className="block text-sm font-medium">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    placeholder="Enter your company name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="ownerName" className="block text-sm font-medium">
                                    Owner Name
                                </label>
                                <input
                                    type="text"
                                    id="ownerName"
                                    placeholder="Enter your owner name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="companyAddress" className="block text-sm font-medium">
                                    Company Address
                                </label>
                                <textarea
                                    type="text"
                                    id="companyAddress"
                                    placeholder="Enter your company address"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="companyEmail" className="block text-sm font-medium">
                                    Company Email Address
                                </label>
                                <input
                                    type="email"
                                    id="companyEmail"
                                    placeholder="Enter your company email address"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="companyPassword" className="block text-sm font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="companyPassword"
                                    placeholder="Enter your password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="companyConfirmPassword"
                                    className="block text-sm font-medium"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="companyConfirmPassword"
                                    placeholder="Confirm your password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                                />
                            </div>
                        </div>
                    )}
                    <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Create Account
                    </button>
                </form>
            </div>
        </div>

    )
}
