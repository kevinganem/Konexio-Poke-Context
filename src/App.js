// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      APP.JS     -------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// REACT
import React from "react";
// ROUTER
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// COMPONENTS
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav pt-3">
        <Link className="p-3 nav-item nav-link active" to="/">
          Home
        </Link>
        <Link className="p-3 nav-item nav-link active" to="/login">
          Login
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
