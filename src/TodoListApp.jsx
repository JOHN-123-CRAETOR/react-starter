import React, {useState, useEffect} from 'react';

function TodoListApp(){

    const [taskName, setTaskName] = useState("");
    const [task, setTask] = useState([]);
    const [filter, setFilter] = useState("all");
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            setTask(JSON.parse(savedTasks));
        }
    }, []);

    // 🔥 Save to localStorage whenever task changes
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task));
    }, [task]);

    function handleTask(){
        if(taskName.trim() === ""){
           return;
        }

        const isDuplicate = task.some((t) => t.taskName.toLowerCase().trim() === taskName.toLowerCase().trim());

        if(isDuplicate){
             alert(`The task '${taskName}' already exist`)
            return;
        }

        const newTask = {
            id: Date.now(),
            taskName,
            completed: false
        }

        setTask(prev => [...prev, newTask])
        setTaskName("");
    }

    function handleDelete(id){
        setTask(prev => prev.filter((t) => t.id !== id))
    }

    function handleDeleteAll(){
        setTask([]);
    }

    function handleCompleted(id){
        setTask(prev => prev.map((t) => t.id === id ? {...t, completed : !t.completed} : t));
    }

    const filteredTask = task.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "active") return !t.completed;
    return true;})

    function handleEdit(id, currentText){

        setEditingId(id);
        setEditText(currentText);
    }

    function handleSave(id){
        if(editText.trim() === ""){
            return;
        }

        setTask((prev) => prev.map((t) => t.id === id ?
    {...t, taskName: editText} : t));

    setEditingId(null);
    setEditText("");
    }

    function handleCancel(){
        setEditText("");
        setEditingId(null);
    }

    return(<div>
    <div style={{display: "flex", justifyContent: "center", margin: "5px"}}>
            <input 
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Input a task..."
            style={{padding: "5px", marginRight: "5px", width: "30%"}}
            />
            <button 
            onClick={handleTask}
            style={{marginRight: "5px", padding: "5px 10px", backgroundColor: "#26e93a", border: "none", borderRadius: "5px", color: "white"}}
            >
                Add
            </button>
            <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
        </div>

            {task.length === 0 ? (<p style={{color: "#787575", display: "flex", justifyContent: "center"}}>No task yet...</p>) : (<div>
                <table
                    border="1" cellPadding="10" 
                    style={{marginTop: "20px", textAlign: "center", width: "100%", borderRadius: "10px"}}
                    
                    >
                <thead>
                    <tr style={{backgroundColor: "#090202", color: "white",}}>
                        <td>ID</td>
                        <td>Task</td>
                        <td>Delete</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredTask.map((t, index) => <tr key={t.id}
                    style={{backgroundColor: index % 2 === 0 ? "#93999c" : "#d5d5d394"}}>
                        <td>{index + 1}</td>
                        <td>
                        {editingId === t.id ? (<input 
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        />) : (
                        <span
                        style={{
                            textDecoration: t.completed ? "line-through" : "none", 
                            color: t.completed ? "#5d5a5a" : "black",
                            cursor: "pointer",
                            
                        }}
                        onDoubleClick={() => handleEdit(t.id, t.taskName)}
                        >
                        {t.taskName}
                        </span>
                        )}
                        </td>
                        
                        <td>
                            <button
                                style={{backgroundColor: "#ed0a0a", borderRadius: "5px", border: "none", padding: "5px 7px", color: "white"}}
                                onClick={() => handleDelete(t.id)}>Delete
                            </button>
                        </td> 
                        <td>{t.completed ? "completed" : "Active"}</td>
                        <td>
                            {editingId === t.id ? (
                                <div>
                                    <button onClick={() => handleSave(t.id)}>Save</button>
                                    <button onClick={handleCancel}>cancel</button>
                                </div>
                                
                            ) : (
                                <button 
                                onClick={() => handleCompleted(t.id)}
                                style={{backgroundColor: "#433e3e", borderRadius: "4px", border: "none", color: "white", padding: "4px 8px"}}
                                >{t.completed ? "undo" : "completed"}
                                </button>
                            )} 
                        
                        </td>
                   </tr>)}
                </tbody>
            </table>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button style={{marginTop: "10px", backgroundColor: "#9b1414e7", border: "none", padding: "5px 10px", borderRadius: "4px", color: "white"}} onClick={handleDeleteAll}>Clear All</button>
            </div>
             </div>)}
           </div>);
}
export default TodoListApp; 