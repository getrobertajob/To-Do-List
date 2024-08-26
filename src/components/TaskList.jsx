import React from 'react';
import Task from './TaskStructure';

// component to take in props with all parts of all tasks & store in array
const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  //declaring array to store all tasks
  const propsArray = [tasks, toggleTaskCompletion, deleteTask];

  // use map to cycle through the array when rendering them
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
