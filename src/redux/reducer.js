import jobsReducer from "./slices/jobsSlice"

import {combineReducers} from "redux"

const rootReducer = combineReducers({
    jobs: jobsReducer
})

export default rootReducer