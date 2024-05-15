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
          const token = jwt.sign({ userId:student._id, role:"student"}, 'masai');
          
          res.status(200).send({message:"Student login success", token})
        }else{
          res.status(500).send({message:"Student login failed"})
        }
      });
    }
   
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

studentRoutes.get("/profile", async(req, res)=>{
  const token=req.headers.authorization;
  const decoded = jwt.verify(token, 'masai');
 
  try{
    if(decoded.role=="student"){
      let student= await StudentAuthModel.findOne({_id:decoded.userId})
      res.status(200).send(student)

    }else{
      res.status(500).send({message:"Please, Login first!"})
    }

  }catch(err){
    res.status(500).send({ error: err });
  }
})

studentRoutes.patch("/profile-update", async(req, res)=>{
  const token=req.headers.authorization;
  const decoded = jwt.verify(token, 'masai');
  const payload=req.body;
  try{
    if(decoded.role=="student"){
      await StudentAuthModel.findByIdAndUpdate({_id:decoded.userId}, payload)
      res.status(200).send({message:"Profile updated successfully"})

    }else{
      res.status(500).send({message:"Please, Login first!"})
    }
  }catch(err){
    res.status(500).send({ error: err });
  }
})

module.exports={studentRoutes}
