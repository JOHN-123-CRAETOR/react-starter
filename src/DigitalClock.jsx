// import React, {useState, useEffect} from 'react';

// function DigitalClock(){

//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//         setTime(new Date());
//         }, 1000);

//         return(() => {
//             clearInterval(intervalId);
//         });
//     }, []);

//     function handleTime(){
//         let hours = time.getHours();
//         const minute = time.getMinutes();
//         const seconds = time.getSeconds();

//         const meridian = hours > 12 ? "PM" : "AM";

//         hours = hours % 12 || "12";
        
//         return (`${padZero(hours)} : ${padZero(minute)} : ${padZero(seconds)} ${meridian}`)
//     }

//     function padZero(number){
//         return(number < 10 ? "0" : "") + number;      
//     }
//     return(<div className="clock-container">
//             <div className="clock">
//                 <span style={{fontSize: "6rem", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "blueviolet"}}>{handleTime()}</span>
//             </div>

//           </div>);
// }
// export default DigitalClock;

import React, {useState, useEffect} from 'react';

function DigitalClock(){

const [time, setTime] = useState(new Date());

function Clock(){

    let hours = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours > 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)} : ${padZero(minute)} : ${padZero(seconds)} ${meridian}`;

}

    useEffect(() => {
        const intervalId = setTimeout(() => {
        setTime(new Date());
        }, 1000);

        return(() => {
            clearTimeout(intervalId);
        });
    }, [time]);

    function padZero(number){
       return (number < 10 ? "0" : "") + number;
    }

    return(<div>
            <p>{Clock()}</p>
           </div>)
}
export default DigitalClock;