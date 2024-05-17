import * as types from "./actionTypes";

const initialState = {
  addLectureLoading: false,
  addLectureError: false,
  addLectureData: {},

  getLectureLoading: false,
  getLectureError: false,
  getLectureData: [],
};

const lectureReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_LECTURE_LOADING:
      return {
        ...state,
        addLectureLoading: true,
        addLectureError: false,
      };
    case types.ADD_LECTURE_SUCCESS:
      return {
        ...state,
        addLectureLoading: false,
        addLectureError: false,
        addLectureData: action.payload,
      };
    case types.ADD_LECTURE_ERROR:
      return {
        ...state,
        addLectureLoading: false,
        addLectureError: true,
      };
    case types.GET_LECTURE_LOADING:
      return {
        ...state,
        getLectureLoading: true,
        getLectureError: false,
      };
    case types.GET_LECTURE_SUCCESS:
      return {
        ...state,
        getLectureLoading: false,
        getLectureError: false,
        getLectureData: action.payload,
      };
    case types.GET_LECTURE_ERROR:
      return{
        ...state,
        getLectureLoading: false,
        getLectureError: true,
      }
    default:
      return state;
  }
};

export default lectureReducer;
