import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Error from './pages/Error.jsx';

import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx';
import Servicedetails from './pages/Servicedetails.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './components/context/AuthProvider.jsx';
import Privateroute from './components/route/Privateroute.jsx';
import Support from './pages/Support.jsx';
import Contacts from './pages/Contacts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/services/:id',
        element:<Privateroute> <Servicedetails></Servicedetails></Privateroute>,
        loader: () => fetch('/data/data.json')
      },
      {
        path: '/Events',
        element: <Privateroute><Events></Events></Privateroute>
      },

      { path:'/Support',
      element:<Privateroute><Support></Support></Privateroute>

      },

      {
        path: '/About',
        element: <About></About>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path:'/Contacts',
        element:<Contacts></Contacts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
