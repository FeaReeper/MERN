import React, {useState} from 'react'

const PersonCard = (props) => {
    const [age, newAge] = useState(props.age)
    return (
        <div className='person'>
            <h2>{ props.lastName }, { props.firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ (event) => newAge(age + 1)}>Birthday Button for {props.firstName}</button>
        </div>
    )
}

export default PersonCard