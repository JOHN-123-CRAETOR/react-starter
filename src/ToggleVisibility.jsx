import React, {useState} from 'react';
import profile from './assets/profile.png'

function ToggleVisibility(){

    const [isVisible, setIsVisible] = useState(false);

    function handleVisibility(){
        setIsVisible(prev => !prev);
    }

    const profileCard = (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      marginTop: '10px',
      borderRadius: '8px',
      width: '200px'
    }}>
      <img src={profile}
      style={{width: "200px"}}/>
      <h3>John Doe</h3>
      <p>Frontend Developer</p>
    </div>
  );

    const buttonText = isVisible ? "Hide Profile" : "Show Profile";

    return(<div>
            <button onClick={handleVisibility}>{buttonText}</button>
            {isVisible ? profileCard : null}
           </div>);
}
export default ToggleVisibility;