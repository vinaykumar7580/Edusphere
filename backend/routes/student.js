const express = require("express");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
const { StudentAuthModel } = require("../model/studentAuth");

const studentRoutes = express.Router();

studentRoutes.post("/register", async (req, res) => {
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
        const student = new StudentAuthModel({
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
        await student.save();
        res.status(200).send({ message: "Student registeration success" });
      } else {
        res.status(500).send({ message: "Student registeration failed" });
      }
    });
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

studentRoutes.post("/login", async (req, res) => {
  const { mobile, password } = req.body;

  const student=await StudentAuthModel.findOne({mobile})

  try {
    if(student){
      bcrypt.compare(password, student?.password, async(err, result)=> {
        if(result){
          const token = jwt.sign({ studentId:student._id}, 'masai');
          const role="student"
          res.status(200).send({message:"Student login success", token, role})
        }else{
          res.status(500).send({message:"Student login failed"})
        }
      });
    }
   
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

module.exports={studentRoutes}
