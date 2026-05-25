

function Card(props){    

    return(
        <div className="card">
            <img 
            class="card-image"
            src={props.picture}  
            alt="profile picture"></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.description}</p>
        </div>
    )
}

export default Card;