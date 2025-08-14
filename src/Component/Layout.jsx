import React from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Contact from './Contact/Contact.jsx';
import Footer from './Footer';

export default function Layout() {

  const {pathname} = useLocation();
  const isWhite = pathname === '/contact' || pathname === '/portfolio';



  return <>
    <Navbar></Navbar>
    <div className={`min-h-dvh center ${isWhite ? 'bg-white' : "bg_main_color"}`}>
        <div className='container mx-auto px-2 sm:px-0 '>
            <Outlet></Outlet>
        </div>
    </div>
    <Footer></Footer>
  </>
}
