import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between items-center h-full px-2 md:px-5">

      <h5 className="text-sm md:text-xl lg:text-2xl font-black text-[#EDF1F5] truncate">
        STUDENT MANAGEMENT SYSTEM
      </h5>

      <Link to="/AddNew">
        <button className="bg-[#EDF1F5] text-black rounded px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm font-semibold whitespace-nowrap">
          Add Student
        </button>
      </Link>

    </div>
  )
}

export default Header