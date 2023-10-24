import { useState } from "react";


interface IAddTodo {
  onTodoAdd: (str: string) => void;
}

const AddTodo: React.FC<IAddTodo> = ({ onTodoAdd }) => {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onTodoAdd(text);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-add">
        <h1> My todo</h1>
        <label> Enter your task</label>
        <input
          type="text"
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
