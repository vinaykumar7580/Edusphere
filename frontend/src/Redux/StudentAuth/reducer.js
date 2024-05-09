import * as types from "./actionTypes";

const initialState = {
  studentRegLoading: false,
  studentRegError: false,
  studentRegData: {},

  studentLogLoading: false,
  studentLogError: false,
  studentLogData: {},
};

const studentAuthReducer=(state=initialState, action)=>{
    switch(action.type){
        case types.STUDENT_REGISTER_LOADING:
            return{
                ...state,
                studentRegLoading:true,
                studentRegError:false
            }
        case types.STUDENT_REGISTER_SUCCESS:
            return{
                ...state,
                studentRegLoading:false,
                studentRegError:false,
                studentRegData:action.payload
            }
        case types.STUDENT_REGISTER_ERROR:
            return{
                ...state,
                studentRegLoading:false,
                studentRegError:true
            }
        case types.STUDENT_LOGIN_LOADING:
            return{
                ...state,
                studentLogLoading:true,
                studentLogError:false
            }
        case types.STUDENT_LOGIN_SUCCESS:
            return{
                ...state,
                studentLogLoading:false,
                studentLogError:false,
                studentLogData:action.payload
            }
        case types.STUDENT_LOGIN_ERROR:
            return{
                ...state,
                studentLogLoading:false,
                studentLogError:true
            }
        default:
            return state;
    }
}

export default studentAuthReducer
