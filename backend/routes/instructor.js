const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { InstructorAuthModel } = require("../model/instructorAuth");
const { LectureModel } = require("../model/lecture");

const instructorRoutes = express.Router();

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
  const { title, notes, videoUrl, lectureType, lectureTimeDate } = req.body;

  let instructor = await InstructorAuthModel.findOne({ _id: decoded.userId });

  try {
    if (decoded.role == "instructor") {
      let lecture = new LectureModel({
        title,
        notes,
        videoUrl,
        lectureType,
        lectureTimeDate,
        instructorName: instructor.name,
        subject: instructor.subject,
        class: instructor.class,
        userId:instructor._id
      });
      await lecture.save();
      res.status(200).send({ message: "Lecture Added successfully!" });
    } else {
      res.status(500).send({ message: "Please, Login first!" });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

instructorRoutes.get("/lecture/get", async(req, res)=>{
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "masai");

  let instructor = await InstructorAuthModel.findOne({ _id: decoded.userId });

  try{
    if(instructor){
      let lecture=await LectureModel.find({userId:instructor._id})
      res.status(200).send(lecture)
    }else{
      res.status(500).send({ message: "Please, Login first!" });
    }

  }catch(err){
    res.status(500).send({ error: err });
  }
})

module.exports = { instructorRoutes };
