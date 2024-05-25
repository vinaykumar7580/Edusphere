import axios from "axios";
import * as types from "./actionTypes";
import { baseUrl } from "../../Components/baseUrl";
import { toast } from "react-toastify";

export const handleGetLecture=(dispatch)=>{
  dispatch({type:types.GET_LECTURE_LOADING})

  axios.get(`${baseUrl}/instructors/lecture/get`,{
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  })
  .then((res)=>{
    dispatch({type:types.GET_LECTURE_SUCCESS, payload:res.data})
  })
  .catch((err)=>{
    console.log(err)
    dispatch({type:types.GET_LECTURE_ERROR})
  })

}

export const handleAddLecture = (data) => (dispatch) => {
  dispatch({ type: types.ADD_LECTURE_LOADING });

  axios
    .post(`${baseUrl}/instructors/lecture/add`, data, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      if (res.data.message == "Lecture Added successfully!") {
        toast.success(`${res.data.message}!`);
        dispatch({ type: types.ADD_LECTURE_SUCCESS, payload: res.data });
        handleGetLecture(dispatch)
        
      } else {
        toast.error(`${res.data.message}!`);
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.ADD_LECTURE_ERROR });
      toast.error("Error, Please try again later.");
    });
};

export const handleGetLectureDetails=(id)=>(dispatch)=>{
  dispatch({type:types.GET_LECTURE_DETAILS_LOADING})

  axios.get(`${baseUrl}/instructors/lecture/get/${id}`,{
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  })
  .then((res)=>{
    dispatch({type:types.GET_LECTURE_DETAILS_SUCCESS, payload:res.data})
  })
  .catch((err)=>{
    console.log(err)
    dispatch({type:types.GET_LECTURE_DETAILS_ERROR})
  })

}

export const handleUpdateLecture=(id, data)=>(dispatch)=>{
  dispatch({type:types.EDIT_LECTURE_LOADING})

  axios.patch(`${baseUrl}/instructors/lecture/update/${id}`, data, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  })
  .then((res)=>{
    if (res.data.message == "Lecture updated successfully!") {
      toast.success(`${res.data.message}`);
      dispatch({ type: types.EDIT_LECTURE_SUCCESS, payload: res.data });
      dispatch(handleGetLectureDetails(id));
      
    } else {
      toast.error(`${res.data.message}!`);
    }
  })
  .catch((err) => {
    console.log(err);
    dispatch({ type: types.EDIT_LECTURE_ERROR });
    toast.error("Error, Please try again later.");
  });

}

export const handleDeleteLecture=(id, navigate)=>(dispatch)=>{

  axios.delete(`${baseUrl}/instructors/lecture/delete/${id}`,{
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  })
  .then((res)=>{
    if (res.data.message == "Lecture deleted successfully!") {
      toast.success(`${res.data.message}`);
      handleGetLecture(dispatch)
      navigate("/instructor/lecture")
      
    } else {
      toast.error(`${res.data.message}!`);
    }
  })
  .catch((err) => {
    console.log(err);
    toast.error("Error, Please try again later.");
  });
}
