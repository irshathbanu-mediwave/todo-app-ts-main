import { ITodo } from "../types";
import "../App.css";

interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  handledelete: (id: Number) => void;
  handleedit: (id: Number) => void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  extraCss,
  handledelete,
  handleedit,
}) => {
  return (
    <div className="add-task">
      <h1> Task-list</h1>
      {todos.map((t) => (
        <div className={extraCss} key={t.id.toString()}>
          <input type="checkbox" />
          {t.text}
          <button
            onClick={() => {
              handledelete(t.id);
            }}
          >
            Delete
          </button>
          <button onClick={() => handleedit(t.id)}> edit</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
{
  /* <ul className={extraCss}>
{todos.map((t) => (
  <li key={t.id.toString()}>{t.text}</li>
))}
</ul> */
}
