import {configureStore} from "@reduxjs/toolkit";
import postReducer from "../../src/feature/postSlice";
export default configureStore({
    reducer: {
        post: postReducer,
    },
})