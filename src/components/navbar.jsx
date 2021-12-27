import { useState } from 'react';
import Logo from '../icons/logo.png';
import { Link } from "react-router-dom";
import Button from './button';

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<>
      <nav className="font-montserrat sticky top-0 inset-x-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<img src={Logo} className="w-20" alt='logo'/>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="w-6 h-6" fill="#08A4A6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="lg:px-3 py-2 flex items-center text-lg capitalize font-bold leading-snug text-dark-green hover:opacity-75"       
                >
                  <i className="lg:text-lg leading-lg text-dark-green opacity-75"></i><span className="ml-2">beranda</span>
                </a>
              </li>
              <li>
                <a
                  className="lg:px-3 py-2 flex items-center text-lg capitalize font-bold leading-snug text-dark-green hover:opacity-75"
                >
                  <i className="lg:text-lg leading-lg text-dark-green opacity-75"></i><span className="ml-2">Fitur</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="lg:px-3 py-2 flex items-center text-lg capitalize font-bold leading-snug text-dark-green hover:opacity-75"       
                >
                  <i className="text-lg leading-lg text-dark-green opacity-75"></i><span className="ml-2">Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="lg:px-3 flex items-center text-sm capitalize font-bold leading-snug text-dark-green hover:opacity-75"    
                >
                <Button def="default" type="login">masuk</Button>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="lg:px-3 flex items-center text-sm capitalize font-bold leading-snug text-white hover:opacity-75 py-2 lg:py-0"              
                >
                <Button def="default" type="signUp">sign up</Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
	)
}