import React, {useState} from 'react';

function Foods(){

    const [foods, setFoods] = useState(["Mango", "Banana", "Apple", "Orange", "Coconut"]);

    const handleAddFood = () => {
        const newFood = document.getElementById("inputFruit").value;
        document.getElementById("inputFruit").value = "";
        setFoods(f => [...f, newFood]);
    }
    const handleRemoveFoods = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return( <div>
            <h2>List of foods</h2>
            <div>
                <ul>{foods.map((food, index) => <li key={food} onClick={() => handleRemoveFoods(index)}>{food}</li>)}</ul>
            </div>
            <input  id="inputFruit" type="text"/>
            <button onClick={handleAddFood}>Add Food</button>
            </div>);
}
export default Foods;