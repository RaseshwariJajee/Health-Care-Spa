import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer.js";
import{ patientReducer} from "./patientReducer.js";



const allReducers = combineReducers({
  login: loginReducer,
  patientdAdd:patientReducer,
});

export default allReducers;
