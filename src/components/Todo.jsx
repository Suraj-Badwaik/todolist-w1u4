import React, { useState } from "react";
import styles from "./todo.module.css";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onDelete = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>
      <div className={styles.firstDiv}>
        <input
          placeholder="Write Something"
          className={styles.inputBox}
          value={newTodo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          className={styles.btn1}
          onClick={() => {
            setTodos([...todos, { id: Date.now(), value: newTodo }]);
            setTodo("");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Todo;
