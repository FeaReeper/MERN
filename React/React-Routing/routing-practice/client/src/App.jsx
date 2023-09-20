import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Colors from './Components/Colors'
import NumOrWord from './Components/NumOrWord'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={ <Home/> }/>
          <Route path='/:numOrWord' element={ <NumOrWord/> }/>
          <Route path='/:word/:textColor/:backgroundColor' element={ <Colors/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
