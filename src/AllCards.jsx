import Profile from './assets/profile.png';
import Profile1 from './assets/profile1.png';
import ProfileCard from './ProfileCard.jsx';
import FriendCard from './FriendCard.jsx';


function AllCards(){


    return(<div

            >
            <ProfileCard 
            username="John"
            bio="Frontend Developer"
            followers={1200}
            image={Profile}
            />
            <FriendCard 
            username="Philip"
            bio="wood engineer"
            followers={50000}
            image={Profile1}
            />

           </div>)
}
export default AllCards;