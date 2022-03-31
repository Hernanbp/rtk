import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todosSlice";
import { format } from "date-fns";
import "./main.css";

export const Main = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log("field is empty");
    }
    dispatch(
      addTodo({
        todo: value,
        date: format(new Date(), "EEEE\thh:mm yyyy"),
      })
    );
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Agregar algo..."
      />
      <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
};
