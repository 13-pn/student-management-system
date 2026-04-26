import React, { useState } from 'react'
import {toast} from 'react-hot-toast'


const AddStudent = () => {
    const [name, setName] = useState("")
    const [std, setStd] = useState("")
    const [rollNum, setRollNum] = useState("")


    function handleSubmit(){
        const tst1=toast.loading("please wait....")
        fetch('https://student-management-system-of6i.onrender.com/adduser',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            StudentName:name,
            StudentRollNumber:rollNum,
            StudentClass:std
          })
        })
        .then(res=>(res.json()))
        .then(data=>{console.log(data)
          toast.success("Student Added....",{id:tst1})
        })
        .catch((err)=>{console.log(err)
          toast.error("Something went wrong....❌",{id:tst1})
        })

        setName("")
        setRollNum("")
        setStd("")
    }
  return (
    <div className="flex flex-col items-center md:mt-10 px-3">

  <h1 className="text-2xl md:text-3xl p-3 font-bold text-center">
    ADD STUDENT
  </h1>

  <div className="md:mt-5 w-full md:w-1/2 space-y-5">

    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
      <label className="text-lg md:text-2xl font-semibold md:w-1/3">
        NAME :
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full"
        placeholder="Enter name here..."
      />
    </div>


    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
      <label className="text-lg md:text-2xl font-semibold md:w-1/3">
        CLASS :
      </label>
      <input
        type="text"
        value={std}
        onChange={(e) => setStd(e.target.value)}
        className="border p-2 w-full"
        placeholder="Enter class here..."
      />
    </div>

    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
      <label className="text-lg md:text-2xl font-semibold md:w-1/3">
        ROLL NO :
      </label>
      <input
        type="number"
        value={rollNum}
        onChange={(e) => setRollNum(e.target.value)}
        className="border p-2 w-full"
        placeholder="Enter roll number here..."
      />
    </div>

  </div>

  <button
    onClick={handleSubmit}
    className="p-3 text-white rounded font-bold mt-10 text-lg md:text-xl w-full md:w-auto"
    style={{ backgroundColor: "green" }}
  >
    Submit
  </button>

</div>
  )
}

export default AddStudent
