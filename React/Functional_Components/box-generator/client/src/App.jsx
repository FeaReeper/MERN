import { useState } from 'react'
import './App.css'
import ColorForm from '../components/ColorForm'
import Boxes from '../components/Boxes'


function App() {

  const [colorArray, setColorArray] = useState([])


  return (
    <>
      <ColorForm colorArray={ colorArray } setColorArray={ setColorArray }/>
      <Boxes colorArray={ colorArray }/>
    </>
  )
}

export default App
