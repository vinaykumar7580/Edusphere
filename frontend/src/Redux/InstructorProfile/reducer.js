import * as types from "./actionTypes";

const initialState = {
  getProfileLoading: false,
  getProfileError: false,
  getProfileDataInstructor: {},

  updateProfileLoadingInstructor: false,
  updateProfileErrorInstructor: false,
  updateProfileDataInstructor: false,
};

const instructorProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INSTRUCTOR_GET_PROFILE_LOADING:
      return {
        ...state,
        getProfileLoading: true,
        getProfileError: false,
      };
    case types.INSTRUCTOR_GET_PROFILE_SUCCESS:
      return {
        ...state,
        getProfileLoading: false,
        getProfileError: false,
        getProfileDataInstructor: action.payload,
      };
    case types.INSTRUCTOR_GET_PROFILE_ERROR:
      return {
        ...state,
        getProfileLoading: false,
        getProfileError: true,
      };
    case types.INSTRUCTOR_UPDATE_PROFILE_LOADING:
      return {
        ...state,
        updateProfileLoadingInstructor: true,
        updateProfileErrorInstructor: false,
      };
    case types.INSTRUCTOR_UPDATE_PROFILE_SUCCESS:
      return{
        ...state,
        updateProfileLoadingInstructor: false,
        updateProfileErrorInstructor: false,
        updateProfileDataInstructor:action.payload
      }
    case types.INSTRUCTOR_UPDATE_PROFILE_ERROR:
      return{
        ...state,
        updateProfileLoadingInstructor: false,
        updateProfileErrorInstructor: true,
      }
    default:
      return state;
  }
};

export default instructorProfileReducer;
