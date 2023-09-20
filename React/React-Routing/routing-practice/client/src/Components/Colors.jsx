import React from 'react'
import { useParams } from 'react-router-dom'


function Colors() {
  const { word, textColor, backgroundColor} = useParams()

  return (
    <div className='text-center m-5'>
      <h1 style={{background:backgroundColor, color:textColor}}>The word is: { word }</h1>
    </div>
  )
}

export default Colors