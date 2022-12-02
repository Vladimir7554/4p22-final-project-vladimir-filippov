import React from 'react'
import {NavLink} from "react-router-dom"
import './Header.css'
import svg from "./dns.png"

const defaultMenuItems = [
  {
    href: '/',
    label: 'Главная',
  },
  {
    href: '/basket',
    label: 'Корзина',
  },
  {
    href: '/feedback',
    label: 'Связь c нами',
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
        <img
            src={svg}
            width="140px"
            height="140px"
        />
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