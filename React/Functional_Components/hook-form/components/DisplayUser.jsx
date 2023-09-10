import React, {useState} from 'react'


const DisplayUser = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const showUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        const { username, email, password, confirmPassword } = newUser
        // shorthand ES6 syntax for building an object - see notes above
        // const newUser = { username, email, password, confirmPassword };
        // console.log("Welcome", newUser);
    	// setUsername("");
    	// setEmail("");
    	// setPassword("");
        // setConfirmPassword("");
    };
    
    return(
        <div>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};
    
export default DisplayUser;
