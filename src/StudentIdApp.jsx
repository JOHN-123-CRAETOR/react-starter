import StudentId from './StudentId.jsx';
import profile from './assets/profile.png';

function StudentIdApp(){


    return(<div>
            <StudentId 
            name="John"
            age={20}
            id={22408668}
            image={profile}
            hall="International Student Hostel"
            course="Information Technology"
            />
           </div>);
}
export default StudentIdApp;