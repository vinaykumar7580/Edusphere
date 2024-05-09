import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import studentAuthReducer from "./StudentAuth/reducer";

const rootReducer = combineReducers({
    studentAuthReducer
    
  });
  
  export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));