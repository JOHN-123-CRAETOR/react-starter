


function TaskForm(props){


    return(<div>
            <input 
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
            placeholder="Enter title..."
            />
            <select
            value={props.priority}
            onChange={(e) => props.setPriority(e.target.value)}
            >
                <option>High</option>
                <option>Low</option>
            </select>
            <button
            onClick={props.onAdd}
            >
                Add Task
            </button>

           </div>);
}
export default TaskForm;