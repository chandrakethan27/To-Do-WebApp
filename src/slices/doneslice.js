import {createSlice} from '@reduxjs/toolkit'

export const doneslice = createSlice({
    name:"done",
    initialState : [],
    reducers:{
        doneTodo:(state, action)=>{
            state.push(action.payload)
        },
        delTodo:(state, action)=>{
            return state.filter(todo => todo !== action.payload);
        }
    }
})

export const {doneTodo} = doneslice.actions
export const {delTodo} = doneslice.actions
export default doneslice.reducer