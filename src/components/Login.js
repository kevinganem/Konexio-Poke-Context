// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      LOGIN.JS     ------------------------------ //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// REACT
import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Login() {
  const { isLogged, setAuth } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setAuth();
    console.log(data);
    console.log(isLogged);
  };

  return (
    <div>
      <h1 className="text-center">Login</h1>
      {/* FORM WITH BOOTSTRAP  */}
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "25rem" }}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Type your username..."
              {...register("username", { required: true, maxLength: 15 })}
            >
              {errors.username && <span>Username is required.</span>}
            </input>
            <div className="form-text">
              The username you will have on Poke-context.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Type your password..."
              {...register("password", { required: true, minLength: 6 })}
            >
              {errors.password && <span>Please enter a password.</span>}
            </input>
          </div>
          {isLogged ? (
            <button onClick={handleSubmit(onSubmit)} className="btn btn-danger">
              Logout
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          )}
        </form>
      </div>
      {/* END OF FORM WITH BOOTSTRAP */}
    </div>
  );
}
