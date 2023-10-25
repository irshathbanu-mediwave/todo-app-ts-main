import { ITodo } from "../types";
import "../App.css";
import Edit from "./EditTodo";
interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  handledelete: (id: Number) => void;
  handleedit: (id: Number) => void;
  handlesavebtn: (num: Number, values: string) => void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  extraCss,
  handledelete,
  handleedit,
  handlesavebtn,
}) => {
  return (
    <div className="add-task">
      <h1> Task-list</h1>
      {todos.map((t) => (
        <div className={extraCss} key={t.id.toString()}>
           {t.isEdit ? (
            <>
              <Edit todos={t}handlesavebtn ={ handlesavebtn} />
            </>
          ) : (
            <p>
              <input type="checkbox" />
              {t.text}
              <button onClick={() =>handledelete (t.id)}>delete</button>
              <button onClick={() => handleedit(t.id)}>Edit</button>
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
{/* <p>
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
</p> */}