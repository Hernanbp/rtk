import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <ul>
      {todos.map(({ id, name, date }) => (
        <div key={id}>
          <TodoItem id={id} name={name} date={date} />
        </div>
      ))}
    </ul>
  );
};
