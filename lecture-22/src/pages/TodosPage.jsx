import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../store/todos/todos.thunks'

const TodosPage = () => {
    const dispatch = useDispatch()
    const { todos, loading, error } = useSelector((state) => state.todos)

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    if (loading) return <div>Loading . . . </div>
    if (error) return <div>{error}</div>

    return (
        <div>
            {todos.map(item => <div key={item._uuid}>{item.title}</div>)}
        </div>
    )
}

export default TodosPage