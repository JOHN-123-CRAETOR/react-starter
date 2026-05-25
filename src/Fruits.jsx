import React, {use, useState} from 'react';

function Fruits(){

    const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFruit(){
        const newFruit = document.getElementById("inputFruit").value;
        document.getElementById("inputFruit").value = "";
        setFruits(f => [...f, newFruit]);
    }
    function handleRemoveFruit(index){
        setFruits(fruits.filter((_, i)=> i !== index));
    }

return(<div>
        <h2>List of Fruits</h2>
        <ul>
            {fruits.map((fruit, index) => <li key={index} onClick={() => handleRemoveFruit(index)}>{fruit}</li>)}
        </ul>
        <input type="text" id="inputFruit" placeholder="Enter fruit name"/>
        <button onClick={handleAddFruit}>Add fruit</button>
        </div>);
}
export default Fruits;