import React from 'react'

const PersonCard = (props) => {
    return (
        <div className='person'>
            <h2>{ props.lastName }, { props.firstName }</h2>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    )
}

export default PersonCard