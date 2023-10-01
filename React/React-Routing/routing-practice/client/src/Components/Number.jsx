import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Number(props) {
  const { num } = useParams()
  // const [number, setNumber] = useState(null)

  // useEffect(() => {
  //   if (isNaN(num)) {
  //     console.log("Err")
  //   } else {
  //     setNumber(num)
  //   }
  // })

  return (
    <div className='text-center m-5'>
      <h1>The Number is: { num }</h1>
    </div>
    )
}

export default Number