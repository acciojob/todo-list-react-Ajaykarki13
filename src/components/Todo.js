
import { indexOf } from "cypress/types/lodash";
import React, {useState} from "react";
const Todo = () => {

    onst [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(-1);
    const [editTask, setEditTask] = useState("");
  
    const addTask = () => {
      setTasks([...tasks, newTask]);
      setNewTask("");
    };
  
    const deleteTask = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    };
  
    const startEditTask = (index, task) => {
      setEditIndex(index);
      setEditTask(task);
    };
  
    
    const saveEditTask = (index) => {
      
      const newTasks = [...tasks];
      newTasks[index] = editTask;
      setTasks(newTasks);
      setEditIndex(-1);
      setEditTask("");
    };
  
    return (
      <div>
        <h1>To-Do App</h1>
        <div className = 'add_tasks_section'>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        
        <div className='tasks_section'>
        
          {tasks.map((task, index) => (
            <div>
              {editIndex === index ? (
                <div className='save'>
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                  <button onClick={() => saveEditTask(index)}>Save</button>
                </div>
              ) : (
                <div className='edit'>
                  {task}
                  <button onClick={() => startEditTask(index, task)}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
}

export default Todo