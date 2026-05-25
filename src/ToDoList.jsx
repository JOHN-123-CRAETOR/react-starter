import React, {useState} from 'react';

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
        

    }
    function handleDeleteTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }
    function handleMoveUp(index){
        if(index > 0){
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]
        setTasks(updatedTask);
        } 
    }
    function handleMoveDown(index){
        if(index < tasks.length - 1){
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
        setTasks(updatedTask);
        }
    }
    
    return(<div>
        <h1>To Do List</h1>
        <div>
            <ol>
                {tasks.map((task, index) => <li key={index}>{task}<button onClick={() => handleDeleteTask(index)}>Delete</button><button onClick={() => handleMoveUp(index)}>up</button><button onClick={() => handleMoveDown(index)}>Down</button></li>)}
            </ol>
            <input value={newTask} onChange={handleInputChange} type="text"/>
            <button onClick={addTask}>Add Button</button>
        </div>
           </div>);
}
export default ToDoList;