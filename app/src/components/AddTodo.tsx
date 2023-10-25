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
    <form className="form-container" onSubmit={handleSubmit}>
      <label> Enter your task</label>
      <input
        type="text"
        value={text}
        required
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
