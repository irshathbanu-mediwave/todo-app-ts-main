import { useState } from "react";
import { ITodo } from "../types";

interface IEdit {
  item: ITodo[];
  handlesavebtn: (num: Number, texts: string) => void;
}
const Edit: React.FC<IEdit> = ({ handlesavebtn }) => {
  const [values, SeTvalue] = useState("");
  function onhandlesavebtn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handlesavebtn(values);
    SeTvalue("");
  }
  return (
    <div className="editform">
      <form onSubmit={onhandlesavebtn}>
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
