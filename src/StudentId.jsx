

function StudentId(props){


    return(<div>
            <p>Name: {props.name}</p>
            <p>Hall of residence: {props.hall}</p>
            <p>Id no: {props.id}</p>
            <p>Course: {props.course}</p>
            <p>Age: {props.age}</p>
            <img src={props.image} width="200px"/>
           </div>);
}
export default StudentId;