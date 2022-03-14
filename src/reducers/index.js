import changeTheNumber from "./upDown";
import changeTheColor from "./changeColor";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    changeTheColor,
})
export default rootReducer;