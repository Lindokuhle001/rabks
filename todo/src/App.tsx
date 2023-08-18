import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { dummyTodoList } from "./data";
import { Todo } from "./types";

import TodoItem from "./components/TodoItem";



function App() {
  const [todos, setTodos] = useState<Todo[]>(dummyTodoList);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inputValue = inputRef.current?.value;

    if (inputValue) {
      const newTodo: Todo = {
        title: inputValue,
        completed: false,
        id: uuidv4(),
      };

      setTodos((currentTodos) => [...currentTodos, newTodo]);
      inputRef.current!.value = "";
    }
  }

  function handleDelete(todoId: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter(({ id }) => id !== todoId);
    });
  }

  function handleChecked(checkboxId: string) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === checkboxId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    });
  }


  return (
    <div className="app">
      <h1>Todo List</h1>

      <section className="addTodoSection">
        <form onSubmit={handleSubmit}>
          <label htmlFor="todoInput">Add todo</label>
          <input ref={inputRef} id="todoInput" type="text" />
          <button id="addTodo" type="submit">
            add
          </button>
        </form>
      </section>

      <section id="todos">
        <h2>Todos</h2>

        <ul>
          {todos.map((todoItem) => (
            <li className="todoItem" key={todoItem.id}>
              <TodoItem todoItem={todoItem} handleChecked={handleChecked} handleDelete={handleDelete}/>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
