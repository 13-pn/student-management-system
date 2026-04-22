import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <ul className="flex md:flex-col  w-full text-center   overflow-hidden" >

      <li className="flex-1 border md:border-none">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `block p-2 text-sm  md:text-base ${
              isActive
                ? "bg-white text-black font-semibold"
                : "text-white font-semibold bg-blue-600 hover:bg-blue-100 hover:text-black"
            }`
          }
        >
          DASHBOARD
        </NavLink>
      </li>

      <li className="flex-1 md:mt-3 border md:border-none">
        <NavLink
          to="/AddNew"
          className={({ isActive }) =>
            `block p-2 text-sm md:text-base ${
              isActive
                ? "bg-white text-black font-semibold"
                : "text-white font-semibold bg-blue-600 hover:bg-blue-100 hover:text-black"
            }`
          }
        >
          ADD STUDENT
        </NavLink>
      </li>

      <li className="flex-1 md:mt-3 border md:border-none">
        <NavLink
          to="/ViewAll"
          className={({ isActive }) =>
            `block pt-2 pb-2 text-sm md:text-base ${
              isActive
                ? "bg-white text-black font-semibold"
                : "text-white md:font-semibold bg-blue-600 hover:bg-blue-100 hover:text-black"
            }`
          }
        >
          VIEW STUDENTS
        </NavLink>
      </li>

    </ul>
  )
}

export default Sidebar