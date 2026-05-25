function TaskCard(props){

    return(
        <div>

            <button
                onClick={props.onDelete}
                style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "10px",
                    padding: "10px",
                    border: "none"
                }}
            >
                Delete
            </button>

            {props.task.id === props.editingId ? (
                <input defaultValue={props.task.taskTitle} />
            ) : (
                <p>{props.task.taskTitle}</p>
            )}

        </div>
    );
}

export default TaskCard;