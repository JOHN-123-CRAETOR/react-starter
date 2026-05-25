import TaskCard from './TaskCard.jsx';

function TaskList(props){

    return(<div 
        style={{border: "none", 
                borderWidth: "100%",
                boxShadow: "10px 12px 100px hsla(10, 50%, 90%)",
                margin: "25px auto",
                width: "450px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "20px",
                padding: "24px",
                fontFamily: "poppins, sans-serif"                       
                }}>

            <p style={{ textAlign: "center", 
                color: "white", 
                fontWeight: "bold", 
                fontSize: "2rem" 
                }}
                onClick={props.onEdit}
                >
                {props.task.taskTitle}
                </p>

                <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.12)",
                    paddingInline: "10px",
                    borderRadius: "10px",
                    backdropFilter: "blur(8px)",
                }}
                >

                <p>
                    <span style={{color: "white"}}>Priority</span>

                    <span
                    style={{
                        color: props.task.priority === "Low" ? "red" : "green"
                    }}
                    ><br />
                    {props.task.priority}
                    </span>
                </p>

                <TaskCard
                    key={props.id}
                    task={props.task}
                    onDelete={props.onDelete}
                    editingId={props.editingId}

                />
                </div>
            
           </div>);
}
export default TaskList;