import { useState, useEffect } from "react";
import { ITodo } from "./types";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function onTodoAdd(str: string) {
    const obj: ITodo = {
      text: str,
      id: new Date().getTime(),
      isEdit: false,
      isDone: false,
    };
    setTodos((prev) => [...prev, obj]);
  }
  function onhandledelete(id: Number) {
    const array = todos.filter((t) => t.id !== id);
    console.log(array);
    setTodos(array);
  }
  function onhandleedit(id: Number) {
    const find = todos.findIndex((t) => t.id === id);
    console.log(find);
    const changetodo = [...todos];
    changetodo[find] = {
      ...changetodo[find],
      isEdit: true,
    };
    setTodos(changetodo);
    console.log(changetodo);
  }
  function onhandlesave(values: string, id: Number) {
    const find = todos.findIndex((t) => t.id === id);
    console.log(find);
    const changetodo = [...todos];
    changetodo[find] = {
      ...changetodo[find],
      text: values,
      isEdit: false,
    };
    setTodos(changetodo);
    console.log(changetodo);
  }
  function getstorage() {
    const gettodo = localStorage.getItem("Task-list");
    if (gettodo) {
      return JSON.parse(gettodo);
    }
    return [];
  }
  function savestoreage(){
    localStorage.setItem("Task-list",JSON.stringify())
  }
  return (
    <div className="container">
      <h1>My todos </h1>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList
        todos={todos}
        extraCss="Todo-item"
        handledelete={onhandledelete}
        handleedit={onhandleedit}
        handlesavebtn={onhandlesave}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
