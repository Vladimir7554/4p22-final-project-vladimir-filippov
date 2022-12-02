import React from 'react'
import './Footer.css'

const Footer = (props) => {
  const {
    className = '',
  } = props

  return (

    <footer className={`${className} footer`}>
      Оставайтесь на связи
      8-800-77-07-999 (c 03:00 до 22:00)
    </footer>

  )
  }

  export default Footer