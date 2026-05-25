
function Button(){

const styles = {
    
    backgroundColor: "hsl(240, 76%, 51%)",
    padding: "10px 20px",
    color: "white",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer"
    }

    
    return(
        <div>
            <button style={styles}>Click Me</button>
        </div>
    );
}

export default Button;