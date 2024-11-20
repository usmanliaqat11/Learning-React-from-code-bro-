//how to style react component with css


// 1: external
// 2: Module
// 3: inline
import styles from './Button.module.css'

function Button()
{
    return(
        <button className={styles.button}>click me</button>
    );

}

export default Button