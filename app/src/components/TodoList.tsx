import { ITodo } from "../types";
import "../App.css";
import Edit from "./EditTodo";
interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  handledelete: (id: Number) => void;
  handleedit: (id: Number) => void;
  handlesavebtn: (num: Number, values: string) => void;
  setTodos: (updateItem: ITodo[]) => void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  extraCss,
  handledelete,
  handleedit,
  handlesavebtn,
  setTodos,
}) => {
  const handlecheckbox = (id: Number) => {
    const updateItem = todos.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          isDone: !t.isDone,
        };
      }
      return t;
    });
    setTodos(updateItem);
  };

  return (
    <div className="add-task">
      {todos.map((t) => (
        <div className={extraCss} key={t.id.toString()}>
          {t.isEdit ? (
            <>
              <Edit todos={t} handlesavebtn={handlesavebtn} />
            </>
          ) : (
            <p className={t.isDone ? "strike" : ""}>
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={() => handlecheckbox(t.id)}
              />
              {t.text}
              <button className="delete-btn" onClick={() => handledelete(t.id)}>
                Delete
              </button>
              <button className="edit-btn" onClick={() => handleedit(t.id)}>
                Edit
              </button>
            </p>
          )}
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
{
  /* <p>
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
</p> */
}
