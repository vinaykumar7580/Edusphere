import * as types from "./actionTypes";

const initialState = {
  getProfileLoading: false,
  getProfileError: false,
  getProfileDataStudent: {},

  updateProfileLoadingStudent: false,
  updateProfileErrorStudent: false,
  updateProfileDataStudent: false,
};

const studentProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STUDENT_GET_PROFILE_LOADING:
      return {
        ...state,
        getProfileLoading: true,
        getProfileError: false,
      };
    case types.STUDENT_GET_PROFILE_SUCCESS:
      return {
        ...state,
        getProfileLoading: false,
        getProfileError: false,
        getProfileDataStudent: action.payload,
      };
    case types.STUDENT_GET_PROFILE_ERROR:
      return {
        ...state,
        getProfileLoading: false,
        getProfileError: true,
      };
    case types.STUDENT_UPDATE_PROFILE_LOADING:
      return {
        ...state,
        updateProfileLoadingStudent: true,
        updateProfileErrorStudent: false,
      };
    case types.STUDENT_UPDATE_PROFILE_SUCCESS:
      return{
        ...state,
        updateProfileLoadingStudent: false,
        updateProfileErrorStudent: false,
        updateProfileDataStudent:action.payload
      }
    case types.STUDENT_UPDATE_PROFILE_ERROR:
      return{
        ...state,
        updateProfileLoadingStudent: false,
        updateProfileErrorStudent: true,
      }
    default:
      return state;
  }
};

export default studentProfileReducer;
