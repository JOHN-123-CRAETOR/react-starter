import React, {useState, useEffect} from 'react';
import {useDebounce} from './useDebounce.jsx';

function SimpleSearch() {
    const [query, setQuery] = useState("");
    const debounceQuery = useDebounce(query, 500);
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const data = ["apple", "mango", "banana", "orange", "pineapple", "grapes"];

    useEffect(() => {
        if(!debounceQuery){
            setResult([]);
            return;
        }
        
        setLoading(true);
        

        const timer = setTimeout(() => {
            const filtered = data.filter((item) => item.toLowerCase().includes(debounceQuery.toLowerCase()));
            setResult(filtered);
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer);
        }
        

    }, [debounceQuery]);

  return (<div>
            <div>
                <input 
                style={{padding: "5px", border: "2px solid", borderRadius: "5px"}}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search fruit..."
                />

                    {loading && <p>Loading...</p>}
                    {!loading && debounceQuery && result.length === 0 && (<p>No result found</p>)}
                    
                <ul>
                    {result.map((item, index) => <li key={index}>{item}</li>)}
                    
                </ul>
            </div>
          </div>);
}

export default SimpleSearch;