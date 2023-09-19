import React, { useState } from "react";

const Form = (props) => {
  const { toDoList, setToDoList } = props;

  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    task: "",
    isComplete: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task.task.length < 1) {
      setError("Can't leave input blank");
    } else {
      setError("");
      setToDoList([...toDoList, task]);
      setTask({
        id: crypto.randomUUID(),
        task: "",
        isComplete: false,
      });
    }
  };

  return (
    <div className="px-4 py-5 my-2 text-center">
      <form onSubmit={addTask}>
        <label htmlFor="task">Task:</label>
        <input
          className="m-3 w-25"
          type="text"
          id="task"
          name="task"
          value={task.task}
          onChange={handleChange}
        />
        <button type="submit"><i className="bi bi-plus-square"></i></button>
      </form>
    </div>
  );
};

export default Form;
