import { useState,useContext } from "react"
import todoContext from "../../context/todo-context"
import Button from "../UI/Button"
import classes from "./TodoInput.module.css"

const TodoInput = () => {

    const [input, setInput] = useState("")
    //useContext
    const {addTodo} = useContext(todoContext)

    const onChangeHandler = (e)=> {
        setInput(e.target.value)
    }

    const onSubmitHandle = (e) => {
        e.preventDefault()

        console.log(input);
        if(input.trim().length === 0 ) {
            return alert("Type some text")
        }

        // Make new todo object with useContext and useReducer
        const newTodo = {
            id: Math.random(),
            text: input,
            complete: false,
        }

        addTodo(newTodo)

        setInput("")
    }

    

    return (
        <div className={classes.form}>
            <form onSubmit={onSubmitHandle}>
                <label className={classes.form__label} htmlFor="task">Task</label>
                <input 
                type="text"
                name="task"
                placeholder="Enter a task"
                value={input}
                onChange={onChangeHandler}
                className={classes.form__input}
                />
                <Button text="Add Task" color="orange" type="submit"/>
            </form>
        </div>
    )
}

export default TodoInput
