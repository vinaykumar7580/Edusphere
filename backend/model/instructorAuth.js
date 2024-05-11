const mongoose=require("mongoose")

const subjectSchema = mongoose.Schema({
    subject: String,
    
},{
    versionKey:false
});

const classSchema = mongoose.Schema({
    class: String,
    subjects: [subjectSchema], 
    
},{
    versionKey:false
});

const instructorSchema=mongoose.Schema({
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
    classes:[classSchema],
    image:{
        type:String
    },
    role: {
        type: String,
        default: 'instructor'
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
},{
    versionKey:false
})

const InstructorAuthModel=mongoose.model("instructor-auth", instructorSchema)

module.exports={InstructorAuthModel}