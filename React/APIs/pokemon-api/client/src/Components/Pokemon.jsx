import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Pokemon(props) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => console.log(err));
    console.log(pokemon);
  }, []);

  return (
    <div>
      {
      pokemon.map((onePokemon, idx) => (
        <div key={idx} className='text-center'>
          <p>{idx + 1}. {onePokemon.name}</p>
        </div>
      ))
      }
    </div>
  );
}

export default Pokemon;
