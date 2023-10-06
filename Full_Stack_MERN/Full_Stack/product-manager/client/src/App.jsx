import { useState } from 'react'
import Form from './components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DisplayAll from './components/DisplayAll'
import Nav from './components/Nav'
import OneProduct from './components/OneProduct'
import Update from './components/Update'

function App() {
  const [products, setProducts] = useState([])

  return (
    <>
      <h1 className="text-center m-5 ">Product Manager</h1>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={ <Form products={products} setProducts={setProducts}/> }/>
          <Route path='/allProducts' element={ <DisplayAll products={products} setProducts={setProducts}/> }/>
          <Route path='/product/:id' element={ <OneProduct/>}/>
          <Route path='/product/update/:id' element={ <Update/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
