import { useState } from "react";
import Form from "./Components/Form";
import Display from "./Components/Display";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const handleCompleted = (e, targetId) => {
    const modifiedList = [...toDoList].map((task) => {
      if (task.id === targetId) {
        task.isCompleted = e.target.checked;
      }
      return task;
    });
    setToDoList(modifiedList);
  };

  const handleDelete = (targetId) => {
    const updatedToDoList = [...toDoList].filter((task) => {
      return task.id !== targetId;
    });
    setToDoList(updatedToDoList)
  };

  return (
    <>
      <div>
        <h1 className="text-center mt-5">To-Do List</h1>
        <Form toDoList={toDoList} setToDoList={setToDoList} />
        <Display
          toDoList={toDoList}
          handleCompleted={handleCompleted}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
