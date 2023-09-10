import React, {useState} from 'react'



const ValidationForm = () => {
    const [firstName, setFirstName] = useState('')
    const [firstError, setFirstError] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastError, setLastError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmError, setConfirmError] = useState('')

    const validateFirstName = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length > 1 || e.target.value.length == 0) {
            setFirstError("")
        } else {
            setFirstError("First Name must be at least 2 characters")
        }
    }
    const validateLastName = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length > 1 || e.target.value.length == 0) {
            setLastError("")
        } else {
            setLastError("Last Name must be at least 2 characters")
        }
    }
    const validateEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length > 4 || e.target.value.length == 0) {
            setEmailError("")
        } else {
            setEmailError("Email must be at least 5 characters")
        }
    }
    const validatePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length > 7 || e.target.value.length == 0) {
            setPasswordError("")
        } else {
            setPasswordError("Password must be at least 8 characters")
        }
    }
    const validatePassMatch = (e) => {
        setConfirmPassword(e.target.value)
        console.log(password, confirmPassword)
        if (password == e.target.value){
            setConfirmError("")
        } else {
            setConfirmError("Password and Confirm Password must match")
        }
    }



    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    	setFirstName("");
        setLastName("");
    	setEmail("");
    	setPassword("");
        setConfirmPassword("");
    };
    
    return(
        <>
            <h1 id='title'>More Forms...</h1>
            <form onSubmit={ createUser }>
                <div className='input'>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ validateFirstName } />
                </div>
                <p>{ firstError }</p>
                <div className='input'>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ validateLastName } />
                </div>
                <p>{ lastError }</p>
                <div className='input'>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ validateEmail } />
                </div>
                <p>{ emailError }</p>
                <div className='input'>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ validatePassword } />
                </div>
                {/* Why is the p tag passwordError showing up above the password? */}
                <p>{ passwordError }</p>
                <div className='input'>
                    <label>Confirm Password: </label>
                    <input type="text" value={confirmPassword} onChange={ validatePassMatch }/>
                </div>
                {/* Why does the input not register the last character typed? */}
                <p>{ confirmError }</p>
                <input type="submit" value="Create User" className='button' />
            </form>
        </>
    );
};
    
export default ValidationForm;
