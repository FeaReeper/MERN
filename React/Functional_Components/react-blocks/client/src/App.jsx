import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Main from '../components/Main'
import SubContents from '../components/SubContents'
import Advertisements from '../components/Advertisements'

function App() {

  return (
    <div className='app'>
      <Header/>
      <div className='container'>
      <Navigation/>
      <Main>
        <div className='sub-content'>
        <SubContents/>
        <SubContents/>
        <SubContents/>
        </div>
        <Advertisements/>
      </Main>
      </div>
    </div>
  )
}

export default App
