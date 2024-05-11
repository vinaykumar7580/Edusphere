import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import studentAuthReducer from "./StudentAuth/reducer";
import studentProfileReducer from "./StudentProfile/reducer";

const rootReducer = combineReducers({
    studentAuthReducer,
    studentProfileReducer
    
  });
  
  export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));