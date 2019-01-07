import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/">New Project</NavLink></li>
      <li><NavLink to="/">LogOut</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">SK</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;