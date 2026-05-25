import ComponentD from './ComponentD.jsx';
import {userContext} from './ComponentA';
import {useContext} from 'react';

function ComponentC(){

    const user = useContext(userContext);

    return(<div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
           </div>);
}
export default ComponentC;