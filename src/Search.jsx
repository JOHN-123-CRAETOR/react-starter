import React, {useState, useEffect} from 'react';
import {useDebounce} from './useDebounce.jsx';

 function Search(){

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const debounce = useDebounce(query, 500);

    useEffect(() => {

        const data = ["Apple", "Orange", "Mango", "Pineapple", "Grapes", "Banana"];

        const filter = data.filter((fruit, index) => 
                        fruit.toLowerCase()
                        .includes(debounce.toLowerCase()));
        setResult(filter);

        if(!debounce){
            return setResult([]);
        }
        
    }, [debounce]);

    return(<div>
            <input style={{padding: "5px", border: "2px solid black", borderRadius: "5px"}} 
            placeholder="search fruit..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {result.map((fruit, index) => <li key={index}>{fruit}</li>)}
            </ul>
           </div>);
}
export default Search;