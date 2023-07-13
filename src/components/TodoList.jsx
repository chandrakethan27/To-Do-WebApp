import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { doneTodo } from '../slices/doneslice'
import { delTodo } from '../slices/todoslice'
import AddTodo from './AddTodo';
function TodoList() {
  let todoList = useSelector(state=>state.todo)
  let dispatch = useDispatch()
  return (
    <div className=''>
        <h1 className='lg:text-5xl text-3xl font-bold lg:mr-24'>To-do's</h1>
        <div>
        <p>
        {todoList.map((value, index)=> <p key={index} className='flex mt-2 lg:ml-72' >
        <button type="submit" className='bg-transparent rounded-lg py-1 px-2 mt-2 text-sm m-2 ' onClick={()=>{
          let actionObj = doneTodo(value)
          dispatch(actionObj)
          dispatch(delTodo(value))
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
</svg>

        </button>
        <p className='mt-4 text-xl'>
        {value}
        </p>
        </p>)
        }
        </p>
              <AddTodo />
    </div>
    </div>
  )
}

export default TodoList