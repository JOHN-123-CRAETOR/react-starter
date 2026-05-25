import TaskCard from '../components/TaskCard.jsx';


function TaskList(props){


    return(<div>
            <div onClick={props.onEdit}>
                {
                props.editing
                ? 
                <>
                <input 
                value={props.editText}
                onChange={(e) => props.setEditText(e.target.value)}/>
                <button
                onClick={props.onSave}
                >
                    Save
                </button>
                </>
                : <p>{props.title}</p>
                }
            </div>

            <small>
                {props.priority}
            </small>

            <TaskCard 
            task={props.task}
            id={props.id}
            onDelete={props.onDelete}
            />
           </div>);
}
export default TaskList;