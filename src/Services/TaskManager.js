import Task from "../models/Task";

class TaskManager{


    constructor(){

        // Access local storage and recieve parse the incremting task id, and array of tasks
        this.nextTaskId = parseInt(localStorage.getItem('nextTaskId')||1);

        this.tasks= JSON.parse(localStorage.getItem('tasks')||'[]');
    }



   createTask(name){
// Creating a new task with the Task Class from the models folder
const task = new Task(this.nextTaskId++,name);

// pushing the task to the existing array of tasks
this.tasks.push(task);

// persisting the data to local storage
localStorage.setItem('nextTaskId',JSON.stringify(this.nextTaskId));

localStorage.setItem('tasks',JSON.stringify(this.tasks));

// returning tasks to repopulate screen

return task;
    }




    getTasks(){
        return this.tasks;
    }

deleteTask(deletedTask){

    console.log('Received id:', deletedTask.taskID);
  // Filter out the task with the specified id

  const filteredList = this.tasks.filter(task => task.id !== deletedTask.taskID);
  
  // Update this.tasks with the filtered list
  this.tasks = filteredList;
  
  // Update local storage with the filtered list
  localStorage.setItem('tasks', JSON.stringify(filteredList));

}



}

export default TaskManager