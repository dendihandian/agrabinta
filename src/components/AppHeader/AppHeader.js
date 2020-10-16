import React from 'react';

export const AppHeader = () => {
    return (
      <header className="h-16 px-5 flex items-center justify-center sm:justify-between bg-gray-800">
        <div className="logo-wraper h-4 flex items-center">
          <h1 className="text-2xl font-medium tracking-wider text-blue-500" title="Agrabinta">
            Agra<span className="text-blue-300">bin<span className="text-blue-200">ta</span></span>
          </h1>
        </div>
        <div className="hidden sm:block">
          <a className="text-gray-600 hover:text-blue-800 text-2xl" href="https://github.com/dendihandian/agrabinta" target="_blank" rel="noopener noreferrer" title="Agrabinta github repository">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </header>
    )
}
