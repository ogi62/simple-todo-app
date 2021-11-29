import Button from "../UI/Button"
import classes from "./TodoItem.module.css"

const TodoItem = ({text,clickToToggle,clickToDelete,complete}) => {
    return (
        <div style={{ backgroundColor: complete ? "green" : "rgb(160, 160, 160)" }} className={classes.container}>
            <span className={classes.text}>
                {text}
            </span>
            <div>
                <Button text="Toggle" color="green" onClick={clickToToggle} />
                <Button text="Deltete" color="red" onClick={clickToDelete} />
            </div>
        </div>
    )
}

export default TodoItem
