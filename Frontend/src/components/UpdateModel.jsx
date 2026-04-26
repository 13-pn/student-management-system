import { useState , useEffect} from "react";
import closeImg from '../assets/close.png'
import {toast} from 'react-hot-toast'

function UpdateModel({arr,idx,refresh}) {
  const [open, setOpen] = useState(false);
  const [Stdname, setStdname] = useState(arr[idx].StudentName)
  const [StdRoll, setStdRoll] = useState(arr[idx].StudentRollNumber)
  const [StdClass, setStdClass] = useState(arr[idx].StudentClass)

  function updbtn(id){
    let toastId=toast.loading("Please wait...")
    fetch(`https://student-management-system-of6i.onrender.com/UpdateStudent/${id}`,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        StudentName:Stdname,
        StudentRollNumber:StdRoll,
        StudentClass:StdClass
      })
    })
    .then(res=>res.text())
    .then(data=>{console.log(data)
    refresh()
    toast.success('Updated succsefully...',{id:toastId})
  })
    
    .catch(err=>{
      console.log(err)
    toast.error("failed please try again...!",{id:toastId})
    })
  }
  return (
    <div>
      <button onClick={() => setOpen(true)}>
        Edit
      </button>

      {open && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
        <button className="text-black" style={{position:'absolute',top:'5px',right:'5px'}} onClick={() => setOpen(false)}>
              <img src={closeImg} alt="image" />
            </button>
            <h1 className="text-green-700 text-2xl font-bold mt-3">Please Edit these fields</h1>
           <div className="flex flex-col gap-4  mx-auto mt-5">
              <input
              type="text"
              placeholder="Enter Name"
              className="border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={Stdname}
              onChange={(e) => setStdname(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Class"
              className="border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={StdClass}
              onChange={(e) => setStdClass(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Roll No"
              className="border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={StdRoll}
              onChange={(e) => setStdRoll(e.target.value)}
            />
          </div> 
            <button onClick={()=>{updbtn(arr[idx]._id)
              setOpen(false)
            }} className="p-2 mt-5 text-white bg-green-700 font-semibold rounded" 
            style={{width:'100%'}}>Update</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
    position:"relative",
  },
};

export default UpdateModel;