

function TaskForm(props){


    return(<div style={{display: "flex", justifyContent: "center"}}>
            <input 
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
            />
            <select value={props.priority}
                    onChange = {(e) => props.setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={props.onAdd}>
                ADD
            </button>
           </div>)
}
export default TaskForm;