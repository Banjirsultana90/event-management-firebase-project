import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home';

const Root = () => {
    return (
        <div>
          <Navbar></Navbar>
          {/* <Home></Home> */}
          <Outlet></Outlet>
        </div>
    );
};

export default Root;