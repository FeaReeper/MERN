import React from 'react'
import { useParams } from 'react-router-dom'

function NumOrWord() {
  const { numOrWord } = useParams()

  return (
    <div className="text-center m-5">
      { isNaN(numOrWord) ? <h1>The Word is: {numOrWord}</h1> : <h1>The Number is: {numOrWord}</h1>}
    </div>
  )
}

export default NumOrWord