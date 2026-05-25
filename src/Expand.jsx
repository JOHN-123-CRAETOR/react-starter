import React, {useState} from 'react';

function Expand(){

    const [nameText, setNameText] = useState("");
    const [nameId, setNameId] = useState(null);
    const [names, setNames] = useState(["John", "Paul", "Israel"])

    function handleEdit(text, id){
        setNameText(text);
        setNameId(id);
    }

    function handleSave(){
        const updateNames = names.map((name, id) => {
            if(id === nameId){
                return nameText;
            }
            return name;
        })

        setNames(updateNames);
        setNameText("");
        setNameId(null);
    }

    return(<div>
            <ul>
                {names.map((name, id) => 
                { return nameId === id ? (
                    <li key={id}>
                        <input 
                        value={nameText}
                        onChange={(e) => setNameText(e.target.value)}
                        />
                        <button onClick={handleSave}>Save</button>
                    </li>
                ) : (
                    <li key={id}>
                    {name}
                    <button onClick={() => handleEdit(name, id)}>Edit</button>
                    
                </li>)}
                )}
                
            </ul>
            <button onClick={() => handleEdit(name.nameText, nameid)}>Save</button>
            <button>Cancel</button>
           </div>);
}
export default Expand;