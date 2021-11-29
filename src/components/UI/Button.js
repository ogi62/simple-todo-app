import classes from "./Button.module.css"

const Button = ({text,type,color,onClick}) => {
    return (
        <button  onClick={onClick} className={classes.button} style={{backgroundColor: color || "white"}} type={type || "button"}>
            {text}
        </button>
    )
}

export default Button
