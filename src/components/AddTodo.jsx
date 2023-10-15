import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {addTodo} from '../slices/todoslice';

function AddTodo() {
    const {register, handleSubmit, reset, formState:{errors}} = useForm();
    const dispatch = useDispatch()
    const onFormSubmit = (data) =>{
        let actionObj = addTodo(data.todo)
        dispatch(actionObj)
        reset();
    }
  return (
    <div>
    <div className="mt-10"> 
    <form onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs"
        {...register("todo", {required:true})}/>
        {errors.todo?.type ==="required"&& <p className='text-red-500'>*Todo cannot be empty</p>}
        <br />
        <button type="submit" className='class="btn btn-accent btn-outline" rounded-lg py-1 px-4 mt-2'>Add</button>
    </form>
    </div>
    </div>
    
  )
}

export default AddTodo;
