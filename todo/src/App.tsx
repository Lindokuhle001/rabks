import { useState } from "react";
import "./App.css";

type Todo = {
  title: string;
  completed: boolean;
  id: string;
};

function App() {
  const [todo, setTodo] = useState<Todo>({
    title: "",
    completed: false,
    id: "wewrwere",
  });
  const [todos, setTodos] = useState<Todo[]>([
    {
      title: "",
      completed: false,
      id: "wewrwere",
    },
  ]);

  return (
    <div className="app">
      <h1>todo list</h1>

      <section>
        <label htmlFor="input">add todo</label>

        <input id="todoInput" type="text" />

        <button id="addTodo">add</button>
      </section>

      <section id="todos">
        <h2>todos</h2>

        <ul>
          {todos.map((todoItem) => (
            <li className="todoItem" key={todoItem.id}>
              <input type="checkbox" />
              <div className="todoTitle">{todoItem.title}</div>

              <button className="deleteTodo">delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
