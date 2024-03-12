import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import TaskManager from '../Services/TaskManager';

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');

  // initiate task manager from service folder to handle list crud operations
  const taskManager = new TaskManager();

  // Updates the input value for every keystroke
  const handleTaskInputChange = (event) => {
    setTaskName(event.target.value);
  };

  // Submission of new task to be created
  const handleSubmit = (event) => {
    event.preventDefault();
    taskManager.createTask(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={8}>
          <TextField
            id="task"
            label="Task"
            variant="outlined"
            fullWidth
            value={taskName}
            onChange={handleTaskInputChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button type="submit" variant="contained" fullWidth>
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskInput;
