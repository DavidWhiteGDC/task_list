import React, { useEffect, useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskManager from '../Services/TaskManager';
import { Container, Grid, Paper, Typography } from '@mui/material';

const ToDoWrapper = () => {
  const [taskList, setTaskList] = useState([]);
  const taskManager = new TaskManager();

  useEffect(() => {
    const tasks = taskManager.getTasks();
    setTaskList(tasks);
  }, [taskManager]);

  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          To-Do List
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TaskInput />
          </Grid>
          <Grid item xs={12}>
            <TaskList tasks={taskList} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ToDoWrapper;
