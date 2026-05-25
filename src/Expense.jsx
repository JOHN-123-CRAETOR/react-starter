import React, {useState} from 'react';

function Expense(){

    const [names, setNames] = useState("");
    const [amount, setAmount] = useState("");
    const [results, setResults] = useState([]);

    
    

    function handleAdd(){
        if(names.trim() === ""){
            return;
        }

    const nameAmount = {
        name: names,
        amount: Number(amount)
    }

        setResults([...results, nameAmount]);
        setNames("");
        setAmount(0);
    }

    function handleDelete(id){
        setResults(prev => prev.filter((item, index) => index !== id));
    }

    const total = results.reduce((sum, item) => {
        return sum + item.amount;
    }, 0)

    return(<div>
            <input 
            type="text"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            placeholder="Enter name..."
            />
            <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleAdd}>
                Add
            </button>
                    {results.length === 0 ? <p>No expense available</p>
                     : <ol>
                        {results.map((item, id) => 
                    <li key={id}>Name: <span style={{fontWeight: "bold"}}>{item.name}</span>
                     Amount: <span style={{fontWeight: "bold"}}>GHC{item.amount}</span><span>
                        <button onClick={() => handleDelete(id)}>Delete</button></span></li>)}
                </ol>}

                {results.length !== 0 && `Total Amount: ${total}`}
                
           </div>);
}
export default Expense;