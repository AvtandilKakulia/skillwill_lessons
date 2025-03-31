import { BrowserRouter, Route, Routes } from 'react-router'
import CreateTodoPage from '../pages/CreateTodo'
import TodoListPage from '../pages/TodoList'
import TodosPage from '../pages/TodosPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<TodoListPage />} path='/' />
                <Route element={<CreateTodoPage />} path='/create' />
                <Route element={<TodosPage />} path='/todos' />
            </Routes>
        </BrowserRouter>
    )
}

export default Router