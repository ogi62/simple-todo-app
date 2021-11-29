import { useContext } from "react"
import todoContext from "../../context/todo-context"
import TodoItem from "./TodoItem"
import classes from "./TodoList.module.css"

const TodoList = () => {

    const { todos, toggleTodo, deleteTodo } = useContext(todoContext)

    return (
        <div className={classes.todo_list}>
            <h3>Todo List !</h3>
            <div>
                <ul>
                    {todos.map( (todo) => 
                    <TodoItem
                    key={todo.id}
                    text={todo.text}
                    complete={todo.complete}
                    clickToToggle={()=> toggleTodo(todo.id)}
                    clickToDelete={()=> deleteTodo(todo.id)}
                    />)}
                </ul>
            </div>
        </div>
    )
}

export default TodoList
