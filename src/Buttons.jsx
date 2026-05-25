

function Buttons(){
    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name}, you clicked me ${count} time/s`);
    //     }
    //     else{
    //         count++;
    //     console.log(`${name} you clicked me more than 3 times...${count} times`);
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "OUCH!!"
return(<>
    <button onClick={(e) => handleClick(e)} >Click Me</button>
       </>);
}
export default Buttons;