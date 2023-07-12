import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/about",
        element:<AboutPage/>
    },
    {
        path:"/services",
        element:<ServicesPage/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


