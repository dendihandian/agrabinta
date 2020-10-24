import React from 'react';
import {NavLink} from 'react-router-dom';

const AppHeader = (props) => {
    return (
      <header className="h-16 flex items-center bg-gray-800">
        <div className="w-1/2 h-16 flex items-center justify-start pl-4">
          <h1 className="text-2xl font-medium tracking-wider text-blue-500" title="Agrabinta">
            <NavLink to="/">
              Agra<span className="text-blue-300">bin<span className="text-blue-200">ta</span></span>

            </NavLink>
          </h1>
        </div>
        <div className="w-1/2 h-16 flex items-center justify-end pr-4">
          <nav className="mr-4">
            <ul className="flex">
              <li className="mx-2 text-gray-500 hover:text-gray-300">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="mx-2 text-gray-500 hover:text-gray-300">
                <NavLink to="/map">Map</NavLink>
              </li>
              <li className="mx-2 text-gray-500 hover:text-gray-300">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="mx-2 text-gray-500 hover:text-gray-300">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <a className="text-gray-600 hover:text-gray-300 text-2xl" href="https://github.com/dendihandian/agrabinta" target="_blank" rel="noopener noreferrer" title="Agrabinta github repository">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </header>
    )
}

export default AppHeader;
