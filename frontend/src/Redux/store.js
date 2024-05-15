import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import studentAuthReducer from "./StudentAuth/reducer";
import studentProfileReducer from "./StudentProfile/reducer";
import instructorAuthReducer from "./InstructorAuth/reducer";
import instructorProfileReducer from "./InstructorProfile/reducer";

const rootReducer = combineReducers({
    studentAuthReducer,
    studentProfileReducer,
    instructorAuthReducer,
    instructorProfileReducer
    
  });
  
  export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));