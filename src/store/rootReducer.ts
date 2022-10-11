import { combineReducers } from "redux";
import counterReducer from "./features/counter/counterSlice"

export const rootReducer = combineReducers({
    counter: counterReducer
})

export type RootState = typeof rootReducer