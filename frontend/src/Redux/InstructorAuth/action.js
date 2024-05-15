import axios from "axios";
import { baseUrl } from "../../Components/baseUrl";
import * as types from "./actionTypes";
import { toast } from "react-toastify";

export const handleInstructorRegister = (data, navigate) => (dispatch) => {
  dispatch({ type: types.INSTRUCTOR_REGISTER_LOADING });
  axios
    .post(`${baseUrl}/instructors/register`, data)
    .then((res) => {
      if (res.data.message == "Instructor registeration success") {
        dispatch({
          type: types.INSTRUCTOR_REGISTER_SUCCESS,
          payload: res.data,
        });
        toast.success("Instructor Register Successfully!");
        navigate("/login");
      }else{
        toast.error("Error, Please try again later.");
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.INSTRUCTOR_REGISTER_ERROR });
      toast.error("Error, Please try again later.");
    });
};

export const handleInstructorLogin = (data, navigate) => (dispatch) => {
  dispatch({ type: types.INSTRUCTOR_LOGIN_LOADING });

  axios
    .post(`${baseUrl}/instructors/login`, data)
    .then((res) => {
      if (res.data.message == "Instructor login success") {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: types.INSTRUCTOR_LOGIN_SUCCESS, payload: res.data });
        toast.success("Instructor Login Successfully!");
        navigate("/");
      }else{
        toast.error("Error, Please try again later.");
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.INSTRUCTOR_REGISTER_ERROR });
      toast.error("Error, Please try again later.");
    });
};
