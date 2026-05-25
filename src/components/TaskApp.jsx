import TaskList from '../components/TaskList.jsx';
import TaskForm from '../components/TaskForm.jsx';
import React, {useState} from 'react';


function TaskApp(){

    const [tasks, setTask] = useState([]);
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("Low");
    const [editText, setEditText] = useState("");


    function handleAddTask(){
        setTitle("");
        setPriority("Low");

        const newTask = {
            id: Date.now(),
            title: title,
            priority: priority,
            editing: false
        }

        setTask([...tasks, newTask]);
    }

    function handleDeleteTask(id){
        setTask(prev => prev.filter(task => task.id !== id));
    }

    function handleEdit(id){

    setTask(prev =>
      prev.map(task =>

         task.id === id
         ? {...task, editing: true}
         : {...task, editing: false}
      )

   );

   setEditText(tasks.find(task => 
        task.id === id
    ).title
    )};

function handleSave(id){
    setTask( prev => prev.map(task => 
        task.id === id ? 
        {...task, editing: false, title: editText} : 
        task
    ))

    setEditText("");
}

    return(<div>
            <TaskForm 
            title={title}
            setTitle={setTitle}
            priority={priority}
            setPriority={setPriority}
            onAdd={handleAddTask}
            />

            <br />
            
            {tasks.map(task =>
            <TaskList 
            key={task.id}
            id={task.id}
            title={task.title}
            editing={task.editing}
            priority={task.priority}
            onDelete={() => handleDeleteTask(task.id)}
            onEdit={() => handleEdit(task.id)}
            onSave={() => handleSave(task.id)}
            editText={editText}
            setEditText={setEditText}
            />
            )}
           </div>);
}
export default TaskApp;