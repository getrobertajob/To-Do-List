import React, { useState } from 'react';

// component to add new tasks
const AddTaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };
  
  // change handle for the add button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  // form to gather user input for task name
  // also to hold add button as a submit
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={handleChange}
      />
      <p>
        <button 
          type="submit" 
          className='addBTN' 
        >
          Add
        </button>
      </p>
    </form>
  );
};

export default AddTaskForm;
