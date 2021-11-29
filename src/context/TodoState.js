import todoContext from "./todo-context";
import { useReducer } from "react";
import todoReducer from "./todo-reducer";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todo-actions";

const TodoState = (props) => {

    const initialState = {
        todos: [], // { id: '12', text: 'Task text', complete: false }
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = (todo) => {
        dispatch({
            type:ADD_TODO,
            payload:todo,
        })
    }

    const toggleTodo = (todoID) => {
        dispatch({
            type:TOGGLE_TODO,
            payload: todoID,
        })
    }

    const deleteTodo = (todoID) => {
        dispatch({
            type:DELETE_TODO,
            payload: todoID,
        })
    }


    return (
        <todoContext.Provider
        value={{
            todos: state.todos,
            addTodo,
            toggleTodo,
            deleteTodo
        }}
        >
            {props.children}
        </todoContext.Provider>
    )
}

export default TodoState
