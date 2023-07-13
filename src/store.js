import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './slices/todoslice'
import doneReducer from './slices/doneslice'
export const store = configureStore({
    reducer:{
        todo: todoReducer,
        done: doneReducer
    }
})