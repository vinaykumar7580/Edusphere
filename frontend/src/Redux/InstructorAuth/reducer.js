import * as types from "./actionTypes";

const initialState = {
  instructorRegLoading: false,
  instructorRegError: false,
  instructorRegData: {},

  instructorLogLoading: false,
  instructorLogError: false,
  instructorLogData: {},
};

const instructorAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INSTRUCTOR_REGISTER_LOADING:
      return {
        ...state,
        instructorRegLoading: true,
        instructorRegError: false,
      };
    case types.INSTRUCTOR_REGISTER_SUCCESS:
      return {
        ...state,
        instructorRegLoading: false,
        instructorRegError: false,
        instructorRegData: action.payload,
      };
    case types.INSTRUCTOR_REGISTER_ERROR:
      return {
        ...state,
        instructorRegLoading: false,
        instructorRegError: true,
      };

      case types.INSTRUCTOR_LOGIN_LOADING:
        return {
          ...state,
          instructorLogLoading: true,
          instructorLogError: false,
        };
      case types.INSTRUCTOR_LOGIN_SUCCESS:
        return {
          ...state,
          instructorLogLoading: false,
          instructorLogError: false,
          instructorLogData: action.payload,
        };
      case types.INSTRUCTOR_LOGIN_ERROR:
        return {
          ...state,
          instructorLogLoading: false,
          instructorLogError: true,
        };
    default:
        return state;
  }
};

export default instructorAuthReducer
