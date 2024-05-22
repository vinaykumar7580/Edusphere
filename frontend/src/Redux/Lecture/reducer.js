import * as types from "./actionTypes";

const initialState = {
  addLectureLoading: false,
  addLectureError: false,
  addLectureData: {},

  getLectureLoading: false,
  getLectureError: false,
  getLectureData: [],

  getLectureDetailsLoading: false,
  getLectureDetailsError: false,
  getLectureDetailsData: {},
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
      return {
        ...state,
        getLectureLoading: false,
        getLectureError: true,
      };

    case types.GET_LECTURE_DETAILS_LOADING:
      return {
        ...state,
        getLectureDetailsLoading: true,
        getLectureDetailsError: false,
      };
    case types.GET_LECTURE_DETAILS_SUCCESS:
      return {
        ...state,
        getLectureDetailsLoading: false,
        getLectureDetailsError: false,
        getLectureDetailsData:action.payload
      };
    case types.GET_LECTURE_DETAILS_ERROR:
      return{
        ...state,
        getLectureDetailsLoading: false,
        getLectureDetailsError: true,
      }
    default:
      return state;
  }
};

export default lectureReducer;
