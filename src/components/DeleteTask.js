import React from 'react';
import TaskManager from '../Services/TaskManager';
import { IconButton}  from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const DeleteTask = (taskID ) => {
  const taskManager = new TaskManager();

  const handleDelete = () => {
    taskManager.deleteTask(taskID);
  }

  return (
    <IconButton
      edge="end"
      aria-label="delete"
      onClick={handleDelete}
      color="error"
    >
 <DeleteIcon/>
    </IconButton>
  );
}

export default DeleteTask;
