import React from 'react'

export const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='nav-title'>
            <h1>Weather App</h1>
        </div>
        <nav className='nav-container'>
            <ul className='nav-elements'>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Github</a></li>
            </ul>
        </nav>
    </div>
  )
}
