import React, { useEffect } from "react";
import Home from './Home';
import Whoami from './Whoami';
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';

const Menubar = ({apiUrl}) => {
  useEffect(() => {
    axios.get('https://reactapitest.pythonanywhere.com/api/list/?page=1&page_size=10').then(response => {
      console.log(response.data);
    })
  }, [])
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/whoami">Who Am I</Link>
        </li>
        <li>
          <Link to="/posts">방명록</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
};

export default Menubar;