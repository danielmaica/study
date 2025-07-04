import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDelition }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "10px solid #80227B", textDecorationLine: `line-through` } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
        
        <button
          className="remove-task-button"
          onClick={() => handleTaskDelition(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
    // <div className="task-container">{task.title}</div>
  );
};

export default Task;
