import React, {useState} from 'react'

const Main = (props) => {
    return (
        <div className='main'>
            <div className='sub-contents'>
                {props.children}
            </div>
        </div>
    )
}

export default Main