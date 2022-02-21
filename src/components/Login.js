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
      <h1>Login</h1>

      {/* FORM  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", { required: true })} />
        {errors.username && <span>Username is required.</span>}
        <input {...register("password", { required: true })} />
        {errors.password && <span>Please enter a password.</span>}
        <input type="submit" />
      </form>
      {/* END OF FORM  */}
    </div>
  );
}
