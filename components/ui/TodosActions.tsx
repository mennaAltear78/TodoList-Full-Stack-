import React, { useState } from 'react'
import { Button } from './button'
import { deleteTodoAction } from '@/actions/todo.actions'
import Spinner from './Spinner'
import {  Trash } from 'lucide-react'
import { EditTodoForm } from './EditTodoForm'
import { Todo } from '@/interfaces/TodoInterface'

function TodosActions({todo}:{todo:Todo},userId:String|null) {
    const [isloading, setIsLoading] = useState<boolean >(false); // Track loading per todo

  const deleteTodo = async (id: string) => {
    if (!id) {
      console.error("Invalid todo ID:", id);
      return;
    }
    setIsLoading(true);
    try {
      await deleteTodoAction({ id });
    } catch (error) {
      console.error("Error deleting todo:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
   <div className="flex justify-center"> 
   <EditTodoForm todo={todo} userId={userId}/>
                <Button
                className='w-10 bg-red-500 text-white hover:bg-red-200 '
                //   onClick={() => deleteTodo(todo.id)}
                  onClick={()=>deleteTodo(todo.id)}
                  disabled={isloading}
                >
                  {/* {isloading? <Spinner /> : <Trash className="h-4 w-4" />} */}
                  {isloading? <Spinner /> : <Trash className="h-4 w-4" />}
                </Button>
                 
              </div>
  )
}

export default TodosActions