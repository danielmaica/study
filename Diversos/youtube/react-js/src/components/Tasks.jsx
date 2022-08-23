import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDelition }) => {
  console.log(tasks);
  return (
    <>
      {tasks.map((task) => (
      <Task
      key={task.id}
      task={task} 
      handleTaskClick={handleTaskClick}
      handleTaskDelition={handleTaskDelition} 
      />
      ))}
    </>
  ) 
};

export default Tasks;
