import React from 'react';
import './Checkbox.css'

const Checkbox = (props) => {
    const {
        className = '',
        isChecked = false,
        onChange,
        label,
        name,
        id = name,
    } = props

    return (
        <label className={`${className} checkbox`}>
        <input
            className="checkbox__control visually-hidden"
            checked={isChecked}
            onChange={onChange}
            id={id}
            name={name}
            type="checkbox"
        />
            <span className="checkbox__emulator" />
                <span className="checkbox__label">{label}</span>
        </label>
    )
}

export default Checkbox;