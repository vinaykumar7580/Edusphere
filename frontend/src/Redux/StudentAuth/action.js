import { baseUrl } from "../../Components/baseUrl";
import * as types from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify";

export const handleSudentRegister = (data, navigate) => (dispatch) => {
  dispatch({ type: types.STUDENT_REGISTER_LOADING });

  axios
    .post(`${baseUrl}/students/register`, data)
    .then((res) => {
      console.log("stuReg", res.data);
      if (res.data.message == "Student registeration success") {
        dispatch({ type: types.STUDENT_REGISTER_SUCCESS, payload: res.data });
        toast.success("Student Register Successfully!");
        navigate("/login");
      }else{
        toast.error("Error, Please try again later.");
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.STUDENT_REGISTER_ERROR });
      toast.error("Error, Please try again later.");
    });
};


export const handleSudentLogin = (data, navigate) => (dispatch) => {
  dispatch({ type: types.STUDENT_LOGIN_LOADING });

  axios
    .post(`${baseUrl}/students/login`, data)
    .then((res) => {
      console.log("stuLogin", res.data);
      if (res.data.message == "Student login success") {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("role", "student")
        dispatch({ type: types.STUDENT_LOGIN_SUCCESS, payload: res.data });
        toast.success("Student Login Successfully!");
        navigate("/");
      }else{
        toast.error("Error, Please try again later.");
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.STUDENT_LOGIN_ERROR });
      toast.error("Error, Please try again later.");
    });
};