import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id)
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p1 className="center">You have no todo's list, yay! </p1>
  );
  return <div className="todos collection">{todoList}</div>;
};
export default Todos;
