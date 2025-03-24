import { BrowserRouter, Route, Routes } from 'react-router'
import CreateTodoPage from '../pages/CreateTodo'
import TodoListPage from '../pages/TodoList'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<TodoListPage />} path='/' />
                <Route element={<CreateTodoPage />} path='/create' />
            </Routes>
        </BrowserRouter>
    )
}

export default Router