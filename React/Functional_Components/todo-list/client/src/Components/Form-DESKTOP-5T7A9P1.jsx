import React, {useState} from "react";

const Form = (props) => {
  const {toDoList, setToDoList} = props

  const [task, setTask] = useState({
    id: '',
    task: '',
    isComplete: false
  })

  const [error, setError] = useState("")

  const handleValidations = (e) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const addTask = (e) => {
    e.preventDefault()
    if(task.task.length < 1) {
      setError("Can't leave input blank")
    }
    else {
      setError("")
      setToDoList(...toDoList, task)
      setTask({
        id: '',
        task: '',
        isComplete: false
      })
    }
  }

  return (
    <>
      
    </>
  )
}

export default Form