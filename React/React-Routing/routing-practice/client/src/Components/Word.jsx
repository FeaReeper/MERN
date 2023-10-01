import React from 'react'
import { useParams } from 'react-router-dom'


function Word(props) {
  const { word } = useParams()
  // const [checkedWord, setCheckedWord] = useState('')


  // useEffect(() => {
  //   if (isNaN(word)) {
  //     setCheckedWord(word)
  //   } else {
  //     console.log("Err")
  //   }
  // })


  return (
    <div className='text-center m-5'>
      <h1>The Word is: { word }</h1>
    </div>
    )
}

export default Word