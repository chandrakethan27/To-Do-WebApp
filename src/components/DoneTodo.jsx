import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { delTodo } from '../slices/doneslice'

function DoneTodo() {
  let completed = useSelector(state=>state.done)
  const dispatch = useDispatch()
  return (
    <div>
    <div className='lg:text-5xl text-3xl font-bold lg:mr-[17px] mr-[19px]'>Completed</div>
      <p>
        {
          completed.map((value, index)=> <p key={index} className='flex mt-2 lg:ml-72'> 
          <button type="submit" className='rounded-lg py-1 px-2 mt-2 text-sm m-2 bg-transparent' onClick={()=>{
          dispatch(delTodo(value))
        }}>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
</svg>


        </button>
          <p className='mt-4 text-xl'>
        {value}
        </p>
          </p>)
        }
      </p>

    </div>
  )
}

export default DoneTodo