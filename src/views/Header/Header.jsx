import React from 'react'
import {NavLink} from "react-router-dom"
import './Header.css'

const defaultMenuItems = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/basket',
    label: 'Basket',
  },
  {
    href: '/feedback',
    label: 'Feedback',
  },
]

const Header = (props) => {
  const {
    className = '',
      menuItems=defaultMenuItems,
  } = props

  return (

    <header className={`${className} header`}>
      <nav className="header__menu">
      <ul className="header__menu-list">
      {menuItems.map(({href, label}) => (
          <li className="header__menu-item" key={label}>
            <NavLink
            className={({ isActive}) => {
              return `header__menu-link ${isActive ? 'is-active' : ''}`
            }}
            to={href}
            >{label}
            </NavLink>
          </li>
      ))}
    </ul>
      </nav>
    </header>

  )
  }

  export default Header