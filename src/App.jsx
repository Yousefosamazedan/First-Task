import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';

export default function App() {
  const routes = createBrowserRouter([
    {path: '/', element: <Layout ></Layout>, children: [
      {index: true, element: <Home></Home>},
      {path: '/about', element: <About></About>},
      {path: '/portfolio', element: <Portfolio></Portfolio>},
      {path: '/contact', element: <Contact></Contact>}
    ]}
  ]);
  console.log(routes);

  return <>
    <RouterProvider  router={routes}>
      
    </RouterProvider>
  
  </> 
}
