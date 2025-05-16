import { Link } from 'react-router'
import TodoCreator from '@/components/todos/TodoCreator'
import TodoList from '@/components/todos/TodoList'

export default function Todos() {
  return (
    <>
      <Link to="/">Main</Link>
      <TodoCreator />
      <TodoList />
    </>
  )
}
