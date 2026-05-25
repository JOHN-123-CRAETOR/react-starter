// import React, {useState, useEffect} from 'react';

// function Effect(){

//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("green");

//     useEffect(() => {
//     document.title = `count: ${count} ${color}`
//     }, [count, color]);

//     function addCount(){
//         setCount(c => c + 1);
//     }
//     function subCount(){
//         setCount(c => c - 1);
//     }
//     function changeColor(){
//         setColor(color === "green" ? "red" : "green");
//     }

//     return(<div>
//             <p style={{color: color}}>Count: {count}</p>
//             <button onClick={addCount}>Add</button>
//             <button onClick={subCount}>Subtract</button>
//             <button onClick={changeColor}>Change Color</button>
//            </div>);
// }
// export default Effect;

// import React, {useState, useEffect} from 'react';

// function Effect(){

//     const [width, setWidth] = useState(window.innerWidth);
//     const [height, setHeight] = useState(window.innerHeight);

//     useEffect(() => {
//         window.addEventListener("resize", handleResize);
//         console.log("EVENT LISTENER ADDED");

//         return(() => {
//             window.removeEventListener("resize", handleResize);
//             console.log("REMOVE EVENT LISTENER");
//         });
//     }, [])

//     useEffect(() => {
//             document.title = `size: ${width} x ${height}`;
//         });
    

//     function handleResize(){
//         setWidth(window.innerWidth);
//         setHeight(window.innerHeight);
//     }

// return(<>
//         <p>Width: {width}px</p>
//         <p>Height: {height}px</p>
//        </>);
// }
// export default Effect;

import React, {useState, useEffect} from 'react';

function Effect(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function addDimention(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    useEffect(() => {
        window.addEventListener("resize", addDimention);

        return(() => {
            window.removeEventListener("resize", addDimention);
        });
    });

    useEffect(() => {
        document.title = `size: ${width} x ${height}`;

        return(() => {
            window.removeEventListener("resize", addDimention);
        });
    }, []);
    

   


    return(<div>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
           </div>);
}
export default Effect;