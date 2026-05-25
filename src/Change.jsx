import React, {useState} from 'react';

function Change(){

const [name, setName] = useState("Guest");
const [quantity, setQuantity] = useState();
const [comment, setComment] = useState()
const [payment, setPayment] = useState("");
const [shipping, setShipping] = useState();


const handleName = (e) => {
    setName(e.target.value);
}
const handleQuantity = (event) => {
    setQuantity(event.target.value);
}
const handleComment = (look) =>{
    setComment(look.target.value);
}
const handlePayment = (event) => {
    setPayment(event.target.value);
}
const handleShipping = (event) => {
    setShipping(event.target.value);
}


return(<>
        <input value={name} onChange={handleName}/>
        <p>Name: {name}</p><br></br>

        <input value={quantity} type="number" onChange={handleQuantity}/>
        <p>Quantity: {quantity}</p><br></br>

        <textarea value={comment} onChange={handleComment}/>
        <p>Comment: {comment}</p><br></br>

        <select value={payment} onChange={handlePayment}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p><br />

        <label>
            <input type="radio" 
                   value="Pick up" 
                   checked = {shipping === "Pick up"} 
                   onChange={handleShipping}/>
            Pick up
        </label><br />
        <label>
            <input type="radio" 
                   value="Delivery" 
                   checked = {shipping === "Delivery"} 
                   onChange={handleShipping}/>
            Delivery
        </label>
        <p>Shipping Method: <b>{shipping}</b></p>


       </>);
} 
export default Change;