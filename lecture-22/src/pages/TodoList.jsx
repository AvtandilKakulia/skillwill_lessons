import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { counterSelector, decrement, increment } from '../store/counter/counter.slice'

const TodoListPage = () => {
  const { todoList } = useSelector((state) => state.todo)
  const  count  = useSelector(counterSelector)
  const dispatch = useDispatch()

  const incrementCount = () => {
    dispatch(increment())
  }

  const decrementCount = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h3>TodoList Page</h3>
      {todoList.map((item) => <p key={item}>{item}</p>)}

      <Link to={'/create'}>To Create</Link>
      <br />
      <div>
        <h3>{count}</h3>
        <button onClick={incrementCount}>increment</button>
        <button onClick={decrementCount}>decrement</button>
      </div>
    </div>
  )
}

export default TodoListPage