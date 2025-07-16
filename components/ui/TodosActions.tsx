import React, { useState } from 'react'
import { Button } from './button'
import { deleteTodoAction } from '@/actions/todo.actions'
import Spinner from './Spinner'
import { Trash } from 'lucide-react'
import { EditTodoForm } from './EditTodoForm'
import { Todo } from '@/interfaces/TodoInterface'

function TodosActions({ todo, userId }: { todo: Todo; userId: string | null }) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const deleteTodo = async (id: string) => {
    if (!id) {
      console.error("Invalid todo ID:", id)
      return
    }
    setIsLoading(true)
    try {
      await deleteTodoAction({ id })
    } catch (error) {
      console.error("Error deleting todo:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center">
      <EditTodoForm todo={todo} userId={userId} />
      <Button
        className="w-10 bg-red-500 text-white hover:bg-red-200"
        onClick={() => deleteTodo(todo.id)}
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : <Trash className="h-4 w-4" />}
      </Button>
    </div>
  )
}

export default TodosActions
