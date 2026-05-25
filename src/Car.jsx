import React, {useState} from 'react';

function Car(){

    const [car, setCar] = useState({year: 2026, make: "Toyota", model: "Land cruiser"}); 
    
    const handleYearChange = (e) => {
        setCar(car => ({...car, year: e.target.value}));
    }
    const handleMakeChange = (e) => {
        setCar(car => ({...car, make: e.target.value}));
    }
    const handleModelChange = (e) => {
        setCar(car => ({...car, model: e.target.value}));
    }

return(<div>
        <p>Your car is a {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br />
        <input type="text" value={car.make} onChange={handleMakeChange}/><br />
        <input type="text" value={car.model} onChange={handleModelChange}/><br />
       </div>);

}
export default Car;