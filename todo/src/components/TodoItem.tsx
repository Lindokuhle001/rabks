import { Todo } from "../types";

type TodoItemProps = {
todoItem:Todo,
handleChecked:(id:string)=> void,
handleDelete:(id:string)=> void;

}

function TodoItem( {todoItem,handleChecked,handleDelete }:TodoItemProps) {


  return (
    <div>
      <input
        onChange={() => handleChecked(todoItem.id)}
        id={todoItem.id}
        type="checkbox"
        checked={todoItem.completed}
      />
      <div className="todoTitle">{todoItem.title}</div>
      <button onClick={() => handleDelete(todoItem.id)} className="deleteTodo">
        delete
      </button>
    </div>
  );
}

export default TodoItem;
