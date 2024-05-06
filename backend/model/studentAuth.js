const mongoose=require("mongoose")

const studentSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String
        
    },
    birth:{
        type:Date
    },
    age:{
        type:Number
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    class:{
        type:String
    },
    stream:{
        type:String
    },
    image:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
},{
    versionKey:false
})

const StudentAuthModel=mongoose.model("student-auth", studentSchema)

module.exports={StudentAuthModel}