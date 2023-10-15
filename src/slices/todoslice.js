import {createSlice} from '@reduxjs/toolkit'

export const todoslice = createSlice({
    name:"todo",
    initialState : ['Code', 'Anime'],
    reducers:{
        addTodo:(state, action)=>{
            state.push(action.payload)
        },
        delTodo:(state, action)=>{
            return state.filter(todo => todo !== action.payload);
        }
    }
})

export const {addTodo} = todoslice.actions
export const {delTodo} = todoslice.actions
export default todoslice.reducer 