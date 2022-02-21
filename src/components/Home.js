// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      HOME.JS     ------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// REACT
import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(1);

  useEffect(() => {
    console.log("Initializing");

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setPokemon(result);
        setLoading(false);
        console.log(result);
      });
  }, [id]);

  function randomNumber() {
    return Math.floor(Math.random() * 151) + 1;
  }

  return (
    <div>
      {pokemon === null && loading === true ? (
        <div className="spinner-border text-primary" role="status" />
      ) : (
        <>
          <h1>Home</h1>
          <div>
            <h3>Name : {pokemon.name}</h3>
            <h3>Height : {pokemon.height}</h3>
            <h3>Weight : {pokemon.weight}</h3>
            <ul>
              <h3>Type : </h3>
              {pokemon.types.map((types) => (
                <li> {types.type.name} </li>
              ))}
            </ul>
          </div>
          <button className="" onClick={() => setId(randomNumber)}>
            Random Pokémon
          </button>
        </>
      )}
    </div>
  );
}
