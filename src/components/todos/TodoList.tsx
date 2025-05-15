import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'

export default function TodoList() {
  const todos = useTodoStore(state => state.todos)
  const fetchTodos = useTodoStore(state => state.fetchTodos)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  )
}
