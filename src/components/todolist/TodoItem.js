//import { useDispatch } from "react-redux";
import { removeTodo } from "../../features/todo/todosSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const TodoItem = ({ id, name, date }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(
      removeTodo({
        id: id,
      })
    );
  };

  return (
    <div className="todo">
      <li>
        <div
          className={isCompleted && "completed"}
          onClick={() => setIsCompleted(!isCompleted)}
        >
          <p>{name}</p>
          <p className="date">{date}</p>
        </div>
        <button onClick={() => deleteTodo()}>Remove</button>
      </li>
    </div>
  );
};
