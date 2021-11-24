import contactReducer from "./contactsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  contactReducer,
});

export default rootReducer;
