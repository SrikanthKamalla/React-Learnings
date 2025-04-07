import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
export default function Input() {
  let [todos, SetTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    SetTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    SetTodos(() => todos.filter((prevTodo) => prevTodo.id != id));
  };

  let markAsDoneAll = () => {
    SetTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    SetTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add Task</button>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecoration: "Line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
            <br />
            <br />
          </li>
        ))}
      </ol>
      <button onClick={markAsDoneAll}>Mark As Done All</button>
    </>
  );
}
