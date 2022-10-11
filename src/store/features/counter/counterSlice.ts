import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"

export type Counter = {value: number}

const initialState = { value: 0}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        addCount: (state, action:PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const {addCount} = counterSlice.actions
export const countValue = (state: RootState) => state.counter.value
export default counterSlice.reducer