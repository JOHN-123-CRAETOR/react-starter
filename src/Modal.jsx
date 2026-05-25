import React, {useState} from 'react';

function Modal(){

    const [isOpen, setIsOpen] = useState(false);

    function Open(){
        setIsOpen(true);
    }
    function Close(){
        setIsOpen(false);
    }


    return(<div>
            <button onClick={Open}>Open Modal</button>
            {isOpen && (<div>
                        <h1>Hello</h1> 
                        <button onClick={Close}>Close</button>
                        </div>)}
           </div>);
}
export default Modal;