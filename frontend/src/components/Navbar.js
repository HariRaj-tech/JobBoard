import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        
        <div className="flex items-center space-x-4">
          <Link to="/home" className="text-white text-xl font-bold">JobBoard</Link>
          <Link to="/home" className="text-white text-base hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white text-base hover:text-gray-200">About</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login</Link>
          <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Signup</Link>
        </div>
      </div>
    </nav>
  )
}
