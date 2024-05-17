import { baseUrl } from "../../Components/baseUrl";
import * as types from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify";

export const getProfileStudent = (dispatch) => {
  let token=localStorage.getItem("token")
  if(token){
    dispatch({ type: types.STUDENT_GET_PROFILE_LOADING });

  axios
    .get(`${baseUrl}/students/profile`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      dispatch({ type: types.STUDENT_GET_PROFILE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.STUDENT_GET_PROFILE_ERROR });
      
    });
  }
  
};

export const updateProfileStudent = (data) => (dispatch) => {
  dispatch({ type: types.STUDENT_UPDATE_PROFILE_LOADING });

  axios
    .patch(`${baseUrl}/students/profile-update`, data, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      if (res.data.message) {
        toast.success(`${res.data.message}!`);
        dispatch({
          type: types.STUDENT_UPDATE_PROFILE_SUCCESS,
          payload: res.data,
        });
        getProfileStudent(dispatch)

      }
    })
    .catch((err) => {
        console.log(err)
      dispatch({ type: types.STUDENT_UPDATE_PROFILE_ERROR });
      toast.error("Error, Please try again later.");
    });
};
