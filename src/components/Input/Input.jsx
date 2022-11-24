import React from 'react'
import './Input.css'

const Input = (props) => {
    const {
        className = '',
        placeholder,
        value,
        onChange,
    } = props

    return (
        <input
            className={`${className} input`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input