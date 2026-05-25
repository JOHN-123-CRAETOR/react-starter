import React, {useState} from 'react';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';

function TaskApp(){

const [tasks, setTask] = useState([]);
const [title, setTitle] = useState("");
const [priority, setPriority] = useState("Low");
const [editingId, setEditingId] = useState(null);
const [editingContent, setEditingContent] = useState("");

function handleAddTask(){

    const newTask = {
        id: Date.now(),
        taskTitle: title,
        priority: priority
    } 

    setTask([...tasks, newTask]);
    setTitle("");
    setPriority("Low");
}

function handleDeleteTask(id){
    setTask(prev => prev.filter(task => task.id !== id));
}

function handleEdit(id){
    setEditingId(id);
    setEditingContent("");
    
}

    return(<div>
            <TaskForm 
            title={title}
            setTitle={setTitle}
            priority={priority}
            setPriority={setPriority}
            onAdd={handleAddTask}
            /><br />
            
            {tasks.map(task => (
            <TaskList 
            key={task.id}
            task={task}
            editingId={editingId}
            onDelete={() => handleDeleteTask(task.id)}
            onEdit={() => handleEdit(task.id)}
            />
            ))}
           </div>
        );
    }
export default TaskApp;