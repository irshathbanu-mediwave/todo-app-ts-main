import { useState } from "react";
import { ITodo } from "../types";

interface IEdit {
  todos: ITodo;
  handlesavebtn: (num: Number, texts: string) => void;
}
const Edit: React.FC<IEdit> = ({ handlesavebtn,todos}) => {
  const [values, SeTvalue] = useState(todos.text);
  function onhandlesavebtn(e: React.FormEvent<HTMLFormElement>,values:string,id:Number)
  { e.preventDefault()
    
    handlesavebtn(values,id);
    
  }
    
  
  return (
    <div className="editform">
      <form onSubmit={(e)=>onhandlesavebtn(e,values,todos.id)
      }>
        <input
          type="text"
          value={values}
          onChange={(e) => SeTvalue(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default Edit;
