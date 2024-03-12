import React from 'react';
import DeleteTask from './DeleteTask';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@mui/material';


const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <React.Fragment key={task.id}>
          <ListItem button>
            <ListItemText primary={task.name} />
            <ListItemSecondaryAction>
             <DeleteTask taskID={task.id}/>
            </ListItemSecondaryAction>
          </ListItem>
          {index !== tasks.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default TaskList;
