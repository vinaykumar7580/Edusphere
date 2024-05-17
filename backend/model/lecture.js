const mongoose=require("mongoose")

const lectureSchema=mongoose.Schema({
    title:String,
    notes:String,
    videoUrl:String,
    lectureType:String,
    lectureTimeDate:Date,
    instructorName:String,
    subject:String,
    class:String,
    userId:String
    
},{
    versionKey:false
})

const LectureModel=mongoose.model("lecture", lectureSchema)

module.exports={LectureModel}