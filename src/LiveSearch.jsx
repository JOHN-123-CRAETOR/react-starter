import React, {useState} from 'react';

function LiveSearch(){

    const [search, setSearch] = useState("");
    const foods = ["apple", "mango", "banana", "orange", "pineapple"];
    

    const filteredFoods = foods.filter((food) => food.toLowerCase().includes(search.toLowerCase()));

    return(<div>
            <div>
                <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search"
                />
            </div>
            {search.trim() !== ""  && filteredFoods.length === 0 && (
                <p
                style={{color: "red"}}>No food available</p>
            ) }
            <div>
                {search.trim() !== "" && filteredFoods.map((food, id) => <li key={id}
                                        >
                                            {food.split(new RegExp(`(${search})`, "gi")).map((part, index) =>
                                             part.toLowerCase() === search.toLowerCase() 
                                            ? (<span
                                                key={index}
                                                style={{backgroundColor: "yellow"}}
                                                >
                                                    {part}
                                                </span>) 
                                                : part
                                                )}
                                            </li>)}
            </div>
           </div>);
}
export default LiveSearch;