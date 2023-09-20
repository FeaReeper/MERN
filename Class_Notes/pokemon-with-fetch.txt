import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
      // not the actual JSON response body but the entire HTTP response
      return response.json();
  }).then(response => {
      // we now run another promise to parse the HTTP response into usable JSON
      // console.log(response);
      // console.log(response.results)
      setPokemon(response.results)
  }).catch(err=>{
      // console.log(err);
  });  }, [])

  return (
    <>
    <h1 className='text-center m-5'>Pokemon API Fetch</h1>
    {
    pokemon.map((onePokemon, idx) => (
      <div key={idx} className='text-center'>
        <p>{idx + 1}. {onePokemon.name}</p>
      </div>
    ))
    }
    </>
  )
}

export default App
