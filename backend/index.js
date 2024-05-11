const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { studentRoutes } = require("./routes/student")
const { instructorRoutes } = require("./routes/instructor")

const app=express()

app.use(express.json())
app.use(cors())

app.use("/students", studentRoutes)
app.use("/instructors", instructorRoutes)

app.listen(8080, async()=>{
    try{
        await connection
        console.log("mongodb connected")
    }catch(err){
        console.log(err)
        console.log("mongodb not connected")
    }
    console.log("server running on port 8080")
})