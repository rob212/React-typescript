import React, { useRef } from "react";

import "./NewTodo.css";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (textInputRef.current) {
      const text = textInputRef.current.value;
      const textInputElement = document.getElementById(
        "todo-text"
      ) as HTMLInputElement;
      if (textInputElement) {
        textInputElement.value = '';
      }
      props.onAddTodo(text);
    }
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
