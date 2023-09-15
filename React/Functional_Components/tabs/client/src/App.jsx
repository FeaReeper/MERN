import { useState } from 'react'
import './App.css'
import Tabs from '../components/Tabs'
import Display from '../components/Display'

function App() {
  const dragonBallArray = [
    {label: 'Goku', message: 'Strongest, Positive, Merciful'},
    {label: 'Vegeta', message: 'Stubborn, Cocky, Merciless'},
    {label: 'Beerus', message: 'Divine, Hungry, Destroyer'}
  ]

  const [tabsArray, setTabsArray] = useState(dragonBallArray)
  const [tabDisplay, setTabDisplay] = useState("")


  return (
    <>
    <Tabs>
      tabsArray = { tabsArray }
    </Tabs>
    <Display>
      tabDisplay = { tabDisplay }
      setTabDisplay = { setTabDisplay }
    </Display>
    </>
  )
}

export default App
