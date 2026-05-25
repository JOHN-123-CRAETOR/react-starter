import React, {useState} from 'react';

function MyComponent(){

const [name, setName] = useState("John");
const updateName = () => {
    setName("Paul");
}

const [age, setAge] = useState(0);
const incrementAge = () => {
    setAge(age + 1);
}


const [isEmployed, setIsEmployed] = useState(false);
const toggleIsEmployed = () => {
    setIsEmployed(!isEmployed);
}

return(<>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button><br></br>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button><br></br>
        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleIsEmployed}>Toggle Employed</button>
       </>);

}
export default MyComponent;