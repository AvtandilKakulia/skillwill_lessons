import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const TodoListPage = () => {
  const { todoList } = useSelector((state) => state.todo)

  return (
    <div>
      <h3>TodoList Page</h3>
      {todoList.map((item) => <p key={item}>{item}</p>)}
      <br /> <br />
      <Link to={'/create'}>To Create</Link>
    </div>
  )
}

export default TodoListPage