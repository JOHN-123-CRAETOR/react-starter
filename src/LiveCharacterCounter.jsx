import React, {useState} from 'react';

function LiveCharacterCounter(){

    const [character, setCharacter] = useState("");

    const count = character.length  === 0 ? "start typing..." : `Character :  ${character.length}`

    const charLen = character.length > 20

    return(<div>
            <input 
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
            style={{
                color: charLen ? "red" : null
            }}
            placeholder="Type something..."
            />
            <p>{count}</p>
            
           </div>);
}
export default LiveCharacterCounter;