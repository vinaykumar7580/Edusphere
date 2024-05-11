const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { InstructorAuthModel } = require("../model/instructorAuth");

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
          const token = jwt.sign({ instructorId: instructor._id }, "masai");
          const role = "instructor";
          res
            .status(200)
            .send({ message: "Instructor login success", token, role });
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
  try {
    if (decoded) {
      let instructor = await InstructorAuthModel.findOne({
        _id: decoded.instructorId,
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
    if (decoded) {
      await InstructorAuthModel.findByIdAndUpdate(
        { _id: decoded.instructorId },
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

module.exports={instructorRoutes}
