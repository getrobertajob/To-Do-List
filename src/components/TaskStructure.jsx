import React from "react";

// component to structure tasks
// holds task name, checkmark for completion with style for strike through text, and delete button
const TaskStructure = ({ index, task, toggleTaskCompletion, deleteTask }) => {
  return (
    <div>
      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(index)}
        />
        <button onClick={() => deleteTask(index)}>Delete</button>
      </p>
    </div>
  );
};

export default TaskStructure;
