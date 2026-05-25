

function ProfilePicture(){
    const imageUrl = './src/assets/profile.png'

    const handleClick = (e) => e.target.style.display = "none";

    return(<>
            <img src={imageUrl}
                width="200"
                height="200"
                alt="profile picture"
                onClick={(e) => handleClick(e)}
                ></img>
           </>);

}
export default ProfilePicture;