

function ProductStore(props){


    return(<div>
            <img src={props.image} width="200px"/>
            <p>{props.productName}</p>
            <p>{props.price}</p>
            <p>{props.inStock === true ? "Yes" : "No"}</p>
           </div>);
}
export default ProductStore;