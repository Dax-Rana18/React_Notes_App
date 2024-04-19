import React, { useState } from 'react';
import Card from '@mui/material/Card';
import AddTaskButton from './AddButton';

const Notess = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    setTasks(prevTasks => [...prevTasks, <TaskCard key={prevTasks.length} />]);
  }

  const handleDeleteTask = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index)); // Remove the task at the specified index
  }

  const TaskCard = ({ index }) => {
    const [taskText, setTaskText] = useState(""); // State to manage the text of the task

    const handleTaskInputChange = (event) => {
      setTaskText(event.target.value); // Update the task text when input changes
    };

    return (
      <Card style={{
        marginTop: "30px",
        padding: "10px",
        width: "200px",
        backgroundColor: "#98DDCA",
        textAlign: "center",
        position: "relative",
        justifyContent: "center"
      }}>
        <input
          type="text"
          value={taskText}
          onChange={handleTaskInputChange}
          style={{
            color: "black",
            border: "none",
            background: "none",
            width: "100%",
            textAlign: "center",
            outline: "none" // Remove outline on focus
          }}
          placeholder="Add a task..."
        />
        <button onClick={() => handleDeleteTask(index)}>Delete</button>
      </Card>
    );
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <TaskCard index={index} />
        </div>
      ))}
      <AddTaskButton onAddTask={handleAddTask} />
    </div>
  );
}

export default Notess;
