import React, { useState } from "react";
import { addTodo } from "../store/reducers/todoSlice";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const dispatch = useDispatch();

  const onSubmitForm = (event) => {
    event.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="title"
          onChange={onChangeTitle}
          value={title}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoForm;
