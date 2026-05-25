import React, {useState, useEffect, useRef} from 'react';


function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapseTime, setElapseTime] = useState(0);
    const intervalId = useRef(null);
    const startTime = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalId.current = setInterval(() => {
            setElapseTime(Date.now() - startTime.current);
         }, 10);
        }   
        
        return() => {
            clearInterval(intervalId.current);
        };
    }, [isRunning]);

    function Start(){
        setIsRunning(true);
        startTime.current = Date.now() - elapseTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setIsRunning(false);
        setElapseTime(0);
    }

    function formatTime(){
        let hours = Math.floor(elapseTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapseTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapseTime / 1000) % 60);
        let milliseconds = Math.floor((elapseTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`
    }


    return(<div style={{display: "flex",  alignItems: "center", flexDirection: "column"}}>
            <h1>{formatTime()}</h1>
            <div>
            <button onClick={Start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            </div>
            
           </div>);
}
export default Stopwatch;

