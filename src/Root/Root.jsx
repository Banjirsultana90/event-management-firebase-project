import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div>
          <Navbar></Navbar>
          
         
          <Outlet></Outlet>
          
          <Toaster/>
        </div>
    );
};

export default Root;