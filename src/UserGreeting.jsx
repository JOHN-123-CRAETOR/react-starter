

function UserGreeting(props){

  const welcomeMessage = <h2 className="welcome-msg">welcome {props.username}</h2>
  const loginPrompt = <h2 className="login-prompt">Please log in again next time</h2>


    return(props.isLoggedIn ? welcomeMessage : loginPrompt);


}
export default UserGreeting;