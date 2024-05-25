const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const { InstructorAuthModel } = require("../model/instructorAuth");
const { LectureModel } = require("../model/lecture");
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const instructorRoutes = express.Router();

instructorRoutes.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

instructorRoutes.post("/register", async (req, res) => {
  const {
    name,
    email,
    mobile,
    password,
    gender,
    birth,
    age,
    address,
    city,
    state,
  } = req.body;

  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (hash) {
        const instructor = new InstructorAuthModel({
          name,
          email,
          mobile,
          password: hash,
          gender,
          birth,
          age,
          address,
          city,
          state,
        });
        await instructor.save();
        res.status(200).send({ message: "Instructor registeration success" });
      } else {
        res.status(500).send({ message: "Instructor registeration failed" });
      }
    });
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

instructorRoutes.post("/login", async (req, res) => {
  const { mobile, password } = req.body;

  const instructor = await InstructorAuthModel.findOne({ mobile });

  try {
    if (instructor) {
      bcrypt.compare(password, instructor?.password, async (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: instructor._id, role: "instructor" },
            "masai"
          );

          res.status(200).send({ message: "Instructor login success", token });
        } else {
          res.status(500).send({ message: "Instructor login failed" });
        }
      });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

instructorRoutes.get("/profile", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "masai");
  console.log("instructorProfile", decoded);

  try {
    if (decoded.role == "instructor") {
      let instructor = await InstructorAuthModel.findOne({
        _id: decoded.userId,
      });
      res.status(200).send(instructor);
    } else {
      res.status(500).send({ message: "Please, Login first!" });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

instructorRoutes.patch("/profile-update", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "masai");
  const payload = req.body;

  try {
    if (decoded.role == "instructor") {
      await InstructorAuthModel.findByIdAndUpdate(
        { _id: decoded.userId },
        payload
      );
      res.status(200).send({ message: "Profile updated successfully" });
    } else {
      res.status(500).send({ message: "Please, Login first!" });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

instructorRoutes.post("/lecture/add", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "masai");
  const { title, notes, lectureType, lectureTimeDate } = req.body;
  // const file = req.files.file;

  let instructor = await InstructorAuthModel.findOne({ _id: decoded.userId });

  try {
    if (decoded.role == "instructor") {
      let videoUrl = null;
      if (req.files && req.files.file) {
        const file = req.files.file;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
          resource_type: "auto",
        });
        videoUrl = result.secure_url;
      }

      let lecture = new LectureModel({
        title,
        notes,
        videoUrl,
        lectureType,
        lectureTimeDate,
        instructorName: instructor.name,
        subject: instructor.subject,
        class: instructor.class,
        userId: instructor._id,
      });
      await lecture.save();
      res.status(200).send({ message: "Lecture Added successfully!" });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

instructorRoutes.get("/lecture/get", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "masai");

  let instructor = await InstructorAuthModel.findOne({ _id: decoded.userId });

  try {
    if (instructor) {
      let lecture = await LectureModel.find({ userId: instructor._id });
      res.status(200).send(lecture);
    } else {
      res.status(500).send({ message: "Please, Login first!" });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

instructorRoutes.get("/lecture/get/:id", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "masai");
  const { id } = req.params;

  try {
    if (decoded.role == "instructor") {
      let lecture = await LectureModel.findOne({ _id: id });
      res.status(200).send(lecture);
    } else {
      res.status(500).send({ message: "Please, Login first!" });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

instructorRoutes.patch("/lecture/update/:id", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "masai");
  const { id } = req.params;
  const payload = req.body;
 

  let lecture=await LectureModel.findOne({_id:id})

  try {
    if (decoded.role == "instructor") {
      let videoUrl = lecture.videoUrl;
      if (req.files && req.files.file) {
        const file = req.files.file;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
          resource_type: "auto",
        });
        videoUrl = result.secure_url;

        await LectureModel.findByIdAndUpdate({ _id: id }, {...payload, videoUrl});
        res.status(200).send({ message: "Lecture updated successfully!" });
      }else{
        await LectureModel.findByIdAndUpdate({ _id: id }, {...payload, videoUrl});
        res.status(200).send({ message: "Lecture updated successfully!" });
      }
    } else {
      res.status(500).send({ message: "Please, Login first!" });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

instructorRoutes.delete("/lecture/delete/:id", async(req, res)=>{
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "masai");
  const { id } = req.params;

  try{
    if(decoded.role == "instructor"){
      await LectureModel.findByIdAndDelete({_id:id})
      res.status(200).send({message:"Lecture deleted successfully!"})

    }else {
      res.status(500).send({ message: "Please, Login first!" });
    }

  }catch(err){
    res.status(500).send({ error: err });
  }
})

module.exports = { instructorRoutes };
