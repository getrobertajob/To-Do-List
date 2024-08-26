import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  // declaring tasks and the default with useState
  const [tasks, setTasks] = useState([]);

  // adds new task to the TaskList
  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  // changes the checkmark for individual tasks
  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task))
    );
  };

  // delete individual tasks
  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };

  return (
    <div className="mainContainer">
      <div>
        <AddTaskForm 
          addTask={addTask} 
        />
        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
