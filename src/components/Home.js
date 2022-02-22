// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      HOME.JS     ------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// REACT
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/userContext";
// ROUTER
import { Link } from "react-router-dom";

export default function Home() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(randomNumber);
  const { isLogged } = useContext(UserContext);

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

  if (isLogged) {
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
                  <h5 className="card-title text-capitalize text-center">
                    {pokemon.name}
                  </h5>
                  <div className="card-text list-unstyled text-center">
                    <div>Height : {pokemon.height}</div>
                    <div>Weight : {pokemon.weight}</div>
                  </div>
                </div>
                <div className="list-group list-group-flush text-center">
                  {pokemon.types.map((types) => (
                    <div className="list-group-item">
                      {" "}
                      Type : {types.type.name}{" "}
                    </div>
                  ))}
                </div>
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
  } else {
    return (
      <Link className="text-decoration-none" to="/login">
        <h1 className="text-center"> Click here to login </h1>
      </Link>
    );
  }
}
