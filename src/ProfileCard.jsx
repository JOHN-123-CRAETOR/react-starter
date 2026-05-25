


function ProfileCard(props){


    return(<div
             style=
            {{
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#c6c4c4",
                padding: "20px",
                width: "20rem",
                textAlign: "center",
                marginBottom: "10px"
            }}
            >
            <p>{props.username}</p>
            <p>{props.bio}</p>
            <p>{props.followers}</p>
            <img src={props.image} width="200px"/>
           </div>);
}
export default ProfileCard;