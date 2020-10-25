import React from 'react';
import {NavLink} from 'react-router-dom';
import { withTranslation } from "react-i18next";


const AppHeader = ({t, i18n, ...props}) => {
    return (
      <header className="h-16 flex items-center bg-gray-800">
        <div className="w-1/2 h-16 flex items-center justify-start pl-4">
          <h1 className="text-2xl font-medium tracking-wider text-blue-500" title="Agrabinta">
            <NavLink to="/">
              Agra<span className="text-blue-300">bin<span className="text-blue-200">ta</span></span>
              <sup className="bg-yellow-500 text-gray-900 rounded font-bold" style={{fontSize: "0.40rem", top: '-10px', padding: '2px'}}>BETA</sup>
            </NavLink>
          </h1>
        </div>
        <div className="w-1/2 h-16 flex items-center justify-end pr-4">
          <nav className="mr-4">
            <ul className="flex">
              <li className="mx-2 text-gray-500 hover:text-gray-300">
                <NavLink to="/">{t('home')}</NavLink>
              </li>
              <li className="mx-2 text-gray-500 hover:text-gray-300">
                <NavLink to="/map">{t('map')}</NavLink>
              </li>
              <li className="mx-2 text-gray-500 hover:text-gray-300">
                <NavLink to="/about">{t('about')}</NavLink>
              </li>
              <li className="mx-2 text-gray-500 hover:text-gray-300">
                <NavLink to="/contact">{t('contact')}</NavLink>
              </li>
            </ul>
          </nav>
          <a className="text-gray-600 hover:text-gray-300 text-2xl" href="https://github.com/dendihandian/agrabinta" target="_blank" rel="noopener noreferrer" title="Agrabinta github repository">
            <i className="fab fa-github"></i>
          </a>
          {/* TODO: language selector using https://react.i18next.com/latest/withtranslation-hoc */}
        </div>
      </header>
    )
}

export default withTranslation()(AppHeader);
