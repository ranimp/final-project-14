import { useState } from 'react';
import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false)
	return (
		<>
      <nav className="font-montserrat sticky top-0 inset-x-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<img src={logo} className="w-12" alt='logo'/>
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
              <Link className="text-center mt-2">
                    <button
                      className="bg-dark-green text-white active:bg-dark-green text-sm font-bold uppercase px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Masuk
                    </button>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
	)
}