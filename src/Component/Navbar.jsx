import { use, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const [isScroll, setisScroll] = useState(false);
    const [isOpen, setOpen] = useState(false);
    
    function togglebtn() {
        setOpen(!isOpen);
    }

    function handleScroll() {
        console.log('test');
        if (window.scrollY > 10) {
            setisScroll(true);
        }
        else {
            setisScroll(false);
        }
    }

    window.addEventListener("scroll", handleScroll);



    return <>

        <nav className={`bg-[#2c3E50] text-white  transition-[padding] duration-500 sticky top-0 start-0 right-0 z-30 ${isScroll ? 'py-4' : 'py-8'}`}>
            <div className="container px-2 flex flex-wrap items-center justify-between ">
                <Link to={'/'} className='uppercase text-3xl tracking-normal'>Start framework</Link>
                <button onClick={togglebtn} data-collapse-toggle="navbar-default" type="button" className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={` ${!isOpen && 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="navbar-nav  font-medium flex flex-col gap-2.5 md:gap-0 p-4 md:p-0 mt-4   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        <li className="nav-item me-3 ">
                            <NavLink className="nav-link text-white uppercase rounded-md px-3 py-2" to={'/about'}>About</NavLink>
                        </li>
                        <li className="nav-item me-3 ">
                            <NavLink className="nav-link text-white uppercase rounded-md px-3 py-2" to={'/portfolio'}>Portfolio</NavLink>
                        </li>
                        <li className="nav-item me-3 ">
                            <NavLink className="nav-link text-white uppercase rounded-md px-3 py-2" to={'/contact'}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
