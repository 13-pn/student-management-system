import React, { useEffect, useState } from 'react'
import UpdateModel from './UpdateModel'
import SkeletonRow from './SkeletonRow'
import { toast } from 'react-hot-toast'

const Alldetail = () => {
  const [Students, setStudents] = useState([])
  const [loading, setloading] = useState(true)

  function fetchStudents() {
    setloading(true)
    fetch('https://student-management-system-of6i.onrender.com/AllStudents')
      .then(res => res.json())
      .then(data => {
        setStudents(data)
        setloading(false)
      })
      .catch(err => {
        toast.error("failed to load please try again....❌")
        setloading(false)
      })
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  function dltStd(id) {
    const toast2 = toast.loading('Please wait...')

    fetch(`https://student-management-system-of6i.onrender.com/DeleteStudent/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Deleted successfully", { id: toast2 })
      })
      .catch(err => {
        toast.error("please try again..!", { id: toast2 })
      })

    let upd = Students.filter((e) => e._id !== id)
    setStudents(upd)
  }

  return (
    <div className="border rounded-lg">

      <table className="w-full  border-collapse text-[10px] sm:text-xs md:text-base" style={{overflowY:'scroll'}}>

        <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <tr>
            <th className="p-1 md:p-3 text-[15px] border-r border-black">Name</th>
            <th className="p-1 md:p-3 text-[15px] border-r border-black">Roll No</th>
            <th className="p-1 md:p-3 text-[15px] border-r border-black">Class</th>
            <th className="p-1 text-[15px] md:p-3">Action</th>
          </tr>
        </thead>

        <tbody className="bg-white">

          {loading ? (
            <>
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
            </>
          ) : (
            Students.map((e, index) => (
              <tr
                key={e._id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50`}
              >

                <td className="p-1 md:p-3 border-r border-black text-[13px] truncate max-w-[100px] md:max-w-none">
                  {e.StudentName}
                </td>

                <td className="p-1 md:p-3 text-[15px] border-r border-black">
                  {e.StudentRollNumber}
                </td>

                <td className="p-1 md:p-3 text-[13px] border-r border-black">
                  {e.StudentClass}
                </td>

                <td className="p-1 md:p-3 text-[13px] space-x-1 md:space-x-2">

                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-1 md:px-3 py-1 rounded text-[13px] md:text-sm">
                    <UpdateModel arr={Students} idx={index} refresh={fetchStudents} />
                  </button>

                  <button
                    onClick={() => dltStd(e._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-1 md:px-3 py-1 rounded text-[13px] md:text-sm"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>
    </div>
  )
}

export default Alldetail