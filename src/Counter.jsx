import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);


    const handleIncrease = () => {
        setCount(count + 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    const handleDecrease = () => {
        setCount(count - 1);
    }


return(<>
        <p>count: {count}</p>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrease}>Decrease</button>
       </>);

}
export default Counter;