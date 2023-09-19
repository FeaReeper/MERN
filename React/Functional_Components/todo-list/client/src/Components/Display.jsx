import React, { useState } from "react";

const Display = (props) => {
  const { toDoList, handleCompleted, handleDelete } = props;

  const handleCheckBox = (e, targetId) => {
    handleCompleted(e, targetId);
  };

  return toDoList.map((task) => (
    <div className="w-50 card mx-auto mb-3 p-3" key={task.id}>
      <div className={`mb-3 d-flex justify-content-center align-items-center gap-3 ${task.isCompleted ? 'text-decoration-line-through' : ''}`}>
        <p className="h3">{task.task}</p>
      </div>
      <div className="d-flex justify-content-around card-body ">
        <div className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            checked={task.isCompleted}
            id={task.id}
            onChange={(e) => handleCheckBox(e, task.id)}
          />
          <label htmlFor={task.id} className=''>Complete </label>
        </div>
        <button onClick={() => handleDelete(task.id)}><i className="bi bi-trash3"></i></button>
      </div>
    </div>
  ));
};

export default Display;
