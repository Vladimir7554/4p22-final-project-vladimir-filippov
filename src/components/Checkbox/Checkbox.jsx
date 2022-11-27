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
        error = '',
    } = props

    const hasError = Boolean(error)

    return (
        <label className={`${className} checkbox`}>
        <input
            className={`checkbox__control visually-hidden ${hasError ? 'is-invalid' : ''}`}
            checked={isChecked}
            onChange={onChange}
            id={id}
            name={name}
            type="checkbox"
            error={error}
        />
            <span className="checkbox__emulator" />
                <span className="checkbox__label">{label}</span>
            {hasError && <div className="error">{error}</div> }
        </label>
    )
}

export default Checkbox;