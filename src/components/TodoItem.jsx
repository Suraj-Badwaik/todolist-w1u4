import React  from 'react';
import { useState } from "react";
import styles from "./todo.module.css";


const TodoItem = ({todo, onDelete}) => {

    const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

    return (
        <div className={styles.todo} key={todo.id}>
            <div>{todo.value}</div>
            <input className={styles.checked} type="radio" checked={isCompleted} onChange={(e) => {
                setIsCompleted(e.target.checked);
            }}/>

            {/* <button onClick={() => onDelete(todo.id)}>Delete</button> */}
        </div>
    )
}

export default TodoItem;