import { baseUrl } from "../../Components/baseUrl";
import * as types from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify";

export const getProfileInstructor = (dispatch) => {
  let token=localStorage.getItem("token")
  if(token){
    dispatch({ type: types.INSTRUCTOR_GET_PROFILE_LOADING});

    axios
      .get(`${baseUrl}/instructors/profile`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        dispatch({ type: types.INSTRUCTOR_GET_PROFILE_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.INSTRUCTOR_GET_PROFILE_ERROR});
        
      });
  }
 
};

export const updateProfileInstructor = (data) => (dispatch) => {
  dispatch({ type: types.INSTRUCTOR_UPDATE_PROFILE_LOADING});

  axios
    .patch(`${baseUrl}/instructors/profile-update`, data, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      if (res.data.message) {
        toast.success(`${res.data.message}!`);
        dispatch({
          type: types.INSTRUCTOR_UPDATE_PROFILE_SUCCESS,
          payload: res.data,
        });
        getProfileInstructor(dispatch)

      }
    })
    .catch((err) => {
        console.log(err)
      dispatch({ type: types.INSTRUCTOR_UPDATE_PROFILE_ERROR});
      toast.error("Error, Please try again later.");
    });
};
