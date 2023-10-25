import { useState } from "react";
import { ITodo } from "./types";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";



function App() {
 
  const [todos, setTodos] = useState<ITodo[]>([]);


  function onTodoAdd(str: string) {
    const obj: ITodo = {
      text: str,
      id: new Date().getTime(),
      isEdit:false,
      isDone:false
    };
    setTodos((prev) => [...prev, obj]);
  }
  function onhandledelete(id: Number) {
    const array = todos.filter((t) => t.id !== id);
    setTodos(array);
  }
  function onhandleedit(id: Number) {
    const find = todos.findIndex((t) => t.id === id);
    console.log(find);
    const changetodo=[...todos]
    changetodo[find]={
      ...changetodo[find],
       isEdit:true
    }
    setTodos(changetodo)
    console.log(changetodo)

  }
  function onhandlesave(values:string,id: Number) {
    const find = todos.findIndex((t) => t.id === id);
    console.log(find);
    const changetodo=[...todos]
    changetodo[find]={
      ...changetodo[find],
      text:values,
       isEdit:false
    }
    setTodos(changetodo)
    console.log(changetodo)

  }

  return (
    <div>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList
        todos={todos}
        extraCss="text-bold"
        handledelete={onhandledelete}
        handleedit={onhandleedit}
        
      />
    </div>
  );
}

export default App;