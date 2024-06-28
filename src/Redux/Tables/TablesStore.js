import TableReducer from "./TableReducer";
import { configureStore } from "@reduxjs/toolkit";
const tstore=configureStore({reducer:TableReducer})
export default tstore