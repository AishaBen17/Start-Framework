import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import Home from '../Components/Home/Home'
import Portfolio from './../Components/Portfolio/Portfolio';
import Contact from './../Components/Contact/Contact';
import About from '../Components/About/About'
import Error from './../Components/Error/Error';
// import { createBrowserRouter } from 'react-router-dom' 
import { createHashRouter } from 'react-router-dom';

export default function App() {


    let x = createHashRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "portfolio", element: <Portfolio /> },
                { path: "contact", element: <Contact /> },
                { path: "*", element: <Error /> },
            ],
        },
    ]);
    

    return <>
        <RouterProvider router={x} />


    </>
}
