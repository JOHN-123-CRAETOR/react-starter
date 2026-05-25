import React, {useState} from 'react';
function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }    
    }
    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }
    function moveTaskUp(index){
        if(index > 0){
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]
        setTasks(updatedTask);
        }   
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }  
    }
    return(<div>
            <h1 className="to-do-list">To-Do-List</h1>
            <input type="text" value={newTask} placeholder="Enter a task..." onChange={handleInputChange}/>
            <button onClick={addTask}
                    className="add-btn">Add</button>
            <ol>
                {tasks.map((task, index) => <li key={index}><span className="text">{task}</span><button onClick={() => deleteTask(index)} className="delete-button">Delete</button><button onClick={() => moveTaskUp(index)} className="move-button">👆</button><button onClick={() => moveTaskDown(index)} className="move-button">👇</button></li>)}
            </ol>
           </div>);
}
export default ToDoList;