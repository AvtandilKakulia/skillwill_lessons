import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../store/todo/todo.actions'
import { Link } from 'react-router'

const CreateTodoPage = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(addTodoAction(value))
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button>Submit</button>
      <br /> <br />
      <Link to={'/'}>To List</Link>
    </form>
  )
}

export default CreateTodoPage