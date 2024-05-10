import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const location = useLocation()

  const links = [
    { text: 'Home', to: '/' },
  ]

  const activeClass = 'text-white bg-gray-900'
  const inactiveClass = 'text-gray-300 hover:text-white hover:bg-gray-700'

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, i) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      location.pathname === link.to
                        ? activeClass
                        : inactiveClass
                    } ${i > 0 && 'ml-4'}`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Nav
