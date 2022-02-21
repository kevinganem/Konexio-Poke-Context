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
          <h1 className="text-center">Home</h1>
          <div className="d-flex justify-content-center p-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pokemon.sprites.front_default}
                className="card-img-top"
                alt="Pokémon"
              />
              <div className="card-body">
                <h5 className="card-title text-capitalize">{pokemon.name}</h5>
                <ul className="card-text">
                  <li>Height : {pokemon.height}</li>
                  <li>Weight : {pokemon.weight}</li>
                </ul>
              </div>
              <ul className="list-group list-group-flush">
                {pokemon.types.map((types) => (
                  <li className="list-group-item"> {types.type.name} </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-success"
              onClick={() => setId(randomNumber)}
            >
              Random Pokémon
            </button>
          </div>
        </>
      )}
    </div>
  );
}
