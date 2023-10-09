import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
          <Navbar></Navbar>
          {/* <Home></Home> */}
          <Outlet></Outlet>
          <Toaster/>
        </div>
    );
};

export default Root;