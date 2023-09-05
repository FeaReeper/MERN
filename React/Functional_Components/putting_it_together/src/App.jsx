import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from '../components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName = {"Homer"}
        lastName = {"Simpson"}
        age = { 45 }
        hairColor = {"Black"} />
      <PersonCard
        firstName = {"Marge"}
        lastName = {"Simpson"}
        age = { 43 }
        hairColor = {"Blue"} />
      <PersonCard
        firstName = {"Bart"}
        lastName = {"Simpson"}
        age = { 11 }
        hairColor = {"Yellow"} />
      <PersonCard
        firstName = {"Lisa"}
        lastName = {"Simpson"}
        age = { 9 }
        hairColor = {"Yellow"} />
    </div>
  );
}

export default App
