import React from 'react'
import TotalStdImg from '../assets/TotalStudents.png'
import TotalStdByClass from '../assets/TotalStdClass.png'

const MainArea = () => {
  return (
    <div className="h-full w-full mt-3 flex flex-col md:flex-row items-center justify-center overflow-hidden gap-2 md:gap-[70px]">

  
      <div className="flex justify-center items-center">
        <img
          src={TotalStdImg}
          alt="totalStudents"
          className="h-[200px] md:h-[250px] lg:h-[350px] object-contain"
        />
      </div>

  
      <div className="flex justify-center items-center">
        <img
          src={TotalStdByClass}
          alt="totalStudentsByClass"
          className="h-[200px] md:h-[250px] lg:h-[350px] object-contain"
        />
      </div>

    </div>
  )
}

export default MainArea