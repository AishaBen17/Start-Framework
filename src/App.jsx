import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Portfolio from './../Components/Portfolio/Portfolio';
import Contact from './../Components/Contact/Contact';
import About from '../Components/About/About'
import Error from './../Components/Error/Error';

export default function App() {
    let x = createBrowserRouter([
      
        { path:"/", 
            element: <Layout /> ,
             children:[
            { path:"", element:<Home/> },
            { path:"about", element:<About/>},
            { path:"portfolio", element:<Portfolio/>},
            { path:"contact", element:<Contact/>},
            { path:"*", element:<Error />},
        ]
         },
       
    ])

    return <>
        <RouterProvider router={x} />


    </>
}
