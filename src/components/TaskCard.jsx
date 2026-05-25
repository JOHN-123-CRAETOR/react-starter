


function TaskCard(props){


    return(<div>
            <button
            onClick={props.onDelete}
            >
                Delete
            </button>
           </div>);
}
export default TaskCard;