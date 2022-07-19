import React from "react";
import Home from './Home';
import Whoami from './Whoami';
import { Link, Outlet } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/whoami">Who Am I</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
};

export default Menubar;