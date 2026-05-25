import React, {useState} from 'react';

function ShoppingCart(){

    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");
    const [cartLength, setCartLength] = useState("");
    const [checkoutMessage, setCheckoutMessage] = useState("");
 
    const products = [
        {id: 1, productName: "Book", price: 15},
        {id: 2, productName: "Pen", price: 5},
        {id: 3, productName: "Pencil", price: 4}
    ];

    function handleAddToCart(product){
        const existing = cart.find(item => 
            item.id === product.id);

        if(existing){
            setCart(
                prev => prev.map(item => item.id === product.id 
                    ?
                        {
                            ...item, 
                            quantity: item.quantity + 1
                        } : 
                        item
                )    
        )
        }
         else{
                    setCart([...cart, 
                        {...product, quantity: 1}])
                }
    }

    function handleRemove(id){
        setCart(
        prev => prev.filter(item => item.id !== id)
        );
    }

    function handleIncrease(id){
        setCart(prev => prev.map(item => item.id === id ?
        {...item, quantity: item.quantity + 1} : item
        ));
    }

    function handleDecrease(id){
        setCart(prev => prev.map(item => item.id === id ?
            {...item, quantity: item.quantity - 1} :
            item
        ).filter(item => item.quantity > 0))
    }

    const filterProducts = products.filter(product => 
                            product.productName.toLowerCase()
                            .includes(search.toLowerCase()));

    function handleCheckout(){

    setCartLength(
        cart.length === 0
            ? "No item in cart for checkout"
            : cart.length === 1
                ? `You are checking out ${cart.length} item`
                : `You are checking out ${cart.length} items`
    );
} 

function handleFinalCheckout(){

    if(cart.length === 0){
        return setCheckoutMessage(
            "Sorry, there is no available item for checkout"
        );
    }

    setCheckoutMessage(
        "Congratulations!! you have successfully checked out"
    );

    setCart([]);
}

const subtotal = cart.reduce((sum, item) => {
                    return sum + item.price * item.quantity
                }, 0)

const shipping = subtotal * 0.09;

const finalTotal = subtotal + shipping;

const items = cart.reduce((sum, item) => {
        return sum + item.quantity
    }, 0);

    return(<div>
            <div>
                <input 
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search product..."
                />
            </div>
            <div>
                <h1>Products</h1>
                <ol>
                    {filterProducts.map((product, id) => 
                    <li key={id}>{product.productName} - 
                        GHS {product.price} 
                        <button onClick={
                            () => 
                            handleAddToCart(product)
                            }>
                                Add to Cart
                        </button>
                    </li>)}
                </ol>
            </div>
            <hr />
            <div>
                <h1>Carts</h1>
                {cart.length === 0  ?
                <p>
                    <i style={{color: "#494747"}}>
                        No items in cart
                    </i>
                </p> : 
                <div>
                     <ol>
                    {cart.map((item) => 
                    <li key={item.id}><strong>{item.productName}</strong> {" "}
                    - GHS{item.price} <br /> 
                    Qty: {item.quantity} <br />
                subtotal: GHS {item.price * item.quantity} <br />
                    <button onClick={() => handleIncrease(item.id)}>
                        +
                        </button>
                        <button 
                        style={{marginLeft: "3px"}}
                        onClick={() => handleDecrease(item.id)}
                            >
                            -
                        </button>
                    <button 
                    style={{backgroundColor: "red", 
                        color: "white", border: "none", 
                        padding: "3px", marginLeft: "2px", 
                        borderRadius: "3px"
                    }}
                    onClick={() => handleRemove(item.id)}
                    >
                        Remove
                    </button>
                    </li>)}
                </ol>
                <h2>
                    Total: GHS {cart.reduce((sum, item) => {
                    return sum + (item.price * item.quantity)
                }, 0)}
                </h2>
                </div>
                }
               
            </div>
            <hr />
            <div>
                <button onClick={handleCheckout}>Checkout summary</button>
               <p>{cartLength}</p>
               <h2>Summary</h2>
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.productName} x {item.quantity}
                        </li>
                    ))}
                </ul>

                <p>Items: {items}</p>

                <p>Subtotal: GHS {subtotal.toFixed(2)}</p>

                <p>Shipping: GHS {shipping.toFixed(2)}</p>

                <p>Total: GHS {finalTotal.toFixed(2)}</p>
            </div>
            <div>
                <button
                onClick={handleFinalCheckout}
                >
                    Final checkout
                </button>

            <p>{checkoutMessage}</p>
            </div>

          </div>);
}
export default ShoppingCart;