// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      LOGIN.JS     ------------------------------ //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// REACT
import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1 className="text-center">Login</h1>

      {/* FORM  */}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="Username"
          {...register("username", { required: true })}
        />
        {errors.username && <span>Username is required.</span>}
        <input
          defaultValue="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Please enter a password.</span>}
        <input type="submit" />
      </form> */}
      {/* END OF FORM  */}
      {/* FORM WITH BOOTSTRAP  */}
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "25rem" }}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="username"
              className="form-control"
              placeholder="Username"
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
              placeholder="Password"
              {...register("password", { required: true, maxLength: 6 })}
            >
              {errors.password && <span>Please enter a password.</span>}
            </input>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      {/* END OF FORM WITH BOOTSTRAP */}
    </div>
  );
}
