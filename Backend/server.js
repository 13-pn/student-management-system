const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Pawan:Pvn@cluster0.xdjswoz.mongodb.net/?appName=Cluster0")
.then(()=>console.log("Database connected"))
.catch((err)=>console.log(err))

let studentsSchema=mongoose.Schema({
    StudentName:String,
    StudentRollNumber:Number,
    StudentClass:String
})


const Student=mongoose.model("Student",studentsSchema)
app.post('/adduser',async (req,res)=>{
    let data=req.body;
    let NewStd=new Student(data)
    await NewStd.save()
    res.send({
        message:"Added",
        data:NewStd
    })
})

app.get('/AllStudents',async (req,res)=>{
    let data=await Student.find()
    res.send(data)
})

app.delete(`/DeleteStudent/:id`,async (req,res)=>{
    let Stdid=req.params.id;
    await Student.findByIdAndDelete(Stdid)
    res.json("student deleted..")
})

app.put(`/UpdateStudent/:id`,async (req,res)=>{
   try{
    let id=req.params.id;
    let updatedData=req.body;
    const updatedstd=await Student.findByIdAndUpdate(
        id,
        {$set:updatedData},
        {returnDocument: 'after'}
    )
    res.send(updatedstd)
}
catch(err){
    console.log(err)
}
})


app.listen(3000,()=>{
    console.log("Backend is running now....!");
})